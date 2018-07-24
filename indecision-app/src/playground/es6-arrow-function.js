const square = function (x) {
  return x * x;
};

const squareArrow = (x) => x * x;

console.log(square(5));
console.log(squareArrow(5));

const getFirstName = (fullName) => fullName.split(' ')[0];

console.log(getFirstName('John York'));
