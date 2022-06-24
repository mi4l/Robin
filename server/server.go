package main

import (
	"github.com/labstack/echo/v4"
	"net/http"
)

type TestStruct struct {
	Username string `json:"username" xml:"username"`
	Age      int    `json:"age" xml:"age"`
	NumPosts int    `json:"numPosts" xml:"numPosts"`
}

func main() {
	e := echo.New()
	e.GET("/", func(c echo.Context) error {
		testJSON := &TestStruct{
			Username: "jacob",
			Age:      34,
			NumPosts: 938409,
		}

		return c.JSON(http.StatusOK, testJSON)
	})
	e.Logger.Fatal(e.Start(":1323"))
}
