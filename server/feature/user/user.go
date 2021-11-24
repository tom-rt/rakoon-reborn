package base

import (
	"context"
	"fmt"
	"log"
	pbs "rakoon-reborn/pbs"

	"database/sql"

	_ "github.com/mattn/go-sqlite3"
)

type UserServiceServer struct {
	pbs.UnimplementedUserServiceServer
}

// Connect Rpc
func (s UserServiceServer) Login(ctx context.Context, input *pbs.LoginRequest) (*pbs.LoginResponse, error) {
	fmt.Println(input.UserName, input.Password)

	db, err := sql.Open("sqlite3", "./foo.db")
	if err != nil {
		log.Fatal(err)
	}
	defer db.Close()

	sqlStmt := `
		insert into rakoon_user ()
	`
	_, err = db.Exec(sqlStmt)
	if err != nil {
		log.Printf("%q: %s\n", err, sqlStmt)
	}

	return &pbs.LoginResponse{Granted: true, Token: "token"}, nil
}
