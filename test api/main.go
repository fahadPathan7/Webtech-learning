package main

import (
	"fmt"
	"main/controller"
	"main/router"
	"net/http"

	"github.com/rs/cors"

	_ "github.com/go-sql-driver/mysql"
)

type Netflix struct {
	ID int `json:"_id,omitempty"`
	Movie string `json:"movie,omitempty"`
	Watched bool `json:"watched,omitempty"`
}

func main() {
	controller.Create(nil, nil) // create database connection

	r := router.Router() // create router.
	// Create a CORS handler with desired options
    c := cors.New(cors.Options{
        AllowedOrigins: []string{"*"}, // Replace with your allowed origins
        AllowedMethods: []string{"GET", "POST", "PUT", "DELETE"},
    })

    // Wrap your router with the CORS handler
    handler := c.Handler(r)

    http.Handle("/", handler)
    http.ListenAndServe(":3306", nil)
	fmt.Println("server is running at port 5000")
}