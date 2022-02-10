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
        body: typeof ctx.request.body === 'string'?
            JSON.parse(ctx.request.body): ctx.request.body,
        query: ctx.query,
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
      schema,
      body: ctx.request.body,
      query: ctx.query,
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
