const Person = require ("./Person")
class crewMember extends Person {
    
    constructor(name, bags, position, staffNumber) {
        super(name, bags)
        this.position = position;
        this.staffNumber = staffNumber;
    }

}

module.exports = crewMember