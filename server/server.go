package main

import (
	"net/http"

	"github.com/labstack/echo/v4"
)

type MetaStruct struct {
	Total int `json:"total"`
}

type TestJSON struct {
	Meta MetaStruct `json:"meta"`
	Data []string `json:"data"`
}



func main() {
	e := echo.New()

	e.GET("/", func(c echo.Context) error {

		return c.File("../templates/index.html")
		
	})

	test := &TestJSON{
		Meta: MetaStruct{},
		Data: []string{},
	}

	e.GET("/content", func(c echo.Context) error {
		return c.JSON(http.StatusOK, test)
	})

	e.Logger.Fatal(e.Start(":1323"))
}
