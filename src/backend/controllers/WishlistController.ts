// @ts-nocheck

import {
  formatDate,
  requiresAuth,
} from 'backend/utils/authUtils';
import { Response } from 'miragejs';

/**
 * All the routes related to Wishlist are present here.
 * These are private routes.
 * Client needs to add "authorization" header with JWT token in it to access it.
 * */

/**
 * This handler handles getting items to user's wishlist.
 * send GET Request at /user/wishlist
 * */

function populateWishlist(wishlist, allProducts) {
  return wishlist.map(({ id }) => ({
    ...allProducts[allProducts.findIndex((prod) => prod.id === id)],
    // ...allProducts.find((prod) => prod.id === id), this code is giving error will check later?
  }));
}

export const getWishlistItemsHandler = function (schema, request) {
  const username = requiresAuth.call(this, request);
  if (!username) {
    new Response(
      404,
      {},
      {
        message: "The username you entered is not Registered. Not Found error",
      }
    );
  }
  const userWishlist = schema.users.findBy({ username }).wishlist;
  const populatedWishlist = populateWishlist(userWishlist, this.db.products);
  return new Response(
    200,
    {},
    { wishlist: populateWishlist(userWishlist, this.db.products) }
  );
};

/**
 * This handler handles adding items to user's wishlist.
 * send POST Request at /user/wishlist
 * body contains {product}
 * */

export const addItemToWishlistHandler = function (schema, request) {
  const username = requiresAuth.call(this, request);
  try {
    if (!username) {
      new Response(
        404,
        {},
        {
          message:
            "The username you entered is not Registered. Not Found error",
        }
      );
    }
    const userWishlist = schema.users.findBy({ username }).wishlist;
    const { id: prodId } = JSON.parse(request.requestBody);
    const matchedProduct = schema.products.findBy({ id: prodId });
    if (!matchedProduct)
      return new Response(
        400,
        {},
        {
          message: "No Such Product found in database",
        }
      );
    const wishlistProductIndex = userWishlist.findIndex(
      ({ id }) => id === prodId
    );
    if (wishlistProductIndex === -1) {
      userWishlist.push({
        id: prodId,
        createdAt: formatDate(),
        updatedAt: formatDate(),
      });
      this.db.users.update({ username: username }, { wishlist: userWishlist });
    }
    return new Response(
      201,
      {},
      { wishlist: populateWishlist(userWishlist, this.db.products) }
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
 * This handler handles removing items to user's wishlist.
 * send DELETE Request at /user/wishlist
 * body contains {product}
 * */

export const removeItemFromWishlistHandler = function (schema, request) {
  const username = requiresAuth.call(this, request);
  try {
    if (!username) {
      new Response(
        403,
        {},
        {
          message: "The username you entered is not Registered.",
        }
      );
    }
    let userWishlist = schema.users.findBy({ username }).wishlist;
    const { prodId } = request.params;
    userWishlist = userWishlist.filter((item) => item.id !== prodId);
    this.db.users.update({ username }, { wishlist: userWishlist });
    return new Response(
      200,
      {},
      { wishlist: populateWishlist(userWishlist, this.db.products) }
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
