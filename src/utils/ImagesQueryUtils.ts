/**
 * Validate the images queries.
 * @param filename name of the image file to be resized
 * @param width the width in which the image is going to be resized to
 * @param height the height in which the image is going to be resized to
 * @returns string if there is an error validating the qurey paramaters and null if there is no errors.
 */
const validateImagesQueries = (
  filename: string | undefined,
  width: string | undefined,
  height: string | undefined
): string | boolean => {
  if (filename == undefined) {
    return "Filename must be exists";
  }
  if (width == undefined) {
    return "Width must be exists";
  }
  const widthNumber = parseInt(width) as number;
  if (isNaN(widthNumber)) {
    return "width must be a number";
  }
  if (widthNumber <= 0) {
    return "width must be grater than 0";
  }
  if (height == undefined) {
    return "Height must be exists";
  }
  const heightNumber = parseInt(height) as number;
  if (isNaN(heightNumber)) {
    return "height must be a number";
  }
  if (heightNumber <= 0) {
    return "height must be grater than 0";
  }
  return true;
};

export default validateImagesQueries;
