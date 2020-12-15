const Intern = require("../lib/Intern");

test("Can set school with constructor", () => {
    const testValue = "MIT";
    const employee = new Intern("Stacy", 1, "asd@gmail.com", testValue);
    expect(employee.school).toBe(testValue);
});

test("getRole() should return \"Intern\"", () => {
    const testValue = "Intern";
    const employee = new Intern("Stacy", 1, "asd@gmail.com", "UCLA");
    expect(employee.getRole()).toBe(testValue);
});

test("Can get school with getSchool()", () => {
    const testValue = "MIT";
    const employee = new Intern("Stacy", 1, "asd@gmail.com", testValue);
    expect(employee.getInternSchool()).toBe(testValue);
});
