import FileUtils from "../../utils/FilesUtils";

describe("Test Files Utils", () => {
  it("Should return true if image is in assets/full", async () => {
    spyOn(FileUtils, "isImageAvailableinFull").and.resolveTo(true);
    const res = await FileUtils.isImageAvailableinFull("fjord");
    expect(res).toBe(true);
  });

  it("Should return false if image isnot in assets/full", async () => {
    spyOn(FileUtils, "isImageAvailableinFull").and.resolveTo(false);
    const res = await FileUtils.isImageAvailableinFull("f");
    expect(res).toBe(false);
  });

  it("Should return true if image is in assets/thumb", async () => {
    spyOn(FileUtils, "isImageAvailableinThumb").and.resolveTo(true);
    const res = await FileUtils.isImageAvailableinThumb("fjord");
    expect(res).toBe(true);
  });

  it("Should return false if image isnot in assets/thumb", async () => {
    spyOn(FileUtils, "isImageAvailableinThumb").and.resolveTo(false);
    const res = await FileUtils.isImageAvailableinThumb("f");
    expect(res).toBe(false);
  });
});
