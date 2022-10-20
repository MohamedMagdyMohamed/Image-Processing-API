import supertest from "supertest";
import app from "../../../index";

const request = supertest(app);

describe("Test images endpoint responses", (): void => {
  it("gets the images endpoint to be 400 if no query exists", async (): Promise<void> => {
    const response = await request.get("/api/images");
    expect(response.status).toBe(400);
  });

  it("gets the images endpoint to be 400 if filename query not exists", async (): Promise<void> => {
    const response = await request.get("/api/images?width=1&height=1");
    expect(response.status).toBe(400);
  });

  it("gets the images endpoint to be 400 if width query not exists", async (): Promise<void> => {
    const response = await request.get("/api/images?filename=2&height=1");
    expect(response.status).toBe(400);
  });

  it("gets the images endpoint to be 400 if height query not exists", async (): Promise<void> => {
    const response = await request.get("/api/images?filename=s&width=1");
    expect(response.status).toBe(400);
  });
});
