class Car {
  #brand;
  #model;
  speed = 0;
  topSpeed = 200;
  isMoving = false;
  isTrunkOpen = false;

  constructor(carDetails) {
    this.#brand = carDetails.brand;
    this.#model = carDetails.model;
  }

  displayInfo() {
    console.log(`Brand: ${this.#brand}, Model: ${this.#model}, Speed: ${this.speed}, Trunk Open: ${this.isTrunkOpen}`);
  }

  go() {
    if(!this.isTrunkOpen && this.speed < this.topSpeed) {
      this.speed += 5;
      this.isMoving = true;
    } else {
      console.log("Cannot accelerate while the trunk is open.");
    }
  }

  brake() {
    this.speed -= 5;
    this.isMoving = false;
  }

  openTrunk() {
    if(!this.isMoving) {
      this.isTrunkOpen = true;
    } else {
      console.log("Cannot open the trunk while the car is moving.");
    }
  }

  closeTrunk() {
    this.isTrunkOpen = false;
  }
}

class RaceCar extends Car {
  acceleration;

  constructor(carDetails) {
    super(carDetails);
    this.topSpeed = 300;
    this.acceleration = carDetails.acceleration;
  }

  go() {
    if(this.speed < this.topSpeed) {
      this.speed += this.acceleration;
    }
  }

  openTrunk() {}
  closeTrunk() {}

}

const toyota = new Car({
  brand: 'Toyota',
  model: 'Corolla'
});

const tesla = new Car({
  brand: 'Tesla',
  model: 'Model 3'
});

toyota.go();
tesla.go();
tesla.go();
tesla.brake();
toyota.go();

toyota.openTrunk();
toyota.go(); // Output: Cannot accelerate while the trunk is open.

toyota.displayInfo(); // Output: Brand: Toyota, Model: Corolla
tesla.displayInfo();  // Output: Brand: Tesla, Model: Model 3

const mclaren = new RaceCar({
  brand: 'McLaren',
  model: 'F1',
  acceleration: 20
});

mclaren.go();
mclaren.displayInfo(); // Output: Brand: McLaren, Model: F1, Speed: 20, Trunk Open: false
mclaren.go();
mclaren.displayInfo(); // Output: Brand: McLaren, Model: F1, Speed: 40, Trunk Open: false