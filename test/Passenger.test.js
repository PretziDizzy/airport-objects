const passenger = require("./Passenger")

describe ('passenger class',() =>{
  test ("should have name",() =>{
    const testpassenger = new passenger("John Smith")
    expect(testpassenger.name).toBe("John Smith")
})

test ("should have a passport",() =>{
    const testpassenger1 = new passenger("John Smith", "Passport123", )
    expect(testpassenger.passportNumber).toBe("Passport123")
})

test ("should have a seat number",() =>{
    expect(testpassenger.seatNumber).toBe("12C")
    
})

})

