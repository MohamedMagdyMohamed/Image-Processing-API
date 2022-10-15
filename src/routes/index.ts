import express from "express";
import imagesRountes from "./api/images";

/**
 * Get the router from express.
 * https://expressjs.com/en/guide/routing.html
 */
const routes = express.Router();

// Add a basic get request and send string to test the simple get request.
routes.get("/", (req, res) => {
  res.send("Hello World!");
});

// Add the images reoute to the main router.
routes.use("/images", imagesRountes);

// export the routes object to be added as a midleware for the app object.
export default routes;
