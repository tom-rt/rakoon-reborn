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
	} else {
		fmt.Println("Listening on 9000")
	}

	var service user.UserServiceServer

	grpcServer := grpc.NewServer()
	user.RegisterUserServiceServer(grpcServer, service)

	// looping here
	if err := grpcServer.Serve(lis); err != nil {
		log.Fatalf("failed to serve: %s", err)
	} else {
		fmt.Println("Server is running")
	}
}