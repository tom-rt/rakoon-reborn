package db

import (
	"log"

	models "rakoon-reborn/models"

	"database/sql"

	_ "github.com/mattn/go-sqlite3"
)

var db *sql.DB

func InitDb() {
	var err error
	db, err = sql.Open("sqlite3", "./rakoon.db")
	if err != nil {
		log.Fatal(err)
	}
	// defer db.Close()
}

func GetUserByName(username string) (models.RakoonUser, error) {
	var id int
	var reqUsername string
	var password string
	var salt string

	rows, err := db.Query("select id, username, password, salt from rakoon_user WHERE username = '" + username + "';")
	if err != nil {
		log.Fatal(err)
	}

	rows.Next()
	err = rows.Scan(&id, &reqUsername, &password, &salt)

	defer rows.Close()
	return models.RakoonUser{Id: id, Username: reqUsername, Password: password, Salt: salt}, err
}

// Sign up Rpc
func SignUserUp (username string, password string, salt string, isAdmin bool) error {
	statement := `
		INSERT INTO
			rakoon_user (username, password, salt)
			VALUES ('` + username + `','` + password + `','` + salt +`')
		;`
	_, err := db.Exec(statement)
	if err != nil {
		log.Printf("DB ERROR %q: %s\n", err, statement)
	}
	return err
}
