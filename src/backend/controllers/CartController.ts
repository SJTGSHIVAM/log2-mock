// @ts-nocheck
import { Response } from "miragejs";
import { formatDate, requiresAuth } from "../utils/authUtils";

/**
 * All the routes related to Cart are present here.
 * These are private routes.
 * Client needs to add "authorization" header with JWT token in it to access it.
 * */

/**
 * This handler handles getting items to user's cart.
 * send GET Request at /api/user/cart
 * */
function populateCart(cart, allProducts) {
  return cart.map(({ id, qty }) => ({
    ...allProducts[allProducts.findIndex((prod) => prod.id === id)],
    // ...allProducts.find((prod) => prod.id === id), this code is giving error will check later?
    qty,
  }));
}

export const getCartItemsHandler = function (schema, request) {
  const username = requiresAuth.call(this, request);
  if (!username) {
    new Response(
      404,
      {},
      {
        errors: "The username you entered is not Registered. Not Found error",
      }
    );
  }
  const userCart = schema.users.findBy({ username }).cart;
  const populatedCart = populateCart(userCart, this.db.products);
  return new Response(200, {}, { cart: populatedCart });
};

/**
 * This handler handles adding items to user's cart.
 * send POST Request at /api/user/cart
 * body contains {product}
 * */

export const addItemToCartHandler = function (schema, request) {
  const username = requiresAuth.call(this, request);
  try {
    if (!username) {
      new Response(
        404,
        {},
        {
          errors: "The username you entered is not Registered. Not Found error",
        }
      );
    }
    const userCart = schema.users.findBy({ username }).cart;
    const product = JSON.parse(request.requestBody);
    const { id: prodId } = product;
    const matchedProduct = schema.products.findBy({ id: prodId });
    console.log("matchedProduct", matchedProduct, 4);
    if (!matchedProduct)
      return new Response(
        400,
        {},
        {
          errors: "No Such Product found in database",
        }
      );
    const cartProductIndex = userCart.findIndex(({ id }) => id === prodId);
    console.log("cartProductIndex", cartProductIndex, 5);
    if (cartProductIndex === -1) {
      userCart.push({
        id: prodId,
        createdAt: formatDate(),
        updatedAt: formatDate(),
        qty: 1,
      });
      this.db.users.update({ username: username }, { cart: userCart });
      const populatedCart = populateCart(userCart, this.db.products);
      return new Response(201, {}, { cart: popelatedCart });
    }
    userCart[cartProductIndex].qty = userCart[cartProductIndex].qty + 1;
    userCart[cartProductIndex].updatedAt = formatDate();
    this.db.users.update({ username: username }, { cart: userCart });
    const populatedCart = populateCart(userCart, this.db.products);
    return new Response(201, {}, { cart: populateCart });
  } catch (error) {
    return new Response(
      500,
      {},
      {
        error,
      }
    );
  }
};

/**
 * This handler handles removing items to user's cart.
 * send DELETE Request at /api/user/cart/:productId
 * */

export const removeItemFromCartHandler = function (schema, request) {
  const username = requiresAuth.call(this, request);
  try {
    if (!username) {
      new Response(
        403,
        {},
        {
          errors: "The username you entered is not Registered.",
        }
      );
    }
    let userCart = schema.users.findBy({ username }).cart;
    const { prodId } = request.params;
    userCart = userCart.filter((item) => item.id !== prodId);
    this.db.users.update({ username }, { cart: userCart });
    const populatedCart = populateCart(userCart, this.db.products);
    return new Response(200, {}, { cart: populatedCart });
  } catch (error) {
    return new Response(
      500,
      {},
      {
        error,
      }
    );
  }
};

/**
 * This handler handles adding items to user's cart.
 * send POST Request at /api/user/cart/:productId
 * body contains {action} (whose 'type' can be increment or decrement)
 * */

export const updateCartItemHandler = function (schema, request) {
  const username = requiresAuth.call(this, request);
  try {
    if (!username) {
      new Response(
        403,
        {},
        {
          errors: "The username you entered is not Registered. ",
        }
      );
    }
    const { prodId } = request.params;
    const { action, payload = 1 } = JSON.parse(request.requestBody);
    console.log(typeof payload);
    const userCart = schema.users.findBy({ username }).cart;
    const cartProductIndex = userCart.findIndex(({ id }) => id === prodId);
    if (cartProductIndex === -1)
      return new Response(
        400,
        {},
        {
          error: "Bad request no such product exist on cart",
        }
      );
    if (action === "INCR") {
      userCart[cartProductIndex].qty = userCart[cartProductIndex].qty + payload;
      userCart[cartProductIndex].updatedAt = formatDate();
    } else if (action === "DEC") {
      console.log("date passed", userCart, 1);
      if (userCart[cartProductIndex].qty > payload) {
        userCart[cartProductIndex].qty =
          userCart[cartProductIndex].qty - payload;
        userCart[cartProductIndex].updatedAt = formatDate();
      } else userCart.splice(cartProductIndex, 1);
      /* this code can cause transactional issues when a user is logged in at more than one devices
    but for current use case of mocking its good enough
     */
      console.log("date passed", userCart, 1);
    } else
      return new Response(
        400,
        {},
        {
          error: `action should be "DEC" or "INCR" `,
        }
      );
    console.log("if passed");
    console.log("date passed", userCart);

    this.db.users.update({ username: username }, { cart: userCart });
    const populatedCart = populateCart(userCart, this.db.products);
    return new Response(200, {}, { cart: populatedCart });
  } catch (error) {
    return new Response(
      500,
      {},
      {
        error,
      }
    );
  }
};
