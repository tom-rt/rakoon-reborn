# rakoon-reborn

New version with file streaming using gRPC and a brand new react client !

protoc --go_out=. user.proto
protoc --go_out=user user.proto

protoc --go-grpc_out=. user.proto
protoc --go-grpc_out=user user.proto

protoc --go_out=plugins=grpc:. user.proto

Modeles:
protoc --go_out=. user.proto
Services:
protoc --go-grpc_out=. user.proto
