// Task 10: countAdults (Easy)
// Count the users who are 18 or older.
//
// - Use filter and .length.

function countAdults(users) {
  // your code
}

const users = [
  { name: "Ann", age: 25, city: "Muscat" },
  { name: "Bob", age: 15, city: "Salalah" },
  { name: "Cid", age: 18, city: "Muscat" },
];
const oneUser = [{ name: "Tim", age: 10, city: "Sohar" }];

// Expected output:
console.log(countAdults(users));    // 2
console.log(countAdults(oneUser));  // 0
console.log(countAdults([]));       // 0
