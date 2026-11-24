// Task 8: getAdults (Easy)
// Return a new array with the users who are 18 or older.
//
// - Use filter.
// - Nobody matches: return [].

function getAdults(users) {
  return users.filter(u => u.age >= 18)
}

const users = [
  { name: "Ann", age: 25, city: "Muscat" },
  { name: "Bob", age: 15, city: "Salalah" },
  { name: "Cid", age: 18, city: "Muscat" },
];
const oneUser = [{ name: "Tim", age: 10, city: "Sohar" }];

// Expected output:
console.log(getAdults(users));    // [{ name: "Ann", age: 25, city: "Muscat" }, { name: "Cid", age: 18, city: "Muscat" }]
console.log(getAdults(oneUser));  // []
console.log(getAdults([]));       // []
