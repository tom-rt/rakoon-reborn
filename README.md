protoc --go_out=. --go_opt=paths=source_relative \ 
    --go-grpc_out=. --go-grpc_opt=paths=source_relative \
    user/user.proto

protoc --go-grpc_out=. user/user.proto
protoc --go_out=. user/user.proto