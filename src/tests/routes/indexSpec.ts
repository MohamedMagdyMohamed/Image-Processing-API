import supertest from "supertest";
import app from "../../index";

const request = supertest(app);

describe("Test api endpoint responses", () => {
  it("gets the api endpoint to be 200", async () => {
    const response = await request.get("/api");
    expect(response.status).toBe(200);
  });
});
