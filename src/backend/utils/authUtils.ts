// @ts-nocheck
import { Response } from "miragejs";
import jwt from "jsonwebtoken";
import dayjs from "dayjs";

export const requiresAuth = function (request) {
  const encodedToken = request.requestHeaders.authorinzation;
  const decodedToken = jwt.verify(
    encodedToken,
    process.env.REACT_APP_JWT_SECRET
  );
  if (decodedToken) {
    const user = this.db.users.findBy({ username: decodedToken.username });
    if (user) {
      return user.username;
    }
  }
  return new Response(
    401,
    {},
    { message: "The token is invalid. Unauthorized access error." }
  );
};

export const formatDate = () => dayjs().format("YYYY-MM-DDTHH:mm:ssZ");
