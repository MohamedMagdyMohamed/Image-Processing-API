import { promises as fsPromises } from "fs";
import path from "path";

// file utils to do operations on files
class FileUtils {
  private static imageFullPath = path.resolve(__dirname, "../../assets/full");
  private static imageThumbPath = path.resolve(__dirname, "../../assets/thumb");

  /**
   * Return full image path for a specific filename at assests/full path
   * @param filename filename in which the full path will be returned
   * @returns full image path for a specific filename
   */
  static async getFullImageFilePath(filename: string): Promise<string> {
    const files = await fsPromises.readdir(FileUtils.imageFullPath);
    let file = "";
    for (const f of files) {
      if ((f.split(".")[0] as string) == filename) {
        file = f;
        break;
      }
    }
    return path.resolve(FileUtils.imageFullPath, file);
  }

  /**
   * Return full image path for a specific filename at assests/thumb path
   * @param filename filename in which the full path will be returned
   * @param width width in which the saved file name will have
   * @param height width in which the saved file name will have
   * @returns full image path for a specific filename
   */
  static async getThumbImageFilPath(
    filename: string,
    width: string,
    height: string
  ): Promise<string> {
    const files = await fsPromises.readdir(FileUtils.imageThumbPath);
    let file = filename + "_" + width + "_" + height + ".jpg";
    for (const f of files) {
      if (f.split(".")[0] == filename + "_" + width + "_" + height) {
        file = f;
        break;
      }
    }
    return path.resolve(FileUtils.imageThumbPath, file);
  }

  /**
   * check if the file exists in assets/full folder
   * @param filename filename to be checked if it exists in assets/full folder
   * @returns wether this file exists or not
   */
  static async isImageAvailableinFull(filename: string): Promise<boolean> {
    const files = await fsPromises.readdir(FileUtils.imageFullPath);
    for (const f of files) {
      if ((f.split(".")[0] as string) == filename) {
        return true;
      }
    }
    return false;
  }

  /**
   * check if the file exists in assets/thumb folder
   * @param filename filename to be checked if it exists in assets/thumb folder
   * @param width width in which the saved file name will have
   * @param height width in which the saved file name will have
   * @returns wether this file exists or not
   */
  static async isImageAvailableinThumb(
    filename: string,
    width: string,
    height: string
  ): Promise<boolean> {
    const files = await fsPromises.readdir(FileUtils.imageThumbPath);
    const file = filename + "_" + width + "_" + height;
    for (const f of files) {
      if ((f.split(".")[0] as string) == file) {
        return true;
      }
    }
    return false;
  }
}

// export the fileUtils class to be used by other files
export default FileUtils;
