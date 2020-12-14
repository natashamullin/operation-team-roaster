const Intern = require("../lib/Intern");

test("Can set school via constructor", () => {
    const testValue = "MIT";
    const e = new Intern("Stacy", 1, "asd@gmail.com", testValue);
    expect(e.school).toBe(testValue);
});

test("getRole() should return \"Intern\"", () => {
    const testValue = "Intern";
    const e = new Intern("Stacy", 1, "asd@gmail.com", "UCLA");
    expect(e.getRole()).toBe(testValue);
});

test("Can get school via getSchool()", () => {
    const testValue = "MIT";
    const e = new Intern("Stacy", 1, "asd@gmail.com", testValue);
    expect(e.getInternSchool()).toBe(testValue);
});
