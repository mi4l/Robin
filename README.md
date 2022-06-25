# Robin
**DISCLAIMER:** Robin is a repository designed to be a teaching tool for entry-level developers to better understand implementing features.  It's not meant to be a real product.

`Robin` allows users to manage posts on all of their social media networks. 

### Setting up and running the local Go server
1) Install Go from [the official Go website](https://go.dev/)
2) From a terminal, navigate to the `/server` directory
3) Run the command `go get ./...` to install all project dependencies (in this case, it should install [Echo](https://echo.labstack.com/guide/) for the local server)
4) To start the local server, run the terminal command `go run server.go`
5) In a browser, navigate to http://localhost:1323/ to see the server running
6) Press `Control + C` in your terminal to stop the server process