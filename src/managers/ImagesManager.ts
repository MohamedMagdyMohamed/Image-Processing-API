import sharp from "sharp";

/**
 * Resize image using Sharp with width and height and set the result image in the result path
 * @param filePath file source in which the image is going to be proccessed
 * @param resultFilePath result file soruce in which the proccessed image is going to be saved
 * @param width width in which the proccessed image is going to be resized
 * @param height height in which the proccessed image is going to be resized
 * @returns return true if the resizeImage is completed successfuly, false if there is any error occured
 */
const resizeImage = async (
  filePath: string,
  resultFilePath: string,
  width: string,
  height: string
): Promise<boolean> => {
  try {
    await sharp(filePath)
      .resize({
        width: parseInt(width),
        height: parseInt(height),
      })
      .toFile(resultFilePath);
    return true;
  } catch (error) {
    console.log("Error at resizeImage : " + error);
    return false;
  }
};

export default resizeImage;
