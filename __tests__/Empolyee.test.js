const Employee = require('../lib/classes.js');

test('creats an employee profile', () => {
    const employee = new Employee(name, title, id, email);

    expect(employee.name).toEqual(expect.any(String));
    expect(employee.title).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
});

