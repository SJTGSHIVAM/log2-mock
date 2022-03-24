import axios from 'axios';
import {
  AuthHead,
  CartProduct,
  MirageError,
  Product,
  User,
  UserLoginData,
  UserLoginInputData,
  UserSignupInputData,
} from 'interfaces';
import { CartAction } from 'types';

const BASE_URL = "";

const userLogin = async ({ username, password }: UserLoginInputData) =>
  axios.post<UserLoginData | MirageError>(`${BASE_URL}/user/login`, {
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
  axios.post<UserLoginData | MirageError>(`${BASE_URL}/user/signup`, {
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
const getUser = async ({ authorinzation }: AuthHead) =>
  axios.get<{ user: User } | MirageError>(`${BASE_URL}/user`, {
    headers: { authorinzation },
  });

const getUserCart = async ({ authorinzation }: AuthHead) =>
  axios.get<{ cart: Array<CartProduct> } | MirageError>(
    `${BASE_URL}/user/cart`,
    {
      headers: { authorinzation },
    }
  );

const postUserCart = async (productId: string, { authorinzation }: AuthHead) =>
  axios.post<{ cart: Array<CartProduct> } | MirageError>(
    `${BASE_URL}/user/cart`,
    { id: productId },
    {
      headers: { authorinzation },
    }
  );
const updateUserCartProduct = async (
  productId: string,
  action: CartAction,
  payload: number,
  { authorinzation }: AuthHead
) =>
  axios.put<{ cart: Array<CartProduct> } | MirageError>(
    `${BASE_URL}/user/cart/${productId}`,
    { action, payload },
    {
      headers: { authorinzation },
    }
  );
const deleteUserCartProduct = async (
  productId: string,
  { authorinzation }: AuthHead
) =>
  axios.delete<{ cart: Array<CartProduct> } | MirageError>(
    `${BASE_URL}/user/cart/${productId}`,
    {
      headers: { authorinzation },
    }
  );
const getUserWishlist = async ({ authorinzation }: AuthHead) =>
  axios.get<{ wishlist: Array<Product> } | MirageError>(
    `${BASE_URL}/user/wishlist`,
    {
      headers: { authorinzation },
    }
  );

const postUserWishlist = async (
  productId: string,
  { authorinzation }: AuthHead
) =>
  axios.post<{ wishlist: Array<Product> } | MirageError>(
    `${BASE_URL}/user/wishlist`,
    { id: productId },
    {
      headers: { authorinzation },
    }
  );
const deleteUserWishlistProduct = async (
  productId: string,
  { authorinzation }: AuthHead
) =>
  axios.delete<{ cart: Array<Product> } | MirageError>(
    `${BASE_URL}/user/cart/${productId}`,
    {
      headers: { authorinzation },
    }
  );
const getProducts = async () =>
  axios.get<{ products: Array<Product> } | MirageError>(`${BASE_URL}/products`);

const getProduct = async (productId: string) =>
  axios.get<{ product: Product } | MirageError>(
    `${BASE_URL}/products/${productId}`
  );

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
