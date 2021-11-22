const passenger = require("./Passenger")

const name: ''
const passportNumber: ''
const seatNumber: undefined

describe ('passenger class',() =>{
  test ("should have name",() =>{
    const testpassenger = new passenger("John Smith")
    expect(testpassenger.name).toBe("John Smith")
})

test ("should have a passport",() =>{
    const testpassenger = new passenger("Passport123")
    expect(testpassenger.passportNumber).toBe("Passport123")
})

test ("should have a seat number",() =>{
    const testpassenger = new passenger("12C")
    expect(testpassenger.seatNumber).toBe("12C")
})

})

