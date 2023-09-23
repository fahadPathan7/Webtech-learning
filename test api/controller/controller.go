package controller

import (
	"database/sql"
	"fmt"
	"net/http"
)

var db *sql.DB
// connect to mysql database
func Create(w http.ResponseWriter, r *http.Request) {
	var err error
	db, err = sql.Open("mysql", "fahadpathan56:fahadpathan@tcp(localhost:3306)/ftms")
	if err != nil {
		panic(err.Error())
	}

	defer db.Close()
	fmt.Println("Successfully connected to mysql database")
}

func GetAllMovies(w http.ResponseWriter, r *http.Request) {
}

func GetOneMovie(w http.ResponseWriter, r *http.Request) {

}

func AddMovie(w http.ResponseWriter, r *http.Request) {

}

func MarkAsWatched(w http.ResponseWriter, r *http.Request) {

}

func DeleteOneMovie(w http.ResponseWriter, r *http.Request) {

}

func DeleteAllMovies(w http.ResponseWriter, r *http.Request) {

}