package base

import (
	"context"
	"fmt"
	db "rakoon-reborn/db"
	pbs "rakoon-reborn/pbs"

	_ "github.com/mattn/go-sqlite3"
)

type UserServiceServer struct {
	pbs.UnimplementedUserServiceServer
}

// Login Rpc
func (s UserServiceServer) Login(ctx context.Context, input *pbs.LoginRequest) (*pbs.LoginResponse, error) {
	fmt.Println(input.UserName, input.Password)

	db.SignUserUp(input.UserName, input.Password)	

	return &pbs.LoginResponse{Granted: true, Token: "token"}, nil
}
