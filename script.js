// ==========================
// 1. Create the student object
// ==========================
const student = {
  name: "John",
};

// ==========================
// 2. Create the getKeys function
// ==========================
function getKeys(obj) {
  return Object.keys(obj);
}

// ==========================
// 3. Test the function
// ==========================
console.log(getKeys(student)); // Output: ["name"]

// Extra test with multiple properties
const student2 = {
  name: "Alice",
  age: 21,
  city: "New York",
};
console.log(getKeys(student2)); // Output: ["name", "age", "city"]

// student-keys.js

// 1. Create the student object
const student = {
  name: "John",
};

// 2. Create the getKeys function
function getKeys(obj) {
  return Object.keys(obj);
}

// 3. Quick manual test
console.log(getKeys(student)); // ["name"]

// 4. Export for Node/Cypress environments (optional, safe to include)
if (typeof module !== "undefined" && module.exports) {
  module.exports = { student, getKeys };
}
const { student, getKeys } = require("./student-keys.js");

console.log(getKeys(student)); // ["name"]