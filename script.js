// Create the student object
const student = {
  name: "John"
};

// Function to get all keys from an object
function getKeys(obj) {
  return Object.keys(obj);
}

// Example test
console.log(getKeys(student)); // ["name"]