// Task 6: getCityOf (Easy)
// Return the city of the user with the given name.
//
// - Use find first, then read the city.
// - If there is no such user, return null.

function getCityOf(users, name) {
  // your code
}

const users = [
  { name: "Ann", age: 25, city: "Muscat" },
  { name: "Bob", age: 15, city: "Salalah" },
  { name: "Cid", age: 18, city: "Muscat" },
];
const oneUser = [{ name: "Tim", age: 10, city: "Sohar" }];

// Expected output:
console.log(getCityOf(users, "Bob"));  // "Salalah"
console.log(getCityOf(users, "Cid"));  // "Muscat"
console.log(getCityOf(users, "Zoe"));  // null
