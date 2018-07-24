// arguments object - no longer bound w arrow functions

const add = function (a, b) {
  console.log(arguments);
  return a + b;
};
console.log(add(55, 1, 10001));

const addArrow = (a, b) => {
  // console.log(arguments); // WON'T WORK!
  return a + b;
};
console.log(addArrow(52, 5));

// this keyword - no longer bound

const user = {
  name: 'John',
  cities: ['Portland', 'Eugene', 'New York'],
  printPlacesLived () { // Needs to be an error functions
    // this.cities.forEach(function (city) {
    //   console.log(`${this.name} has lived in ${city}.`)
    // });
    this.cities.forEach((city) => {
      console.log(`${this.name} has lived in ${city}.`)
    });
  },
};

user.printPlacesLived();

const multiplier = {
  numbers: [1, 2, 3],
  multiplyBy: 3,
  multiply() {
    return this.numbers.map((number) => number * this.multiplyBy);
  },
};

console.log(multiplier.multiply());

