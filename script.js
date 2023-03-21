//your JS code here. If required.
const student = {
  name: "John Doe"
};

// Add the getKeys() method to the Object prototype
Object.prototype.getKeys = function() {
  return Object.keys(this);
};

// Call the getKeys() method on the student object
const keys = student.getKeys();
console.log(keys);