const airplane = require ("./Airplane")

describe('airplane class', ()=>{
    
    test('Airplane needs name', () => {

    
    expect('name').toBe('Maverick')
    })

    test('Needs passengers to operate', () => {
        
        const testairplane = new airplane()

        expect(passengersBoarded).toBe(50)

    })
})