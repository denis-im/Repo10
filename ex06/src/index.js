// Only change code below this line
var lion = {
  name: "Simba",
  legs: 4,
  tails: 1
}

function myFunction(prop, value) {
  lion[prop] = value;
  return lion;
}

console.log(myFunction("roar", "roar-roar"));

// Only change code above this line
module.exports = myFunction;
