
const person = require("./person")
class Passenger extends Person 
{
    constructor(name, passportNumber, seatNumber) {
        super(name, bags )
        this.passportNumber = passportNumber
        this.seatNumber = seatNumber
    
    }

    callAttendant(){
        console.log("Excuse me")
    }


}