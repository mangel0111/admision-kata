import * as request from "supertest";
import app from "../../app";

test("Should read the students", async () => {
  const response = await request(app.callback()).get("/students");
  expect(response.status).toBe(200);
  expect(response.text).toBe("READ");
});
test("Should create the student ", async () => {
  const response = await request(app.callback()).post("/students");
  expect(response.status).toBe(200);
  expect(response.text).toBe("CREATED");
});
