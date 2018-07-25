class Person {
  constructor(name = 'Anonymous', age = 0) {
    this.name = name;
    this.age = age;
  };

  getGreeting () {
    return `Hi, my name is ${this.name}`;
  };

  getDescription () {
    return `${this.name} is ${this.age} year(s) old.`
  }
};

const me = new Person('John', 28);
console.log(me.getDescription());

const other = new Person();
console.log(other.getDescription());

