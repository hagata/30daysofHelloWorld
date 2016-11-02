package main

import (
	"fmt"
	"os"
	"time"

	"net/http"

	"github.com/gin-gonic/gin"
)

func testHandler(context *gin.Context) {
	localtime := time.Now()
	context.JSON(200, gin.H{
		"message": "hellogo!",
		"time":    localtime.Format(time.Kitchen),
	})
}

func rootHandler(context *gin.Context) {
	context.HTML(http.StatusOK, "index.tpl.html", nil)
}

type Command struct {
	Cmd    string `json:"command"`
	Status string
}

func messageHandler(context *gin.Context) {

	context.HTML(http.StatusOK, "index.tpl.html", gin.H{
		"command":   context.PostForm("command"),
		"timestamp": time.Now().Format(time.Kitchen),
		"status":    "posted",
	})

	// context.JSON(200, gin.H{
	// 	"status":  "posted",
	// 	"time":    t,
	// 	"message": message,
	// })
	// context.Redirect(http.StatusPermanentRedirect, "/")
	fmt.Println("got here")
}

func main() {
	fmt.Println("Hello, Go Lang!")
	port := os.Getenv("PORT")

	router := gin.New()
	router.LoadHTMLGlob("*.tpl.html")
	router.Static("/static", "static")

	router.GET("/test", testHandler)
	router.GET("/", rootHandler)

	router.POST("/message", messageHandler)
	router.Run(":" + port)
}
