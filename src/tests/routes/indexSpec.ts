import supertest from "supertest";
import app from "../../index";

const request = supertest(app);

describe("Test api endpoint responses", (): void => {
  it("gets the api endpoint to be 200", async (): Promise<void> => {
    const response = await request.get("/api");
    expect(response.status).toBe(200);
  });
});
