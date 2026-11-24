// Task 16: countExpensive (Easy)
// Count the products that cost more than limit.
//
// - Use filter and .length.

function countExpensive(products, limit) {
  // your code
}

const products = [
  { name: "Pen", price: 2 },
  { name: "Book", price: 10 },
  { name: "Bag", price: 25 },
];

// Expected output:
console.log(countExpensive(products, 5));   // 2
console.log(countExpensive(products, 25));  // 0
console.log(countExpensive(products, 0));   // 3
