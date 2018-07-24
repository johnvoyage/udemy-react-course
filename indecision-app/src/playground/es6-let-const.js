var nameVar = `John`;
var nameVar = `Johnny`;
console.log(`nameVar: ${nameVar}`);

let nameLet = `Jen`;
nameLet = `Jenny`; 
// let nameLet = `Jennifer`; 
console.log(`nameLet: ${nameLet}`);

const nameConst = `Mike`;
// nameConst = `Mikey`; 
// const nameConst = `Michael`;
console.log(`nameConst: ${nameConst}`)

// let and const are block scoped 

var fullName = `John York`;

if (fullName) {
  var firstName = fullName.split(' ')[0];
  // const firstName = fullName.split(' ')[0];
  // let firstName = fullName.split(' ')[0];
  console.log(firstName);
};

console.log(firstName); // won't be accessible with const or let in the if stmt