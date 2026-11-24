// Task 5: findFirstAdult (Easy)
// Return the first user who is 18 or older.
//
// - Use find.
// - Nobody is an adult: return undefined.

function findFirstAdult(users) {
  return users.find(u => u.age >= 18  )
}

const users = [
  { name: "Ann", age: 25, city: "Muscat" },
  { name: "Bob", age: 15, city: "Salalah" },
  { name: "Cid", age: 18, city: "Muscat" },
];
const oneUser = [{ name: "Tim", age: 10, city: "Sohar" }];

// Expected output:
console.log(findFirstAdult(users));    // { name: "Ann", age: 25, city: "Muscat" }
console.log(findFirstAdult(oneUser));  // undefined
console.log(findFirstAdult([]));       // undefined
