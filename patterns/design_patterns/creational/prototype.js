// When the classes are instantiated at runtime.
// When the cost of creating an object is expensive or complicated.
// When you want to keep the number of classes in an application minimum.
// When the client application needs to be unaware of object creation and representation.

class PrototypePatternPet {
  constructor () {
    this.m = new Map()
    this.m.set('cat', new Cat())
    this.m.set('dog', new Dog())
  }

  create (pet) {
    const savedPet = this.m.get(pet);

    if (!savedPet) return "Error";
    else return savedPet.clone()
  }
}

class Pet {
  constructor() {}

  clone () {
    return Object.getPrototypeOf(this);
  }
}

class Cat extends Pet {
  constructor () {
    super()
  }

  sayHi () {
    return "Miau"
  }
}

class Dog extends Pet {
  constructor () {
    super()
  }

  sayHi () {
    return "Guau"
  }
}

a = new PrototypePatternPet()
console.log(a.create('cat').sayHi())
console.log(a.create('dog').sayHi())