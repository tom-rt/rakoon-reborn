
https://dev.to/techschoolguru/upload-file-in-chunks-with-client-streaming-grpc-golang-4loc
# How does it work ?

The architecture is pretty simple:

React app  <- http1 ->  envoy  <- hhtp 2 -> Go server

# PROXY
## Using docker: 
docker build -t grpc-envoy:1.0 .
docker run --network=host grpc-envoy:1.0

## Without docker: 
envoy -c envoy.yaml
# SERVER
go get .
go install google.golang.org/grpc/cmd/protoc-gen-go-grpc@latest
export PATH="${PATH}:${HOME}/go/bin"
go run server.go
# CLIENT
npm install ts-protoc-gen
npm install grpc-web
npm install google-protobuf
npm install @improbable-eng/grpc-web
npm install

Add `
    "ignorePatterns": [
      "**/*_pb.js"
    ]
`
To "eslintConfig" in your package.json

npm start
# PROTOS

cd protos
## Client pbs generation:
PROTOC_GEN_TS_PATH="../client/node_modules/.bin/protoc-gen-ts"
OUT_DIR="../client/src/pbs"
### models:
protoc --plugin="protoc-gen-ts=${PROTOC_GEN_TS_PATH}" --js_out="import_style=commonjs,binary:${OUT_DIR}" --ts_out="${OUT_DIR}" *.proto 

### services:
protoc --plugin="protoc-gen-ts=${PROTOC_GEN_TS_PATH}" --js_out="import_style=commonjs,binary:${OUT_DIR}" --ts_out="service=grpc-web:${OUT_DIR}" *.proto
## Server pbs generation:
### models:
protoc --go-grpc_out=../server *.proto

### services:
protoc --go_out=../server *.proto

