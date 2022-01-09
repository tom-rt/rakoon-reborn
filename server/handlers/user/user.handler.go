package base

import (
	"context"
	"fmt"
	"math/rand"
	db "rakoon-reborn/handlers/db"
	"time"

	pbs "rakoon-reborn/pbs"

	jwt "github.com/golang-jwt/jwt"
	_ "github.com/mattn/go-sqlite3"
	"golang.org/x/crypto/bcrypt"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
)

type UserServiceServer struct {
	pbs.UnimplementedUserServiceServer
}

var hmacSampleSecret []byte = []byte("mega secret key")

// Login Rpc
func (s UserServiceServer) Login(ctx context.Context, input *pbs.LoginRequest) (*pbs.LoginResponse, error) {
	user, err := db.GetUserByName(input.UserName)

	if err != nil {
		return nil, status.Error(codes.NotFound, "User not found.")
	}

	err = bcrypt.CompareHashAndPassword([]byte(user.Password), []byte(input.Password+user.Salt))

	if err != nil {
		return nil, status.Error(codes.NotFound, "Wrong password.")
	} else {

		token := jwt.NewWithClaims(jwt.SigningMethodHS256, jwt.MapClaims{
			"username": user.Username,
			"isAdmin":  user.IsAdmin,
			"nbf":      time.Date(2015, 10, 10, 12, 0, 0, 0, time.UTC).Unix(),
		})

		tokenString, err := token.SignedString(hmacSampleSecret)

		if err != nil {
			return nil, status.Error(codes.Internal, "Error generating token.")
		}

		return &pbs.LoginResponse{Token: tokenString, IsAdmin: user.IsAdmin}, nil
	}
}

// Sign Up Rpc
func (s UserServiceServer) SignUp(ctx context.Context, input *pbs.SignUpRequest) (*pbs.SignUpResponse, error) {
	user, err := db.GetUserByName(input.Username)

	// Check err ?
	if user.Id != 0 {
		fmt.Println("taken", user.Id, err)
		return nil, status.Error(codes.PermissionDenied, "Username already taken.")
		// return &pbs.SignUpResponse{Code: 401, Message: "Username already taken."}, nil
	}

	var salt string = generateSalt(10)
	hash, err := generateHash(input.Password + salt)

	if err != nil {
		return &pbs.SignUpResponse{Message: "Error hashing password."}, nil
	}

	err = db.SignUserUp(input.Username, hash, salt, input.IsAdmin)

	if err != nil {
		return &pbs.SignUpResponse{Message: "Error inserting user in db."}, nil
	}

	return &pbs.SignUpResponse{Message: "Signed up successfully"}, nil
}

// HashPassword function
func generateHash(password string) (string, error) {
	bytes, err := bcrypt.GenerateFromPassword([]byte(password), 14)
	return string(bytes), err
}

// GenerateSalt a random string to use as a password salt
func generateSalt(saltLength int) string {
	const letterBytes = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
	salt := make([]byte, saltLength)
	for i := range salt {
		salt[i] = letterBytes[rand.Intn(len(letterBytes))]
	}
	return string(salt)
}
