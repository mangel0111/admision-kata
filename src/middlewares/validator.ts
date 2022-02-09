import * as Joi from "joi";
import { Context, Next } from "koa";

interface ErrorFormatted {
  [key: string]: string[];
}

const formatError = (joiError: Joi.ValidationError): ErrorFormatted => {
  const errors: ErrorFormatted = {};

  joiError.details.forEach((error) => {
    const key = error.path.join(".");
    errors[key] = errors[key] || [];
    errors[key].push(error.message);
  });

  return errors;
};

export const validate = (schema: Joi.ObjectSchema) => {
  return async (ctx: Context, next: Next) => {
    const validationResult: Joi.ValidationResult = await schema.validate(
      {
        ...ctx.request.body,
        ...ctx.query,
      },
      {
        abortEarly: false,
        allowUnknown: true,
        stripUnknown: {
          objects: true,
        },
      }
    );
    console.log(validationResult, {
      ...ctx.request.body,
      ...ctx.query,
    });

    if (validationResult.error) {
      ctx.body = {
        errors: formatError(validationResult.error),
      };
      ctx.throw(400);
    }

    ctx.validatedData = validationResult.value;
    await next();
  };
};
