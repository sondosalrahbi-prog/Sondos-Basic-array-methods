// Task 7: hasUser (Easy)
// Return true if a user with this name exists, otherwise false.
//
// - Use find and compare the result with undefined.

function hasUser(users, name) {
    const user = users.find(u => u.name === name);

// return Boolean(user)
// return !!user
return user !== undefined

}

const users = [
  { name: "Ann", age: 25, city: "Muscat" },
  { name: "Bob", age: 15, city: "Salalah" },
  { name: "Cid", age: 18, city: "Muscat" },
];
const oneUser = [{ name: "Tim", age: 10, city: "Sohar" }];

// Expected output:
console.log(hasUser(users, "Ann"));  // true
console.log(hasUser(users, "Zoe"));  // false
console.log(hasUser([], "Ann"));     // false
