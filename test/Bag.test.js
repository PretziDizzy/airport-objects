const bag = require ("../src/bag")

describe ('bag class', () => {
    test('Bags needs a weight', () => {

        const testbag = new Bag(25)
        expect(testbag.weight).toBe(25)
    })

    test('weight must be nonnegative and less than 50', () => {
        const testBag = new bag(0)

        expect(testBag.valid_weight()).toBe(false)

    })
})