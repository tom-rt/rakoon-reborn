package user

import (
	"log"

	"golang.org/x/net/context"
)

type Server struct {
}

func (s *Server) SayHello(ctx context.Context, in *User) (*User, error) {
	log.Printf("Receive message body from client: %s", in.Name)
	return &User{Name: "Hello From the Server!"}, nil
}
