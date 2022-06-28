package main

import (
	"fmt"
	"net/http"

	"github.com/labstack/echo/v4"
)

type ContentResponseMeta struct {
	Total int `json:"total"`
}

type Content struct {
	Body string `json:"body"`
}

type ContentResponse struct {
	Meta ContentResponseMeta `json:"meta"`
	Data []Content `json:"data"`
}

func handlePostReq(w http.ResponseWriter, req *http.Request) {
  req.ParseForm()
  fmt.Println("id", req.Form["id"])
  req.Form.Get("id")
  fmt.Println(req.PostFormValue("id"))
}

func main() {
	e := echo.New()

	e.GET("/", func(c echo.Context) error {

		return c.File("../templates/index.html")
		
	})

	res := &ContentResponse{
		Meta: ContentResponseMeta{},
		Data: []Content{},
	}

	e.GET("/content", func(c echo.Context) error {
		return c.JSON(http.StatusOK, res)
	})

  http.HandleFunc("/postTest", handlePostReq)

	// e.Logger.Fatal(e.Start(":1323"))
  e.Logger.Fatal(http.ListenAndServe(":1323", nil))
}
