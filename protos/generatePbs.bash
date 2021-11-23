# removing old files
rm ../client/src/pbs/*
rm ../server/pbs/*

# Client pbd generation:
PROTOC_GEN_TS_PATH="../client/node_modules/.bin/protoc-gen-ts"
OUT_DIR="../client/src/pbs"
# models:
protoc --plugin="protoc-gen-ts=${PROTOC_GEN_TS_PATH}" --js_out="import_style=commonjs,binary:${OUT_DIR}" --ts_out="${OUT_DIR}" *.proto 
# services:
protoc --plugin="protoc-gen-ts=${PROTOC_GEN_TS_PATH}" --js_out="import_style=commonjs,binary:${OUT_DIR}" --ts_out="service=grpc-web:${OUT_DIR}" *.proto


# Server pbs generation:
#models:
protoc --go-grpc_out=../server *.proto
# services:
protoc --go_out=../server *.proto

