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
  if (height == undefined) {
    return "Height must be exists";
  }
  return true;
};

export default validateImagesQueries;
