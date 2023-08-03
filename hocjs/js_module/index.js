//Import
// import functions from "./js/functions.js";

// const { user, course } = functions;

// console.log(user, course);

// import getMessage from "./js/functions.js";

// console.log(getMessage("F8"));

// import User from "./js/functions.js";

// const user = new User();
// console.log(user);

// import getProduct, { product as productObj, teacher } from "./js/products.js";
// import getProduct from "./js/products.js";

// console.log(productObj);
// console.log(teacher);
// console.log(getProduct());

import * as products from "./js/products.js";

const { default: getProduct, product, teacher } = products;

console.log(product);
console.log(teacher);
console.log(getProduct());

/*
index.html => index.js => app.js => products.js => data.js
*/
