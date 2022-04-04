import axios from 'axios';
import { BASE_API_URL } from 'consts';
import {
  AuthHead,
  CartProduct,
  Product,
  User,
  UserLoginData,
  UserLoginInputData,
  UserSignupInputData,
} from 'interfaces';
import { CartAction } from 'types';

const userLogin = async ({ username, password }: UserLoginInputData) =>
  axios.post<UserLoginData>(`${BASE_API_URL}/user/login`, {
    username,
    password,
  });

const userSignup = async ({
  fname,
  lname,
  username,
  age,
  dob,
  primaryAddress,
  email,
  contact,
  password,
}: UserSignupInputData) =>
  axios.post<UserLoginData>(`${BASE_API_URL}/user/signup`, {
    fname,
    lname,
    username,
    age,
    dob,
    primaryAddress,
    email,
    contact,
    password,
  });
const getUser = async ({ authorization }: AuthHead) =>
  axios.get<{ user: User }>(`${BASE_API_URL}/user`, {
    headers: { authorization },
  });

const getUserCart = async ({ authorization }: AuthHead) =>
  axios.get<{ cart: Array<CartProduct> }>(`${BASE_API_URL}/user/cart`, {
    headers: { authorization },
  });

const postUserCart = async (productId: string, { authorization }: AuthHead) =>
  axios.post<{ cart: Array<CartProduct> }>(
    `${BASE_API_URL}/user/cart`,
    { id: productId },
    {
      headers: { authorization },
    }
  );
const updateUserCartProduct = async (
  productId: string,
  action: CartAction,
  payload: number,
  { authorization }: AuthHead
) =>
  axios.put<{ cart: Array<CartProduct> }>(
    `${BASE_API_URL}/user/cart/${productId}`,
    { action, payload },
    {
      headers: { authorization },
    }
  );
const deleteUserCartProduct = async (
  productId: string,
  { authorization }: AuthHead
) =>
  axios.delete<{ cart: Array<CartProduct> }>(
    `${BASE_API_URL}/user/cart/${productId}`,
    {
      headers: { authorization },
    }
  );
const getUserWishlist = async ({ authorization }: AuthHead) =>
  axios.get<{ wishlist: Array<Product> }>(`${BASE_API_URL}/user/wishlist`, {
    headers: { authorization },
  });

const postUserWishlist = async (
  productId: string,
  { authorization }: AuthHead
) =>
  axios.post<{ wishlist: Array<Product> }>(
    `${BASE_API_URL}/user/wishlist`,
    { id: productId },
    {
      headers: { authorization },
    }
  );
const deleteUserWishlistProduct = async (
  productId: string,
  { authorization }: AuthHead
) =>
  axios.delete<{ cart: Array<Product> }>(
    `${BASE_API_URL}/user/wishlist/${productId}`,
    {
      headers: { authorization },
    }
  );
const getProducts = async () =>
  axios.get<{ products: Array<Product> }>(`${BASE_API_URL}/products`);

const getProduct = async (productId: string) =>
  axios.get<{ product: Product }>(`${BASE_API_URL}/products/${productId}`);

export {
  deleteUserCartProduct,
  deleteUserWishlistProduct,
  getProduct,
  getProducts,
  getUser,
  getUserCart,
  getUserWishlist,
  postUserCart,
  postUserWishlist,
  updateUserCartProduct,
  userLogin,
  userSignup,
};
