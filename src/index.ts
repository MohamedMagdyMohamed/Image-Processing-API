import express from "express";
import routes from "./routes/index";
// Use express to setup a server
// Using https://expressjs.com/en/starter/hello-world.html
const app = express();
// Set port to listen to when start server.
const port = 3000;

// Use the routes as the middleware for the app to abe /api/....
app.use("/api", routes);

// Listen to this port and set a console message when starting server to test the server connection.
app.listen(port, (): void => {
  console.log(`Example app listening on port ${port}`);
});

export default app;
