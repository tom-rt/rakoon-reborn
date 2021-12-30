package file

import (
	"bytes"
	"fmt"
	"io"
	"log"
	pbs "rakoon-reborn/pbs"

	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
)

type FileServiceServer struct {
	pbs.UnimplementedFileServiceServer
}

func (s FileServiceServer) Upload(stream pbs.FileService_UploadServer) (error) {
	fmt.Println("Uploading file...")
	
	req, err := stream.Recv()
	fileName := req.GetFileName()
	fmt.Println("File name:", fileName)

	if err != nil {
		log.Print(status.Errorf(codes.Unknown, "cannot receive image info"))
		return err
	}

    fileData := bytes.Buffer{}
    fileSize := 0

	fmt.Println(fileData, fileSize)

    for {
        log.Print("waiting to receive more data")

        req, err := stream.Recv()
        if err == io.EOF {
            log.Print("no more data")
            break
        }
        if err != nil {
            log.Print(status.Errorf(codes.Unknown, "cannot receive chunk data: %v", err))
			break
		}

        chunk := req.GetContent()
        size := len(chunk)

        log.Printf("received a chunk with size: %d", size)

        fileSize += size

		_, err = fileData.Write(chunk)
        if err != nil {
            log.Print(status.Errorf(codes.Internal, "cannot write chunk data: %v", err))
			break
		}

    }

    res := &pbs.Response{
        Message: "File uploaded",
        Size: int64(fileSize),
    }

    err = stream.SendAndClose(res)
    if err != nil {
        log.Print(status.Errorf(codes.Unknown, "cannot send response: %v", err))
		return nil
	}

    log.Printf("Saved file !")
    return nil
}

func (s FileServiceServer) Download(input *pbs.FilePath, downloadServer pbs.FileService_DownloadServer) (error) {
	fmt.Println("Downloading file...")
	return nil
}
