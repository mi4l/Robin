package main

import (
	"bytes"
	"encoding/json"
	"fmt"
	"io/ioutil"
	"log"
	"net/http"

	"github.com/labstack/echo/v4"
)

type ContentResponseMeta struct {
	Total int `json:"total"`
}

type Content struct {
	ContentBody string `json:"content_body"`
}

type ContentResponse struct {
	Meta ContentResponseMeta `json:"meta"`
	Data []Content `json:"data"`
}

func requestFacebook(c echo.Context) error {
  postURL := fmt.Sprintf("https://graph.facebook.com/%s/feed", FB_PAGE_ID)

  postBody, _ := json.Marshal(map[string]string{
    "message":  "Hello from Go!",
    "access_token": FB_PAGE_ACCESS_TOKEN,
  })
  reqBody := bytes.NewBuffer(postBody)

  resp, err := http.Post(postURL, "application/json", reqBody)

  if err != nil {
    log.Fatalf("An Error Occured %v", err)
  }
  
  defer resp.Body.Close()

  body, err := ioutil.ReadAll(resp.Body)
  
  if err != nil {
    log.Fatalln(err)
  }
  fmt.Printf("server: request body: %s\n", body)

  return c.String(http.StatusOK, "Successfully posted to Facebook!")
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

  e.POST("/content", requestFacebook)

	e.Logger.Fatal(e.Start(":1323"))
}
