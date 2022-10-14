import express from "express";

// Use express to setup a server
// Using https://expressjs.com/en/starter/hello-world.html
const app = express();
// Set port to listen to when start server.
const port = 3000;

// Add a basic get request and send string to test the simple get request.
app.get("/", (req, res) => {
  res.send("Hello World!");
});

// Listen to this port and set a console message when starting server to test the server connection.
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
