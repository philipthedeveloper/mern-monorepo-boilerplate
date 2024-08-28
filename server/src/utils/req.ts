import { checkEmptyRequestBody, throwBadRequestError } from "../helpers";

export const throwErrorIfBodyIsEmpty = (
  data: Record<string, any>,
  others?: Array<string>,
  message?: string
) => {
  const isBodyEmpty = checkEmptyRequestBody(data);
  if (isBodyEmpty) throwBadRequestError(message || "Missing request body");

  if (others && others.length > 0) {
    for (const key of others) {
      if (!(key in data) || data[key] === undefined || data[key] === null) {
        throwBadRequestError(`Missing ${key} in request body`);
      }
    }
  }
};
