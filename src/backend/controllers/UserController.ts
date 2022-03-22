// @ts-nocheck
import { Response } from "miragejs";
import { requiresAuth } from "../utils/authUtils";
/**
 * All the routes related to User are present here.
 * These are Publicly accessible routes.
 * */

/**
 * This handler handles gets all users in the db.
 * send GET Request at /api/user/users/:userId
 * */

export const getUserHandler = function (schema, request) {
  const username = requiresAuth.call(this, request);
  if (!username) {
    new Response(
      403,
      {},
      {
        errors: "The username you entered is not Registered",
      }
    );
  }
  const user = schema.users.findBy({ username: username });
  if (user) return new Response(200, {}, { user });
  return new Response(
    404,
    {},
    {
      error: "Resource not found",
    }
  );
};
