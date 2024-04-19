const socket = new WebSocket(
  "ws://localhost:3000/socket.io/?EIO=3&transport=websocket"
);

// Eventlistener für Verbindungsereignisse
socket.addEventListener("open", function (event) {
  console.log("Verbindung hergestellt.");
});

socket.addEventListener("close", function (event) {
  console.log("Verbindung geschlossen.");
});

socket.addEventListener("error", function (event) {
  console.error("Fehler aufgetreten:", event);
});

// Nachrichten senden und empfangen
socket.addEventListener("message", function (event) {
  const message = event.data;
  console.log("Nachricht empfangen:", message);

  document.getElementById("content").innerHTML =
    document.getElementById("content").innerHTML + "\n" + message;
});

const sendMessage = () => {
  let message = document.getElementById("message").value;
  socket.send(message);
};
