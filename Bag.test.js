const bag = require ("./Bag")

describe ('bag class', () => {
    test('Bag needs a weight', () => {

        const testbag = new bag(25)

        expect(testbag.weight).toBe(25)
    })

    test('weight must be nonnegative and less than 50', () => {
        const testBag = new bag(0)

        expect(testBag.valid_weight()).toBe(false)

    })
})