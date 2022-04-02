// @ts-nocheclk
import { v4 as uuid } from 'uuid';

/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

export const products = [
  {
    id: uuid(),
    tags: ["bestSeller", "DSA"],
    publisher: "Pegion",
    name: "Introduction to Algorithms, third edition",
    author: "Thomas H. Cormen",
    image: "https://log2.netlify.app/assets/jpgs/coremen.jpg",
    imgAlt: "image link",
    description:
      "lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum  ",
    discountPrice: 749,
    price: 999,
    discount: 25,
    inStock: true,
    rating: 3.5,
    sellerId: "111",
  },
  {
    id: uuid(),
    tags: ["bestSeller", "OS"],
    publisher: "Pegion",
    name: "Introduction to Algorithms, third edition",
    author: "Thomas H. Cormen",
    image: "https://log2.netlify.app/assets/jpgs/coremen.jpg",
    imgAlt: "image link",
    description:
      "lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum  ",
    discountPrice: 749,
    price: 999,
    discount: 25,
    inStock: true,
    rating: 3.5,

    sellerId: "111",
  },
  {
    id: uuid(),
    tags: ["bestSeller", "OS"],
    publisher: "Pegion",
    name: "Introduction to Algorithms, third edition",
    author: "Thomas H. Cormen",
    image: "https://log2.netlify.app/assets/jpgs/coremen.jpg",
    imgAlt: "image link",
    description:
      "lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum  ",
    discountPrice: 749,
    price: 999,
    discount: 25,
    inStock: true,
    rating: 0.5,
    sellerId: "111",
  },
  {
    id: uuid(),
    tags: ["bestSeller", "DBMS"],
    publisher: "Pegion",
    name: "Fundamentals of Database Systems",
    author: "Ramez Elmasri, Shamkant Navathe",
    image:
      "https://ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=0133970779&Format=_SL250_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=irfz-20&language=en_US",
    imgAlt: "Dbms book",
    description: `Fundamentals of Database Systems provides an in-depth and up-to-date presentation of the most important aspects of database systems and applications, and related technologies.
      The book assumed that readers are familiar with elementary programming and data-structuring concepts and that they have had some exposure to the basics of computer organization.`,
    discountPrice: 13500,
    price: 15000,
    discount: 10,
    inStock: true,
    rating: 5.0,

    sellerId: "111",
  },
  {
    id: uuid(),
    tags: ["DBMS"],
    publisher: "Pegion",
    name: "Introduction to Algorithms, third edition",
    author: "Thomas H. Cormen",
    image: "https://log2.netlify.app/assets/jpgs/coremen.jpg",
    imgAlt: "image link",
    description:
      "lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum  ",
    discountPrice: 749,
    price: 999,
    discount: 25,
    inStock: true,
    rating: 3.5,
    sellerId: "111",
  },
  {
    id: uuid(),
    tags: ["OS"],
    publisher: "Pegion",
    name: "Introduction to Algorithms, third edition",
    author: "Thomas H. Cormen",
    image: "https://log2.netlify.app/assets/jpgs/coremen.jpg",
    imgAlt: "image link",
    description:
      "lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum  ",
    discountPrice: 749,
    price: 999,
    discount: 25,
    inStock: true,
    rating: 2.5,
    sellerId: "111",
  },
  {
    id: uuid(),
    tags: ["DBMS"],
    publisher: "Pegion",
    name: "Introduction to Algorithms, third edition",
    author: "Thomas H. Cormen",
    image: "https://log2.netlify.app/assets/jpgs/coremen.jpg",
    imgAlt: "image link",
    description:
      "lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum  ",
    discountPrice: 749,
    price: 999,
    discount: 25,
    inStock: true,
    rating: 1.5,
    sellerId: "111",
  },
  {
    id: uuid(),
    tags: ["DSA"],
    publisher: "Pegion",
    name: "Introduction to Algorithms, third edition",
    author: "Thomas H. Cormen",
    image: "https://log2.netlify.app/assets/jpgs/coremen.jpg",
    imgAlt: "image link",
    description:
      "lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum  ",
    discountPrice: 749,
    price: 999,
    discount: 25,
    inStock: true,
    rating: 1.5,
    sellerId: "111",
  },
];
