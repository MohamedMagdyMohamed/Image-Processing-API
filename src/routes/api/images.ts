import express from "express";
import validateImagesQueries from "../../utils/ImagesQueryUtils";
import fileUtils from "../../utils/FilesUtils";
import resizeImage from "../../managers/ImagesManager";

/**
 * Get the router from express.
 * https://expressjs.com/en/guide/routing.html
 */
const routes = express.Router();

/**
 * get the main images route.
 * return bad request 400 if one or more of the query paramater are not correct. (filename, widht, height)
 */
routes.get("/", async (req, res) => {
  const query = req.query;
  const filename = query.filename as string | undefined;
  const width = query.width as string | undefined;
  const height = query.height as string | undefined;
  // validate the images endpoint query paramaters.
  const validateImagesquery = validateImagesQueries(filename, width, height);
  if (validateImagesquery != true) {
    res.status(400).send(validateImagesquery);
    return;
  }
  // if image is not exists in assests/full return error
  if (!fileUtils.isImageAvailableinFull(filename as string)) {
    res.status(400).send("Image is not in the assets/full");
    return;
  }
  const thumbImagePath = await fileUtils.getThumbImageFilPath(
    filename as string
  );
  const isImageAvailableInThumb = await fileUtils.isImageAvailableinThumb(
    filename as string
  );
  // if image is exists already in assets/thumb then return this image instead
  if (isImageAvailableInThumb) {
    res.sendFile(thumbImagePath);
    return;
  }
  const fullImagePath = await fileUtils.getFullImageFilePath(
    filename as string
  );
  // resize image and send the result resized image
  const resizeImageResult = await resizeImage(
    fullImagePath,
    thumbImagePath,
    width as string,
    height as string
  );
  // if the resizeImage completed successfuly then return this image
  if (resizeImageResult) {
    res.sendFile(thumbImagePath);
    return;
  }
  // error occured should not happen
  res.status(400).send("Error has been occured");
});

// export the images routes object to be added as a midleware for the app object.
export default routes;
