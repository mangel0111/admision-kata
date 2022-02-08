import { Context } from "koa";
import * as KoaRouter from "@koa/router";

const handler = async (ctx: Context) => {
  ctx.body = "READ";
};

export default {
  register: (router: KoaRouter) => {
    router.get("/", handler);
  },
};
