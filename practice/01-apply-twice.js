// Task 1: applyTwice (Warm-up)
// Call the function action two times: first with value, then with the result.
//
// - action is a function that you receive as a parameter.
// - applyTwice(3, (n) => n * 2): 3 becomes 6, then 12.

function applyTwice(value, action) {

  // const f = action(value);
  // const final = action(f)
  // return f 
  return action(action(value));
}

// Expected output:
console.log(applyTwice(3, (n) => n * 2));      // 12
console.log(applyTwice(10, (n) => n + 1));     // 12
console.log(applyTwice("a", (s) => s + "!"));  // "a!!"
