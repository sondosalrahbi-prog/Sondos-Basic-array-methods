// Task 4: findUser (Easy)
// Return the user with the given name.
//
// - Use find.
// - Nobody has that name: return undefined (find does this for you).

function findUser(users, name) {
  // your code
}

const users = [
  { name: "Ann", age: 25, city: "Muscat" },
  { name: "Bob", age: 15, city: "Salalah" },
  { name: "Cid", age: 18, city: "Muscat" },
];
const oneUser = [{ name: "Tim", age: 10, city: "Sohar" }];

// Expected output:
console.log(findUser(users, "Bob"));  // { name: "Bob", age: 15, city: "Salalah" }
console.log(findUser(users, "Ann"));  // { name: "Ann", age: 25, city: "Muscat" }
console.log(findUser(users, "Zoe"));  // undefined
console.log(findUser([], "Ann"));     // undefined
