const intern = require("../lib/intern")
const intern = new intern ('Luke', 28, 'usetheforce@gmail.com', 'Yoda Academy');

describe("Intern", () => {
    describe('test properties of Intern', () => {
        it("test name property", () => {
            expect(intern.name).toBe('Luke');
        })
        it('test id properties', () => {
            expect(intern.id).toBe(28);
        })
        it('test email property', () => {
            expect(intern.email).toBe('usetheforce@gmail.com');
        })
        it('test school property', () => [
            expect(intern.school).toBe('Yoda Academy')
        ])
    })

    describe('test all methods of Intern', () => {
        it('test github method', () => {
            expect(intern.school()).toBe('Yoda Academy');
        })
        it('tests role method', () => [
            expect(intern.getRole()).toBe('Intern')
        ])
    })
})