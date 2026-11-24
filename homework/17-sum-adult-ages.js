// Task 17: sumAdultAges (Medium)
// Add up the ages of the users who are 18 or older.
//
// - Use filter, then forEach with a total variable.
// - Nobody is an adult: return 0.

function sumAdultAges(users) {
  // your code
}

const users = [
  { name: "Ann", age: 25, city: "Muscat" },
  { name: "Bob", age: 15, city: "Salalah" },
  { name: "Cid", age: 18, city: "Muscat" },
];
const oneUser = [{ name: "Tim", age: 10, city: "Sohar" }];

// Expected output:
console.log(sumAdultAges(users));    // 43
console.log(sumAdultAges(oneUser));  // 0
console.log(sumAdultAges([]));       // 0
