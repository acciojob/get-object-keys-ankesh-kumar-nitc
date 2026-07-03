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