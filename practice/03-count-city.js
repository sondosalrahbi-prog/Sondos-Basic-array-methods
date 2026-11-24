// Task 3: countCity (Warm-up)
// Count how many users live in the given city.
//
// - Use forEach and a counter.
// - Nobody matches: return 0.

function countCity(users, city) {
  // your code
}

const users = [
  { name: "Ann", age: 25, city: "Muscat" },
  { name: "Bob", age: 15, city: "Salalah" },
  { name: "Cid", age: 18, city: "Muscat" },
];
const oneUser = [{ name: "Tim", age: 10, city: "Sohar" }];

// Expected output:
console.log(countCity(users, "Muscat"));   // 2
console.log(countCity(users, "Salalah"));  // 1
console.log(countCity(users, "Nizwa"));    // 0
