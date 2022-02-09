import { Context } from "koa";
import * as KoaRouter from "@koa/router";
import * as Joi from "joi";
import { validate } from "../../../middlewares/validator";

const createUserSchema: Joi.ObjectSchema = Joi.object({
  name: Joi.string().max(100).trim().messages({
    "string.empty": "The name is required",
  }),
});

const handler = async (ctx: Context) => {
  ctx.body = "CREATED";
};

export default {
  register: (router: KoaRouter) => {
    router.post("/", validate(createUserSchema), handler);
  },
};
