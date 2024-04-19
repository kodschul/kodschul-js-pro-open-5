const socket = io("http://localhost:3000");

const textArea = document.getElementById("content");
textArea.style.width = "500px";

socket.on("new_chat", (data) => {
  textArea.value += "\n " + data.senderId + ": " + data.message;
});

const sendMessage = () => {
  let message = document.getElementById("message").value;
  socket.emit("chat", {
    message: message,
  });
};
