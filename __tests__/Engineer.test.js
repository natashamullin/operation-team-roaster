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

test("Can get GitHub username with getGithub()", () => {
    const testValue = "GitHub";
    const employee = new Engineer("Bill", 1, "asd@gmail.com", testValue);
    expect(employee.getEngineerGithub()).toBe(testValue);
});