package main

import (
	"fmt"
	"log"
	"net"

	file "rakoon-reborn/feature/file"
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

	grpcServer := grpc.NewServer()
	pbs.RegisterFileServiceServer(grpcServer, fileService)
	grpcServer.Serve(lis)
}
