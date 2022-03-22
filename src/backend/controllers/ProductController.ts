// @ts-nocheck
import { Response } from "miragejs";

/**
 * All the routes related to Product are present here.
 * These are Publicly accessible routes.
 * */

/**
 * This handler handles gets all products in the db.
 * send GET Request at /api/products
 * */

export const getAllProductsHandler = function () {
  return new Response(200, {}, { products: this.db.products });
};

/**
 * This handler handles gets all products in the db.
 * send GET Request at /api/user/products/:productId
 * */

export const getProductHandler = function (schema, request) {
  const prodId = request.params.prodId;

  const product = schema.products.findBy({ id: prodId });
  if (product) return new Response(200, {}, { product });
  return new Response(
    404,
    {},
    {
      error: "Resource not found",
    }
  );
};
