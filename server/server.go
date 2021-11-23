package main

import (
	"fmt"
	"log"
	"net"

	file "rakoon-reborn/feature/file"
	user "rakoon-reborn/feature/user"
	pbs "rakoon-reborn/pbs"

	"google.golang.org/grpc"
)

func main() {
	fmt.Println("Listening on port 8080.")
	lis, err := net.Listen("tcp", fmt.Sprintf("localhost:%d", 8080))
	if err != nil {
		log.Fatalf("failed to listen: %v", err)
	}

	var fileService file.FileServiceServer = file.FileServiceServer{}
	var userService user.UserServiceServer = user.UserServiceServer{}

	grpcServer := grpc.NewServer()

	pbs.RegisterFileServiceServer(grpcServer, fileService)
	pbs.RegisterUserServiceServer(grpcServer, userService)

	grpcServer.Serve(lis)
}
