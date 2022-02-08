import * as Koa from "koa";
import * as mount from "koa-mount";
import examsResource from "./resources/exams/index";
import studentsResource from "./resources/students/index";

const publicRoutes = (app: Koa): void => {
  app.use(mount("/exams", examsResource));
  app.use(mount("/students", studentsResource));
};

export const defineRoutes = (app: Koa) => {
  publicRoutes(app);
};
