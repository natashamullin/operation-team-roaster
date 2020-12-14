const Employee = require("../lib/classes");

test("Can instantiate Employee instance", () => {
    const employee = new Employee();
    expect(typeof (employee)).toBe("object");
});

test("Can set name with constructor arguments", () => {
    const name = "Bill";
    const employee = new Employee(name);
    expect(employee.name).toBe(name);
});

test("Can set id with constructor argument", () => {
    const testValue = 100;
    const employee = new Employee("Foo", testValue);
    expect(employee.id).toBe(testValue);
});

test("Can set email with constructor argument", () => {
    const testValue = "asd@gamil.com";
    const employee = new Employee("Foo", 1, testValue);
    expect(employee.email).toBe(testValue);
});

test("Can get name with getName()", () => {
    const testValue = "Alice";
    const employee = new Employee(testValue);
    expect(employee.getName()).toBe(testValue);
});

test("Can get id with getId()", () => {
    const testValue = 100;
    const employee = new Employee("Foo", testValue);
    expect(employee.getId()).toBe(testValue);
});

test("Can get email with getEmail()", () => {
    const testValue = "asd@gamil.com";
    const employee = new Employee("Foo", 1, testValue);
    expect(employee.getEmail()).toBe(testValue);
});

test("getRole() should return \"Employee\"", () => {
    const testValue = "Employee";
    const employee = new Employee("Alice", 1, "asd@gamil.com");
    expect(employee.getRole()).toBe(testValue);
});