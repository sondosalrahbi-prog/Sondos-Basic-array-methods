// Task 12: getCheapNames (Medium)
// Return the names of the products that cost less than limit.
//
// - Use filter, then forEach with push to collect the names.
// - Nothing matches: return [].

function getCheapNames(products, limit) {
  return products.filter(p => p.price < limit).map(n => n.name)
}

const products = [
  { name: "Pen", price: 2 },
  { name: "Book", price: 10 },
  { name: "Bag", price: 25 },
];

// Expected output:
console.log(getCheapNames(products, 20));   // ["Pen", "Book"]
console.log(getCheapNames(products, 2));    // []
console.log(getCheapNames(products, 100));  // ["Pen", "Book", "Bag"]
