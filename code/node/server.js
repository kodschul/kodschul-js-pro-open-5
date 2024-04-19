const express = require("express");
const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.json());

const users = [
  { id: 1, name: "John" },
  { id: 2, name: "Jane" },
];

app.get("/api/users", (req, res) => {
  if (req.query.name) {
    // search
    // ....
  } else {
    // send all
    res.json(users);
  }
});

app.post("/api/create-user", (req, res) => {
  req.body;
  users.push({ id: users.length + 1, name: req.body.name });

  res.send("ok");
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
