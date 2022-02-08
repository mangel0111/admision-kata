import { Context } from "koa";
import * as KoaRouter from "@koa/router";

const handler = async (ctx: Context) => {
  ctx.body = "CREATED";
};

export default {
  register: (router: KoaRouter) => {
    router.post("/", handler);
  },
};
