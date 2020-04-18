class Singleton {
  constructor(name) {
    this.name = name
    
    if (typeof Singleton.instance === "object") {
      return Singleton.instance
    }

    Singleton.instance = this
  }
}

console.log(new Singleton("name1"))
console.log(new Singleton("name2"))