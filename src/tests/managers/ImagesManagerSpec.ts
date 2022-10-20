import resizeImage from "../../managers/ImagesManager";

describe("Test Images Manager", (): void => {
  it("Should return false after error occured while resize image", async (): Promise<void> => {
    const result = await resizeImage("s", "d", "0", "1");
    expect(result).toBe(false);
  });
});
