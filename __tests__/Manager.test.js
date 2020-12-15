const Manager = require("../lib/Manager");
const Employee = require("../lib/classes");

test("Can set office number with constructor argument", () => {
    const testValue = 100;
    const employee = new Manager("Betty", 1, "asd@gmail.com", testValue);
    expect(employee.office).toBe(testValue);
});

test("getRole() should return \"Manager\"", () => {
    const testValue = "Manager";
    const employee = new Manager("Betty", 1, "asd@gmail.com", 100);
    expect(employee.getRole()).toBe(testValue);
});


