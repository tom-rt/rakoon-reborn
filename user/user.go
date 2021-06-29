package user

import (
	"log"

	"golang.org/x/net/context"
)

type UserService struct {
}

func (s *UserService) SayHello(ctx context.Context, in *User) (*User, error) {
	log.Printf("Receive message body from client: %s", in.Name)
	return &User{Name: "Hello From the Server!"}, nil
}
