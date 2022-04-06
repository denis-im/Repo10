// Only change code below this line
var lion = {
  name: "Simba",
  legs: 4,
  tails: 1
}

function myFunction(param, value) {
  lion[param] = value;
  return lion;
}

console.log(myFunction("roar", "roar-roar"));

// Only change code above this line
module.exports = myFunction;
