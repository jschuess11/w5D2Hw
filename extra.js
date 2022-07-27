let dog = {
    name: "Pappagiorgio",
    numLegs: 3,
    sayLegs: function () {return "This dog has " + this.numLegs + " legs."}
};

this.sayLegs();

console.log(dog.name);
console.log(dog.numLegs);

function Dog() {
    this.name = "Rusty";
    this.color = "brown";
    this.numLegs = 4;
  
  }

  let hound = new Dog();

  function Dog(name, color, numLegs) {
    this.name = name;
    this.color = color;
    this.numLegs = 4;
    }
    let terrier = new Dog("Lil barker","White")

    function House(numBedrooms) {
        this.numBedrooms = numBedrooms;
      }
      let myHouse = new House(4);
      
      myHouse instanceof House;
      
      function Bird(name) {
        this.name = name;
        this.numLegs = 2;
      }
      
      let canary = new Bird("Tweety");
      let ownProps = [];
      // Only change code below this line
      for (let property in canary) {
        if(canary.hasOwnProperty(property)) {
          ownProps.push(property);
        }
      }
      console.log(ownProps);

      function Dog(name) {
        this.name = name;
      }
      
      
      
      
      let beagle = new Dog("Snoopy");
      Dog.prototype.numLegs = 4;