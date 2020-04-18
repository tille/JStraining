// abstract class is optional (?)
class Pet {
  constructor() {}

  getPet(pet) {
    console.log(`Here is your new ${pet}`)
  }
}

// concrete product
class Dog extends Pet {
  constructor (pet) {
    super()
    this.getPet(pet)
  }
}

// concrete product
class Cat extends Pet {
  constructor (pet) {
    super()
    this.getPet(pet)
  }
}

class petFactory {
  constructor (pet) {
    switch (pet) {
      case 'dog':
        return new Dog(pet);
      case 'cat':
        return new Cat(pet);
      default:
        return null
    }
  }
}

new petFactory("dog")