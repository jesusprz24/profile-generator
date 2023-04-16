const engineer = require("../lib/engineer")
const engineer = new engineer ('Yoda', 1000, 'littlegreen@gmail.com', 'doordonot');

describe("Engineer", () => {
    describe('test properties of Engineer', () => {
        it("test name property", () => {
            expect(engineer.name).toBe('Yoda');
        })
        it('test id properties', () => {
            expect(engineer.id).toBe(1000);
        })
        it('test email property', () => {
            expect(engineer.email).toBe('littlegreen@gmail.com');
        })
        it('test github property', () => [
            expect(engineer.github).toBe('doordonot')
        ])
    })

    describe('test all methods of Engineer', () => {
        it('test github method', () => {
            expect(engineer.github()).toBe('doordonot');
        })
        it('tests role method', () => [
            expect(engineer.getRole()).toBe('Engineer')
        ])
    })
})
