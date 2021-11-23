package base

import (
	"context"
	"fmt"
	pbs "rakoon-reborn/pbs"
)

type UserServiceServer struct {
	pbs.UnimplementedUserServiceServer
}

// Connect Rpc
func (s UserServiceServer) Login(ctx context.Context, input *pbs.LoginRequest) (*pbs.LoginResponse, error) {
	fmt.Println("Ici !")
	return &pbs.LoginResponse{Granted: true, Token: "token"}, nil
}
