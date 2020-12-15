<<<<<<< HEAD
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
=======
const Engineer = require("../lib/Engineer");

test("Can set GitHUb account via constructor", () => {
    const testValue = "GitHub";
    const employee = new Engineer("Bill", 1, "asd@gmail.com", testValue);
    expect(employee.github).toBe(testValue);
});

test("getRole() should return \"Engineer\"", () => {
    const testValue = "Engineer";
    const employee = new Engineer("Bill", 1, "asd@gmail.com", "GitHub");
    expect(employee.getRole()).toBe(testValue);
});

test("Can get GitHub username via getGithub()", () => {
    const testValue = "GitHub";
    const employee = new Engineer("Bill", 1, "asd@gmail.com", testValue);
    expect(employee.getEngineerGithub()).toBe(testValue);
>>>>>>> develop
});
