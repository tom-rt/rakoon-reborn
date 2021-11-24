package db

import (
	"fmt"
	"log"

	"database/sql"

	_ "github.com/mattn/go-sqlite3"
)

var db *sql.DB

func InitDb() {
	db, err := sql.Open("sqlite3", "./foo.db")
	if err != nil {
		log.Fatal(err)
	}
	defer db.Close()
}

// Login Rpc
func SignUserUp (username string, password string) {
	fmt.Println(username, password)

	sqlStmt := `
		insert into rakoon_user ()
	`
	_, err := db.Exec(sqlStmt)
	if err != nil {
		log.Printf("%q: %s\n", err, sqlStmt)
	}
}
