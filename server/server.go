package main

import (
	"fmt"
	"io/ioutil"
	"net/http"
	"strings"

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

func handlePostReq() {
	url := "" // FB API

	payload := strings.NewReader("name=test&otherThing=test2")

	req, _ := http.NewRequest("POST", url, payload)

	req.Header.Add("content-type", "application/x-www-form-urlencoded")
	req.Header.Add("cache-control", "no-cache")

  res, _ := http.DefaultClient.Do(req)

  defer res.Body.Close()
  body, _ := ioutil.ReadAll(res.Body)

  fmt.Println(string(body))
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

	e.Logger.Fatal(e.Start(":1323"))
}
