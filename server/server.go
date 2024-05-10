package main

import (
	"log"
	"net/http"
	"time"

	"github.com/gorilla/websocket"
)

var upgrader = websocket.Upgrader{
	ReadBufferSize:  1024,
	WriteBufferSize: 1024,
}

type GameState struct {
	isRunning bool
}

func (state *GameState) handler(w http.ResponseWriter, r *http.Request) {
	println("Got a connection!")
	upgrader.CheckOrigin = func(r *http.Request) bool { return true }
	conn, err := upgrader.Upgrade(w, r, nil)
	if err != nil {
		log.Println(err)
		return
	}
	for {
		_, p, err := conn.ReadMessage()
		if err != nil {
			println("someting went wrong reading")
			return
		}
		println(p[0])
		stateData := make([]byte, 4)
		for i := 0; i < 4; i++ {
			stateData[i] = byte(i + 5)
		}

		writeErr := conn.WriteMessage(websocket.BinaryMessage, stateData)
		if writeErr != nil {
			println("something went wrong responding")
			return
		}
	}
}

func gameLoop(state *GameState) {
	for range time.Tick(16 * time.Millisecond) {

	}
}
func main() {
	state := GameState{false}
	println("Setting up handlers...")
	http.HandleFunc("/state", state.handler)
	go http.ListenAndServe(":8080", nil)
	println("Listening on localhost...")
	gameLoop(&state)
}
