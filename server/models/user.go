package models

type RakoonUser struct {
	Id int
	Username string
	Password string
	Salt string
}