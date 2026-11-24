// Task 13: getTeens (Easy)
// Return a new array with the users who are 13 to 19 years old (both included).
//
// - Use filter.

function getTeens(users) {
  // your code
}

const users = [
  { name: "Ann", age: 25, city: "Muscat" },
  { name: "Bob", age: 15, city: "Salalah" },
  { name: "Cid", age: 18, city: "Muscat" },
];
const oneUser = [{ name: "Tim", age: 10, city: "Sohar" }];

// Expected output:
console.log(getTeens(users));    // [{ name: "Bob", age: 15, city: "Salalah" }, { name: "Cid", age: 18, city: "Muscat" }]
console.log(getTeens(oneUser));  // []
console.log(getTeens([]));       // []
