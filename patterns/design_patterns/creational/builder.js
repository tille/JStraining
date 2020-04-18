// disjoin contruction from representation
class Builder {
  contructor() {}

  setFirstParam() {
    this.first = "first param"
  }

  build() {
    return {
      first: this.first
    }
  }
}

const test = new Builder()
test.setFirstParam()
test.build()

console.log(test)
