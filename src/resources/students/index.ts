import * as KoaRouter from "@koa/router";

import read from "./read";

const studentsRouter: KoaRouter = new KoaRouter();

read.register(studentsRouter);

const routes = studentsRouter.routes();

export default routes;
