import { Context } from "koa";
import * as KoaRouter from "@koa/router";
import UserService from "../student.service";

const handler = async (ctx: Context) => {
  const userService = await UserService.find();
  ctx.body = "READ";
};

export default {
  register: (router: KoaRouter) => {
    router.get("/", handler);
  },
};
