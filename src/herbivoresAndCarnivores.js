'use strict';

class Animal {
  static alive = [];

  constructor(name) {
    this.name = name;
    this.health = 100;
  }
}

class Herbivore extends Animal {
  constructor(name) {
    super(name);
    this.hidden = false;
    Animal.alive.push(this);
  }

  hide() {
    this.hidden = !this.hidden;
  }
}

class Carnivore extends Animal {
  constructor(name) {
    super(name);
    Animal.alive.push(this);
  }

  bite(food) {
    Animal.alive.forEach((animal, idx) => {
      if (
        animal.name === food.name &&
        animal.health > 0 &&
        animal.hidden === false
      ) {
        animal.health -= 50;
      }
    });

    Animal.alive = Animal.alive.filter((animal) => {
      if (animal.health >= 0 && animal !== food) {
        return animal;
      }
    });
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
