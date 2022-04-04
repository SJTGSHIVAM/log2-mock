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
  authorization: string;
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
}
interface ProductInvalidatorProp {
  product: Product;
  isInWishlist: boolean;
  invalidate: () => void;
}
interface CartProduct extends Product {
  qty: number;
}
interface CartProductInvalidatorProp {
  product: CartProduct;
  isInWishlist: boolean;
  invalidate: () => void;
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
  CartProductInvalidatorProp,
  Product,
  ProductInvalidatorProp,
  ProductProp,
  User,
  UserLoginData,
  UserLoginInputData,
  UserSignupInputData,
};
