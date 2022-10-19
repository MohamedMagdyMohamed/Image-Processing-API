import validateImagesQueries from "../../utils/ImagesQueryUtils";

describe("Test Images Query Utils", () => {
  it("Should return filename must exists if no filename sent", () => {
    const res = validateImagesQueries(undefined, "1", "1");
    expect(res).toBe("Filename must be exists");
  });

  it("Should return width must exists if no width sent", () => {
    const res = validateImagesQueries("s", undefined, "1");
    expect(res).toBe("Width must be exists");
  });

  it("Should return height must exists if no height sent", () => {
    const res = validateImagesQueries("s", "1", undefined);
    expect(res).toBe("Height must be exists");
  });

  it("Should return true when all the validation runs", () => {
    const res = validateImagesQueries("s", "1", "1");
    expect(res).toBe(true);
  });
});
