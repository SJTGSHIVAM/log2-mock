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
    discountPrice: 3500,
    price: 2500,
    discount: 30,
    inStock: true,
    rating: 3.5,
    sellerId: "111",
  },

  {
    id: uuid(),
    tags: ["bestSeller", "DSA"],
    publisher: "CareerCup; 6th edition (July 1, 2015)",
    name: "Cracking the Coding Interview: 189 Programming Questions and Solutions",
    author: "Gayle Laakmann McDowell",
    image:
      "https://m.media-amazon.com/images/P/0984782850.01._SCLZZZZZZZ_SX500_.jpg",
    imgAlt: "image link",
    description:
      "Cracking the Coding Interview, 6th Edition is here to help you through this process, teaching you what you need to know and enabling you to perform at your very best. ",
    discountPrice: 1499,
    price: 2000,
    discount: 25,
    inStock: true,
    rating: 4.0,
    sellerId: "112",
  },

  {
    id: uuid(),
    tags: ["bestSeller", "DSA"],
    publisher: "Manning; 1st edition (May 1, 2016)",
    name: "Grokking Algorithms: An Illustrated Guide for Programmers and Other Curious People ",
    author: "Aditya Bhargava",
    image:
      "https://m.media-amazon.com/images/P/1617292230.01._SCLZZZZZZZ_SX500_.jpg",
    imgAlt: "image link",
    description:
      "Grokking Algorithms is a fully illustrated, friendly guide that teaches you how to apply common algorithms to the practical problems you face every day as a programmer. ",
    discountPrice: 1799,
    price: 2200,
    discount: 25,
    inStock: true,
    rating: 4.3,
    sellerId: "114",
  },

  {
    id: uuid(),
    tags: ["bestSeller", "WEB DEV"],
    publisher: "Wiley; 1st edition (18 November 2011)",
    name: "HTML and CSS: Design and Build Websites  ",
    author: "Jon Duckett",
    image:
      "https://m.media-amazon.com/images/P/1118008189.01._SCLZZZZZZZ_SX500_.jpg",
    imgAlt: "image link",
    description:
      "This book of Jon Duckett is incredibly popular. If you are a beginner in designing and recently started learning HTML and CSS then this book is best for you to learn everything from scratch to an expert level. ",
    discountPrice: 2200,
    price: 2655,
    discount: 10,
    inStock: true,
    rating: 3.8,
    sellerId: "116",
  },

  {
    id: uuid(),
    tags: ["bestSeller", "WEB DEV"],
    publisher: " O′Reilly; 4th edition (7 September 2012)",
    name: "Learning Web Design: A beginner’s guide to HTML, CSS, Javascript, and Web Graphics",
    author: "Jennifer Niederst Robbins",
    image:
      "https://images-na.ssl-images-amazon.com/images/I/51uPb7Ca1PL._SX408_BO1,204,203,200_.jpg",
    imgAlt: "image link",
    description:
      "his book has around 600 pages and the best thing about this book is it has a ton of exercises to test and experiment with your code and that will make your concepts more clear. ",
    discountPrice: 1999,
    price: 2755,
    discount: 25,
    inStock: true,
    rating: 3.8,
    sellerId: "118",
  },

  {
    id: uuid(),
    tags: ["bestSeller", "WEB DEV"],
    publisher: " O′Reilly; 1st edition (16 May 2008)",
    name: "Javascript: The Good Parts",
    author: "Douglas Crockford",
    image:
      "https://images-na.ssl-images-amazon.com/images/I/5131OWtQRaL._SX381_BO1,204,203,200_.jpg",
    imgAlt: "image link",
    description:
      "Most programming languages contain good and bad parts, but JavaScript has more than its share of the bad, having been developed and released in a hurry before it could be refined.",
    discountPrice: 1944,
    price: 2800,
    discount: 25,
    inStock: true,
    rating: 4.4,
    sellerId: "110",
  },
  {
    id: uuid(),
    tags: ["bestSeller", "AI"],
    publisher: " O′Reilly; 1st edition (16 May 2008)",
    name: "Analytics of Life: Making Sense of Artificial Intelligence, Machine Learning and Data Analytics",
    author: "Mert Damlapinar",
    image:
      "https://m.media-amazon.com/images/P/B082LRXNF5.01._SCLZZZZZZZ_SX500_.jpg",
    imgAlt: "image link",
    description:
      "Analytics of Life provides the reader with a broad overview of the field of data analytics and artificial intelligence.",
    discountPrice: 2788,
    price: 3200,
    discount: 10,
    inStock: true,
    rating: 4.1,
    sellerId: "122",
  },
  {
    id: uuid(),
    tags: ["bestSeller", "AI"],
    publisher: "Basic Books; Reprint edition (February 13, 2018)",
    name: "The Master Algorithm",
    author: "Pedro Domingos",
    image:
      "https://m.media-amazon.com/images/P/0465094279.01._SCLZZZZZZZ_SX500_.jpg",
    imgAlt: "image link",
    description:
      "In the world's top research labs and universities, the race is on to invent the ultimate learning algorithm: one capable of discovering any knowledge from data",
    discountPrice: 3500,
    price: 4440,
    discount: 20,
    inStock: true,
    rating: 4.4,
    sellerId: "124",
  },
  {
    id: uuid(),
    tags: ["bestSeller", "AI"],
    publisher: "Oxford University Press; Reprint edition (May 1, 2016)",
    name: "Superintelligence: Paths, Dangers, Strategies",
    author: "Nick Bostrom ",
    image:
      "https://m.media-amazon.com/images/P/0198739834.01._SCLZZZZZZZ_SX500_.jpg",
    imgAlt: "image link",
    description:
      "Superintelligence asks the questions: What happens when machines surpass humans in general intelligence? Will artificial agents save or destroy us? ",
    discountPrice: 7500,
    price: 4880,
    discount: 50,
    inStock: true,
    rating: 4.2,
    sellerId: "125",
  },

  {
    id: uuid(),
    tags: ["bestSeller", "System Design"],
    publisher: "Oxford University Press; Reprint edition (May 1, 2016)",
    name: "Clean Architecture",
    author: "Robert C. Martin",
    image:
      "https://www.codingninjas.com/blog/wp-content/uploads/2021/07/Clean-Architecture.jpg",
    imgAlt: "image link",
    description:
      "This book not only focuses on the concepts associated with system analysis and design but also focuses on various problems system designers face while preparing a solution for the real world.",
    discountPrice: 2300,
    price: 4580,
    discount: 60,
    inStock: true,
    rating: 3.7,
    sellerId: "126",
  },
  {
    id: uuid(),
    tags: ["bestSeller", "System Design"],
    publisher: "Independently published (June 12, 2020)",
    name: "System Design Interview – An insider's guide ",
    author: "Alex Xu",
    image:
      "https://m.media-amazon.com/images/P/B08CMF2CQF.01._SCLZZZZZZZ_SX500_.jpg",
    imgAlt: "image link",
    description:
      "System design interviews are the most difficult to tackle of all technical interview questions",
    discountPrice: 3200,
    price: 4500,
    discount: 40,
    inStock: true,
    rating: 3.5,
    sellerId: "128",
  },

  {
    id: uuid(),
    tags: ["bestSeller", "System Design"],
    publisher: " Roberto Vitillo (February 28, 2021)",
    name: "Understanding Distributed Systems",
    author: "Roberto Vitillo",
    image:
      "https://m.media-amazon.com/images/P/1838430202.01._SCLZZZZZZZ_SX500_.jpg",
    imgAlt: "image link",
    description:
      "Learning to build distributed systems is hard, especially if they are large scale. It's not that there is a lack of information out there. You can find academic papers, engineering blogs, and even books on the subject",
    discountPrice: 2990,
    price: 4500,
    discount: 20,
    inStock: true,
    rating: 3.5,
    sellerId: "129",
  },
  {
    id: uuid(),
    tags: ["bestSeller", "Discrete Maths"],
    publisher: "Roberto Vitillo (February 28, 2021)",
    name: "Discrete Mathematics",
    author: "Richard Johnsonbaugh",
    image:
      "https://m.media-amazon.com/images/P/B06WWB896B.01._SCLZZZZZZZ_SX500_.jpg",
    imgAlt: "image link",
    description:
      "An accessible introduction to the topics of discrete math, this best-selling text also works to expand students’ mathematical maturity.",
    discountPrice: 5550,
    price: 7000,
    discount: 55,
    inStock: true,
    rating: 4.0,
    sellerId: "132",
  },
  {
    id: uuid(),
    tags: ["bestSeller", "Discrete Maths"],
    publisher: " Mc Graw Hill Education (Uk); Eighth Edition (January 1, 2018)",
    name: "Discrete Mathematics and Its Applications ",
    author: "Ken Rosen ",
    image:
      "https://images-na.ssl-images-amazon.com/images/I/51Tzm1XSjaL._SX403_BO1,204,203,200_.jpg",
    imgAlt: "image link",
    description:
      "a focused introduction to the primary themes in discrete mathematics. This book is flexible and comprehensive and has an experienced pedagogical style.",
    discountPrice: 4550,
    price: 7200,
    discount: 35,
    inStock: true,
    rating: 4.0,
    sellerId: "136",
  },

  {
    id: uuid(),
    tags: ["bestSeller", "Discrete Maths"],
    publisher: "Packt Publishing (February 22, 2021)",
    name: "Practical Discrete Mathematics",
    author: "Ryan T. White, Archana Tikayat Ray  ",
    image:
      "https://m.media-amazon.com/images/P/1838983147.01._SCLZZZZZZZ_SX500_.jpg",
    imgAlt: "image link",
    description:
      "A practical guide simplifying discrete math for curious minds and demonstrating its application in solving problems related to software development, computer algorithms, and data science",
    discountPrice: 4550,
    price: 5200,
    discount: 25,
    inStock: true,
    rating: 4.5,
    sellerId: "137",
  },
  {
    id: uuid(),
    tags: ["bestSeller", "DBMS"],
    publisher: " ‎ S Chand Publishing; Fifth edition (1 January 2016)",
    name: "Database Management Systems",
    author: "Rajiv Chopra",
    image:
      "https://m.media-amazon.com/images/P/B00QUYKW7G.01._SCLZZZZZZZ_SX500_.jpg",
    imgAlt: "image link",
    description: " A very effective book for Database management system.",
    discountPrice: 4550,
    price: 5200,
    discount: 30,
    inStock: true,
    rating: 4.5,
    sellerId: "137",
  },
  {
    id: uuid(),
    tags: ["bestSeller", "DBMS"],
    publisher: "Pearson; 7th edition (June 8, 2015)",
    name: "Fundamentals of Database Systems",
    author: "Ramez Elmasri, Shamkant B. Navathe ",
    image:
      "https://m.media-amazon.com/images/P/B09RTFSBRF.01._SCLZZZZZZZ_SX500_.jpg",
    imgAlt: "image link",
    description:
      " This book introduces the fundamental concepts necessary for designing, using, and implementing database systems and database applications.",
    discountPrice: 7550,
    price: 8200,
    discount: 30,
    inStock: true,
    rating: 4.1,
    sellerId: "139",
  },

  {
    id: uuid(),
    tags: ["bestSeller", "DBMS"],
    publisher: "McGraw-Hill Higher Education; 7th edition (February 19, 2019)",
    name: "Database System Concepts",
    author: "Avi Silberschatz ",
    image:
      "https://m.media-amazon.com/images/P/B07PPHYQGV.01._SCLZZZZZZZ_SX500_.jpg",
    imgAlt: "image link",
    description:
      " Database System Concepts by Silberschatz Korth and Sudarshan is now in its 6th edition and is one of the cornerstone texts of database education. ",
    discountPrice: 6550,
    price: 8100,
    discount: 25,
    inStock: true,
    rating: 4.2,
    sellerId: "140",
  },
];
