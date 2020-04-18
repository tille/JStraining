class carAbstractFactory {
  static ferrari () {
    return ferrariFactory.create('ferrari')
  }

  static mercedes() {
    return mercedesFactory.create('mercedes')
  }
}

class Car {
  constructor (brand) {
    this.brand = brand
  }
}

class ferrariFactory {
  static create (brand) {
    return new Car(brand)
  }
}

class mercedesFactory {
  static create (brand) {
    return new Car(brand)
  }
}

console.log(carAbstractFactory.mercedes())