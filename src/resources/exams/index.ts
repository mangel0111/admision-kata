import * as KoaRouter from "@koa/router";
import create from "./create";
import read from "./read";

const examsRouter: KoaRouter = new KoaRouter();

create.register(examsRouter);
read.register(examsRouter);

const routes = examsRouter.routes();

export default routes;
