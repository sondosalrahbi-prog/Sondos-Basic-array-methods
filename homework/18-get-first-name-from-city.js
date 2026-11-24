// Task 18: getFirstNameFromCity (Medium)
// Return the name of the first user who lives in the given city.
//
// - Use find.
// - If nobody lives there, return null.

function getFirstNameFromCity(users, city) {
  // your code
}

const users = [
  { name: "Ann", age: 25, city: "Muscat" },
  { name: "Bob", age: 15, city: "Salalah" },
  { name: "Cid", age: 18, city: "Muscat" },
];
const oneUser = [{ name: "Tim", age: 10, city: "Sohar" }];

// Expected output:
console.log(getFirstNameFromCity(users, "Muscat"));   // "Ann"
console.log(getFirstNameFromCity(users, "Salalah"));  // "Bob"
console.log(getFirstNameFromCity(users, "Nizwa"));    // null
