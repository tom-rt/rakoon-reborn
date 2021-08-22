package main

import (
	"fmt"
	"log"
	"net"
	"rakoon/rakoon-reborn/user"

	"google.golang.org/grpc"
)

// address := "0.0.0.0:50051"
// lis, err := net.Listen("tcp", address)
// if err != nil {
// 	log.Fatalf("Error %v", err)
// }
// fmt.Printf("Server is listening on %v ...", address)

// s := grpc.NewServer()
// hellopb.RegisterHelloServiceServer(s, &server{})

// s.Serve(lis)

func main() {

	address := "0.0.0.0:50051"
	lis, err := net.Listen("tcp", address)
	if err != nil {
		log.Fatalf("Error %v", err)
	}
	fmt.Printf("Server is listening on %v ...", address)

	//#############
	// s := grpc.NewServer()
	// hellopb.RegisterHelloServiceServer(s, &server{})

	// s.Serve(lis)
	//#############

	// service := new(user.UserServiceServer)
	// service := user.UserServiceServer{}
	// service := user.UserServiceServer{user.SayHello, user.user.UnimplementedUserServiceServer{}}
	var service user.UserServiceServer

	grpcServer := grpc.NewServer()
	user.RegisterUserServiceServer(grpcServer, service)

	// // looping here
	if err := grpcServer.Serve(lis); err != nil {
		log.Fatalf("failed to serve: %s", err)
	}
}
