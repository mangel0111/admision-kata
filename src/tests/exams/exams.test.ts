import * as request from "supertest";
import app from "../../app";

test("Should create the exam", async () => {
  const response = await request(app.callback()).post("/exams");
  expect(response.status).toBe(200);
  expect(response.text).toBe("CREATED");
});
test("Should read the exams", async () => {
  const response = await request(app.callback()).get("/exams");
  expect(response.status).toBe(200);
  expect(response.text).toBe("READ");
});
