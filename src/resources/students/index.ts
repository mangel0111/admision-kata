import * as KoaRouter from "@koa/router";

import read from "./read";
import create from "./create";

const studentsRouter: KoaRouter = new KoaRouter();

read.register(studentsRouter);
create.register(studentsRouter);

const routes = studentsRouter.routes();

export default routes;
