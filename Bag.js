class Bag {
    
    constructor(weight) {
        this.weight = weight
    }
}

const bag = new Bag(16)
console.log(bag.weight) // 16
module.exports = Bag