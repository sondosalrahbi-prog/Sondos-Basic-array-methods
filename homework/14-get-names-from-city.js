// Task 14: getNamesFromCity (Medium)
// Return the names of the users who live in the given city.
//
// - Use filter, then forEach with push.
// - Nobody matches: return [].

function getNamesFromCity(users, city) {
  // your code
}

const users = [
  { name: "Ann", age: 25, city: "Muscat" },
  { name: "Bob", age: 15, city: "Salalah" },
  { name: "Cid", age: 18, city: "Muscat" },
];
const oneUser = [{ name: "Tim", age: 10, city: "Sohar" }];

// Expected output:
console.log(getNamesFromCity(users, "Muscat"));   // ["Ann", "Cid"]
console.log(getNamesFromCity(users, "Salalah"));  // ["Bob"]
console.log(getNamesFromCity(users, "Nizwa"));    // []
