const crewMember = require ("./CrewMember")

describe ('crewMember class', () => {
    test('crewMember needs a name', () => {


     expect(testbag.weight).toBe(25)
    })

    test('weight must be nonnegative and less than 50', () => {
        const testBag = new bag(0)

        expect(testBag.valid_weight()).toBe(false)

    })
})