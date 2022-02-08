import * as Koa from "koa";
import * as requestLogger from "koa-logger";
import * as bodyParser from "koa-bodyparser";
import { StatusCodes } from "http-status-codes";
import { defineRoutes } from "./router";

const app: Koa = new Koa();

app.use(async (ctx: Koa.Context, next: () => Promise<any>) => {
  try {
    await next();
  } catch (error) {
    ctx.status =
      error.statusCode || error.status || StatusCodes.INTERNAL_SERVER_ERROR;
    error.status = ctx.status;
    ctx.body = { error };
    ctx.app.emit("error", error, ctx);
  }
});

app.on("error", console.error);

app.use(
  bodyParser({ enableTypes: ["json", "form", "text"], jsonLimit: "6mb" })
);
app.use(requestLogger());

defineRoutes(app);

export default app;
