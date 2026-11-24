// Task 9: getUsersFromCity (Easy)
// Return a new array with the users who live in the given city.
//
// - Use filter.

function getUsersFromCity(users, city) {
  // your code
}

const users = [
  { name: "Ann", age: 25, city: "Muscat" },
  { name: "Bob", age: 15, city: "Salalah" },
  { name: "Cid", age: 18, city: "Muscat" },
];
const oneUser = [{ name: "Tim", age: 10, city: "Sohar" }];

// Expected output:
console.log(getUsersFromCity(users, "Muscat"));   // [{ name: "Ann", age: 25, city: "Muscat" }, { name: "Cid", age: 18, city: "Muscat" }]
console.log(getUsersFromCity(users, "Salalah"));  // [{ name: "Bob", age: 15, city: "Salalah" }]
console.log(getUsersFromCity(users, "Nizwa"));    // []
