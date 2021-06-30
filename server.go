package main

import (
	"fmt"
	"log"
	"net"
	"rakoon/rakoon-reborn/user"

	"google.golang.org/grpc"
)

func main() {

	fmt.Println("Go gRPC Beginners Tutorial!")

	lis, err := net.Listen("tcp", fmt.Sprintf(":%d", 9000))
	if err != nil {
		log.Fatalf("failed to listen: %v", err)
	}

	// userService := user.UserServiceServer{}
	// userService := user.UserServiceServer{}
	var service user.UserServiceServer

	// fmt.Println(userService)

	grpcServer := grpc.NewServer()
	user.RegisterUserServiceServer(grpcServer, service)


	if err := grpcServer.Serve(lis); err != nil {
		log.Fatalf("failed to serve: %s", err)
	}
}