// const { TestWatcher } = require("@jest/core")
const airport = require ("./Airport")

describe('airport class', () => {

   test('airport has a name',() => {
       const testname = new airport("Dallas")
       expect(testname.name).toBe("Dallas")

   }) 

})