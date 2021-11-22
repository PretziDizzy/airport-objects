class Square {
    constructor(length){
        this.height = length
        this.width = length
    }

    static isValidSquare(width,height){
        return width===height
    }

    static isAreaEqual(squareA, squareB){
        const areaA = squareA.height * squareA.width
        const areaB = squareB.height * squareB.width
        return areaA===areaB
    }
}

let s1 = new Square(4)
let s2 = new Square(6)

console.log(s1)
console.log(s2)
console.log(Square.isAreaEqual(14,10))
console.log(Square.isValidSquare(12,13))