// 1

let dog = {
    name: "Pappagiorgio",
    numLegs: 3
  };

// 2

console.log(dog.name);
console.log(dog.numLegs);

// 3

    sayLegs: function () {return "This dog has " + dog.numLegs + " legs."}
};

dog.sayLegs();

// 4

sayLegs: function () {return "This dog has " + this.numLegs + " legs."}
};

this.sayLegs();

// 5

function Dog() {
  this.name = "Rusty";
  this.color = "brown";
  this.numLegs = 4;

}

// 6

let hound = new Dog();

// 7

function Dog(name, color, numLegs) {
  this.name = name;
  this.color = color;
  this.numLegs = 4;
  }
  let terrier = new Dog("Lil barker","White")

// 8

function House(numBedrooms) {
  this.numBedrooms = numBedrooms;
}
let myHouse = new House(4);

myHouse instanceof House;

// 9

function Bird(name) {
  this.name = name;
  this.numLegs = 2;
}

let canary = new Bird("Tweety");
let ownProps = [];

for (let property in canary) {
  if(canary.hasOwnProperty(property)) {
    ownProps.push(property);
  }
}
console.log(ownProps);

// 10

function Dog(name) {
  this.name = name;
}


let beagle = new Dog("Snoopy");
Dog.prototype.numLegs = 4;