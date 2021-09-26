package file

import (
	"fmt"
	pbs "rakoon-reborn/pbs"
)

type FileServiceServer struct {
	pbs.UnimplementedFileServiceServer
}

func (s FileServiceServer) Upload(uploadServer pbs.FileService_UploadServer) (error) {
	fmt.Println("Uploading file...")
	return nil
}

func (s FileServiceServer) Download(input *pbs.FilePath, downloadServer pbs.FileService_DownloadServer) (error) {
	fmt.Println("Downloading file...")
	return nil
}
