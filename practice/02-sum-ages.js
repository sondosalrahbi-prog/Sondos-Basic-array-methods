// Task 2: sumAges (Warm-up)
// Add up the ages of all users.
//
// - Use forEach and a total variable outside it.
// - Empty array: return 0.

function sumAges(users) {
  // your code
}

const users = [
  { name: "Ann", age: 25, city: "Muscat" },
  { name: "Bob", age: 15, city: "Salalah" },
  { name: "Cid", age: 18, city: "Muscat" },
];
const oneUser = [{ name: "Tim", age: 10, city: "Sohar" }];

// Expected output:
console.log(sumAges(users));    // 58
console.log(sumAges(oneUser));  // 10
console.log(sumAges([]));       // 0
