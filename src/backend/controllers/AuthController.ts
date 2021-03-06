// @ts-nocheck

import { formatDate } from 'backend/utils/authUtils';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { Response } from 'miragejs';
import { v4 as uuid } from 'uuid';

/**
 * All the routes related to Auth are present here.
 * These are Publicly accessible routes.
 * */

/**
 * This handler handles user signups.
 * send POST Request at /auth/signup
 * body contains {firstName, lastName, username, password}
 * */

export const signupHandler = function (schema, request) {
  const {
    fname,
    lname,
    username,
    age,
    dob,
    primaryAddress,
    email,
    contact,
    password,
  } = JSON.parse(request.requestBody);
  try {
    // check if username already exists
    const usernameFound = schema.users.findBy({ username });
    const emailFound = schema.users.findBy({ email });
    if (usernameFound) {
      return new Response(
        422,
        {},
        {
          message: "Unprocessable Entity. username Already Exists.",
        }
      );
    }
    if (emailFound) {
      return new Response(
        422,
        {},
        {
          message: "Unprocessable Entity. email Already Exists.",
        }
      );
    }
    const id = uuid();
    const encryptedPassword = bcrypt.hashSync(password, 5);
    const newUser = {
      id,
      fname,
      lname,
      username,
      password: encryptedPassword,
      createdAt: formatDate(),
      updatedAt: formatDate(),
      email,
      age,
      dob,
      primaryAddress: 0,
      contact,
      address: [primaryAddress],
      cart: [],
      wishlist: [],
    };
    schema.users.create(newUser);
    const encodedToken = jwt.sign(
      { id, username },
      process.env.REACT_APP_JWT_SECRET
    );
    return new Response(
      201,
      {},
      {
        id,
        fname,
        username,
        encodedToken,
        cartLength: 0,
        wishlistLength: 0,
      }
    );
  } catch (error) {
    return new Response(
      500,
      {},
      {
        message: error.message,
      }
    );
  }
};

/**
 * This handler handles user login.
 * send POST Request at /auth/login
 * body contains {username, password}
 * */

export const loginHandler = function (schema, request) {
  const { username, password } = JSON.parse(request.requestBody);
  try {
    const foundUser = schema.users.findBy({ username });
    if (!foundUser) {
      return new Response(
        404,
        {},
        {
          message:
            "The username you entered is not Registered. Not Found error",
        }
      );
    }

    if (bcrypt.compareSync(password, foundUser.password)) {
      const encodedToken = jwt.sign(
        { id: foundUser.id, username: foundUser.username },
        process.env.REACT_APP_JWT_SECRET
      );
      foundUser.password = undefined;
      const {
        id,
        fname,
        username,
        cart,
        wishlist,
      }: {
        id: string;
        fName: string;
        username: string;
        cart: Array[any];
        wishlist: Array[any];
      } = foundUser;
      const cartLength = cart.length;
      const wishlistLength = wishlist.length;
      return new Response(
        200,
        {},
        {
          id,
          fname,
          username,
          encodedToken,
          cartLength,
          wishlistLength,
        }
      );
    }

    return new Response(
      401,
      {},
      {
        message:
          "The credentials you entered are invalid. Unauthorized access error.",
      }
    );
  } catch (error) {
    return new Response(
      500,
      {},
      {
        message: error.message,
      }
    );
  }
};
