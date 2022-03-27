import bcyrpt from 'bcryptjs';
// @ts-nocheck
import { v4 as uuid } from 'uuid';

import { formatDate } from '../utils/authUtils';

/**
 * User Database can be added here.
 * You can add default users of your wish with different attributes
 * Every user will have cart (Quantity of all Products in Cart is set to 1 by default), wishList by default
 * */

/*  { "email": "adarshbalika@gmail.com",
"password": "adarshBalika123" }
*/
export const users = [
  {
    id: uuid(),
    fname: "Adarsh",
    lname: "Balika",
    username: "ablka",
    age: 21,
    dob: "2001-03-07",
    primaryAddress: 0,
    address: ["Some random address"],
    contact: 9990220022,
    email: "adarshbalik1a@gmail.com",
    password: bcyrpt.hashSync("adarshBalika123", 5),
    cart: [],
    wishlist: [],
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    id: uuid(),
    fname: "Shivam",
    lname: "Pandey",
    username: "sjtgshivam",
    age: 25,
    dob: "1997-03-07",
    primaryAddress: 0,
    address: ["Some random address"],
    contact: 8057700000,
    email: "randomshivam@gmail.com",
    password: bcyrpt.hashSync("acheDin", 5),
    cart: [],
    wishlist: [],
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
];
