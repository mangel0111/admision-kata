import * as request from "supertest";
const dbHandler = require('../db-handler');
import app from "../../app";
import UserService from "../../resources/students/student.service";

/**
 * Connect to a new in-memory database before running any tests.
 */
//beforeAll(dbHandler.connect);

/**
 * Seed the database.
 */
beforeEach(async () => {
  await createStudents();
});

/**
 * Clear all test data after every test.
 */
afterEach(dbHandler.clearDatabase);

/**
 * Remove and close the db and server.
 */
afterAll(dbHandler.closeDatabase);

test("Should read the students", async () => {
  const response = await request(app.callback()).get("/students");
  expect(response.status).toBe(200);
  expect(response.text).toBe("READ");
});
test("Should create the student ", async () => {
  const response = await request(app.callback()).post("/students")
      .send({name:'pepi'});
  expect(response.status).toBe(200);
  expect(response.text).toBe("CREATED");
});

/**
 * Seed the database with products.
 */
const createStudents = async () => {
  await UserService.create(studentExample);
};
const studentExample = {
  name: 'pepe',
};
