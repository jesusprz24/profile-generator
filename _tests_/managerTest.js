const manager = require("../lib/manager")
const manager = new manager ('Obi-Wan', 42, 'master@gmail.com', '1138');

describe("manager", () => {
    describe('test properties of manager', () => {
        it("test name property", () => {
            expect(manager.name).toBe('Obi-Wan');
        })
        it('test id properties', () => {
            expect(manager.id).toBe(42);
        })
        it('test email property', () => {
            expect(manager.email).toBe('master@gmail.com');
        })
        it('test school property', () => [
            expect(manager.officeNumber).toBe('1138')
        ])
    })

    describe('test all methods of manager', () => {
        it('tests role method', () => [
            expect(manager.getRole()).toBe('Manager')
        ])
    })
})