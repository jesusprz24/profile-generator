const employee = require("../lib/employee")
const employee = new employee('Darth Vader', 44, 'realfather@gmail.com');

describe("Employee", () => {
    describe('test properties of Employee', () => {
        it("test name property", () => {
            expect(employee.name).toBe('Darth Vader');
        })
        it('test id properties', () => {
            expect(employee.id).toBe(44);
        })
        it('test email property', () => {
            expect(employee.email).toBe('realfather@gmail.com');
        })
    })

    describe('test all methods of Employee', () => {
        it('test github method', () => {
            expect(employee.getEmail()).toBe('realfather@gmail.com');
        })
        it('tests role method', () => [
            expect(employee.getRole()).toBe('Employee')
        ])
    })
})
