import { promises as fsPromises } from "fs";
import path from "path";

// file utils to do operations on files
class FileUtils {
  private static imageFullPath = path.resolve(__dirname, "../../assets/full");
  private static imageThumbPath = path.resolve(__dirname, "../../assets/thumb");

  /**
   * check if the file exists in assets/full folder
   * @param filename filename to be checked if it exists in assets/full folder
   * @returns wether this file exists or not
   */
  static async isImageAvailableinFull(filename: string): Promise<boolean> {
    const files = await fsPromises.readdir(FileUtils.imageFullPath);
    const file = files.map((filename) => filename.split(".")[0])[0];
    return file == filename;
  }

  /**
   * check if the file exists in assets/thumb folder
   * @param filename filename to be checked if it exists in assets/thumb folder
   * @returns wether this file exists or not
   */
  static async isImageAvailableinThumb(filename: string): Promise<boolean> {
    const files = await fsPromises.readdir(FileUtils.imageThumbPath);
    const file = files.map((filename) => filename.split(".")[0])[0];
    return file == filename;
  }
}

// export the fileUtils class to be used by other files
export default FileUtils;
