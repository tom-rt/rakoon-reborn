package base

import (
	"context"
	"fmt"
	"math/rand"
	db "rakoon-reborn/feature/db"

	pbs "rakoon-reborn/pbs"

	_ "github.com/mattn/go-sqlite3"
	"golang.org/x/crypto/bcrypt"
)

type UserServiceServer struct {
	pbs.UnimplementedUserServiceServer
}

// Login Rpc
func (s UserServiceServer) Login(ctx context.Context, input *pbs.LoginRequest) (*pbs.LoginResponse, error) {

	// db.SignUserUp(input.UserName, input.Password)	

	return &pbs.LoginResponse{Granted: true, Token: "token"}, nil
}

// Sign Up Rpc
func (s UserServiceServer) SignUp(ctx context.Context, input *pbs.SignUpRequest) (*pbs.SignUpResponse, error) {
	user, err := db.GetUserByName(input.UserName)

	// Check err ?
	if (user.Id != 0) {
		fmt.Println("taken", user.Id, err)
		return &pbs.SignUpResponse{Code: 401, Message: "Username already taken."}, nil
	}
	fmt.Println("create")

	var salt string = generateSalt(10)
	hash, err := generateHash(input.Password + salt)

	if (err != nil) {
		return &pbs.SignUpResponse{Code: 500, Message: "Error hashing password."}, nil
	}

	err = db.SignUserUp(input.UserName, hash, salt, input.IsAdmin)

	if (err != nil) {
		return &pbs.SignUpResponse{Code: 500, Message: "Error inserting user in db."}, nil
	}

	return &pbs.SignUpResponse{Code: 200}, nil
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