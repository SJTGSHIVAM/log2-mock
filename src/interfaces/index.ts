interface UserLoginInputData {
  username: string;
  password: string;
}
interface UserLoginData {
  id: string;
  fname: string;
  username: string;
  encodedToken: string;
  cartLength: number;
  wishlistLength: number;
}
interface UserSignupInputData {
  fname: string;
  lname: string;
  username: string;
  age: number;
  dob: string;
  primaryAddress: string;
  email: string;
  contact: number;
  password: string;
}

interface AuthHead {
  authorinzation: string;
}
interface Product {
  id: string;
  tags: Array<string>;
  publisher: string;
  name: string;
  author: string;
  image: string;
  imgAlt: string;
  description: string;
  discountPrice: number;
  price: number;
  discount: number;
  inStock: boolean;
  rating: number;
  sellerId: string;
}
interface ProductProp {
  product: Product;
  isInWishlist: boolean;
  invalidate?: () => void;
}
interface CartProduct extends Product {
  qty: number;
}
interface User {
  id: string;
  fname: string;
  lname: string;
  username: string;
  age: number;
  dob: string;
  primaryAddress: number;
  address: Array<string>;
  contact: number;
  email: string;
  password: string;
  cart: Array<CartProduct>;
  wishlist: Array<Product>;
  createdAt: string;
  updatedAt: string;
}
export type {
  AuthHead,
  CartProduct,
  Product,
  ProductProp,
  User,
  UserLoginData,
  UserLoginInputData,
  UserSignupInputData,
};
