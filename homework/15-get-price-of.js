// Task 15: getPriceOf (Easy)
// Return the price of the product with the given name.
//
// - Use find.
// - If there is no such product, return null.

function getPriceOf(products, name) {
  // your code
}

const products = [
  { name: "Pen", price: 2 },
  { name: "Book", price: 10 },
  { name: "Bag", price: 25 },
];

// Expected output:
console.log(getPriceOf(products, "Book"));  // 10
console.log(getPriceOf(products, "Pen"));   // 2
console.log(getPriceOf(products, "Lamp"));  // null
