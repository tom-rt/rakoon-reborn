package main

import (
	"context"
	"flag"
	"fmt"
	"log"
	"net"

	pb "rakoon/rakoon-reborn/draft/user"

	"google.golang.org/grpc"
)

var (
	tls        = flag.Bool("tls", false, "Connection uses TLS if true, else plain TCP")
	certFile   = flag.String("cert_file", "", "The TLS cert file")
	keyFile    = flag.String("key_file", "", "The TLS key file")
	jsonDBFile = flag.String("json_db_file", "", "A json file containing a list of features")
	port       = flag.Int("port", 10000, "The server port")
)

type userServiceServer struct {
	pb.UnimplementedUserServiceServer
}

// GetFeature returns the feature at the given point.
func (s *userServiceServer) SayHello(ctx context.Context, point *pb.Input) (*pb.Output, error) {
	fmt.Println("HELLO")
	return &pb.Output{Output: "Hello From the Server!"}, nil
}

func newServer() *userServiceServer {
	// s := &userServiceServer{routeNotes: make(map[string][]*pb.RouteNote)}
	s := &userServiceServer{}
	// s.loadFeatures(*jsonDBFile)
	return s
}

func main() {
	flag.Parse()
    fmt.Println(*port)
    // fmt.Sprintf("localhost:%d", *port)
	lis, err := net.Listen("tcp", fmt.Sprintf("localhost:%d", *port))
	if err != nil {
		log.Fatalf("failed to listen: %v", err)
	}
	// var opts []grpc.ServerOption
	// if *tls {
	// 	if *certFile == "" {
	// 		*certFile = data.Path("x509/server_cert.pem")
	// 	}
	// 	if *keyFile == "" {
	// 		*keyFile = data.Path("x509/server_key.pem")
	// 	}
	// 	creds, err := credentials.NewServerTLSFromFile(*certFile, *keyFile)
	// 	if err != nil {
	// 		log.Fatalf("Failed to generate credentials %v", err)
	// 	}
	// 	opts = []grpc.ServerOption{grpc.Creds(creds)}
	// }
	// grpcServer := grpc.NewServer(opts...)
	grpcServer := grpc.NewServer()
	pb.RegisterUserServiceServer(grpcServer, newServer())
	grpcServer.Serve(lis)
}