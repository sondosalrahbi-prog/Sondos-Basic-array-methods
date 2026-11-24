// Task 11: getExpensiveProducts (Medium)
// Return a new array with the products that cost more than limit.
//
// - Use filter.
// - A price equal to limit does not count.

function getExpensiveProducts(products, limit) {
  // your code
}

const products = [
  { name: "Pen", price: 2 },
  { name: "Book", price: 10 },
  { name: "Bag", price: 25 },
];

// Expected output:
console.log(getExpensiveProducts(products, 5));   // [{ name: "Book", price: 10 }, { name: "Bag", price: 25 }]
console.log(getExpensiveProducts(products, 25));  // []
console.log(getExpensiveProducts(products, 0));   // [{ name: "Pen", price: 2 }, { name: "Book", price: 10 }, { name: "Bag", price: 25 }]
