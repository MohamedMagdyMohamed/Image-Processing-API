import express from "express";
import validateImagesQueries from "../../utils/ImagesQueryUtils";
import fileUtils from "../../utils/FilesUtils";

/**
 * Get the router from express.
 * https://expressjs.com/en/guide/routing.html
 */
const routes = express.Router();

//
/**
 * get the main images route.
 * return bad request 400 if one or more of the query paramater are not correct. (filename, widht, height)
 */
routes.get("/", (req, res) => {
  const query = req.query;
  const filename = query.filename as string | undefined;
  const width = query.width as number | undefined;
  const height = query.height as number | undefined;
  // validate the images endpoint query paramaters.
  const validateImagesquery = validateImagesQueries(filename, width, height);
  if (validateImagesquery != true) {
    res.status(400).send(validateImagesquery);
    return;
  }
  if (!fileUtils.isImageAvailableinFull(filename as string)) {
    res.status(400).send("Image is not in the assets/full");
    return;
  }
  res.send("Hello From Images");
});

// export the images routes object to be added as a midleware for the app object.
export default routes;
