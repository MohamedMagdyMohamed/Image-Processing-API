import resizeImage from "../../managers/ImagesManager";

describe("Test Images Manager", () => {
  it("Should return false after error occured while resize image", async () => {
    const result = await resizeImage("s", "d", "0", "1");
    expect(result).toBe(false);
  });
});
