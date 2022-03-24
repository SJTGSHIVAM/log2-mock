// @ts-nocheck
import { Response } from 'miragejs';

/**
 * All the routes related to Category are present here.
 * These are Publicly accessible routes.
 * */

/**
 * This handler handles gets all categories in the db.
 * send GET Request at /categories
 * */

export const getAllCategoriesHandler = function () {
  try {
    return new Response(200, {}, { categories: this.db.categories });
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
 * This handler handles gets all categories in the db.
 * send GET Request at /user/category/:categoryId
 * */

export const getCategoryHandler = function (schema, request) {
  const categoryId = request.params.categoryId;
  try {
    const category = schema.categories.findBy({ id: categoryId });
    return new Response(200, {}, { category });
  } catch (error) {
    new Response(
      500,
      {},
      {
        message: error.message,
      }
    );
  }
};
