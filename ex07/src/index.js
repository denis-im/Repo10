// Only change code below this line
var lion = {
  name: "Simba",
  legs: 4,
  tails: 1,
  roar: "roar-roar"
}

function myFunction(prop) {
  delete lion[prop]
  return lion;
}

console.log(myFunction("roar"));

// Only change code above this line
module.exports = myFunction;
