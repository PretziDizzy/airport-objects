class airport{
    static airports = []
    
    constructor(name,code){
    this.name = name
    this.code = code
    this.airplanes = []
    this.constructor.airports.push(this)
    }

    land(airplane){
        this.airplanes.push(airplane)
    }

}
let a1 = new Airport("Denver", "DEN")
let a2 = new Airport("Dallas", "DAL")
// console.log("Airport 1: ", a1)
console.log("Array of Airports: ", Airport.airports)
