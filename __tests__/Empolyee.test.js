const Employee = require('../lib/classes.js');
const Manager = require('../lib/Manager.js');
const Engineer = require('../lib/Engineer.js');
const Intern = require('../lib/Intern.js');

test('creats a employee profile', () => {
    const employee = new Employee(name);

    expect(employee.name).toEqual(expect.any(String));
    expect(employee.title).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
    expect(employee.github).toEqual(expect.any(String));
    expect(employee.school).toEqual(expect.any(String));

});

test('creats a Manager profile', () => {
    const manager = new Manager(name);

    expect(manager.name).toEqual(expect.any(String));
    expect(manager.title).toEqual(expect.any(String));
    expect(manager.id).toEqual(expect.any(Number));
    expect(manager.office).toEqual(expect.any(Number));
    expect(manager.email).toEqual(expect.any(String));


});
test('creats an Engineer profile', () => {
    const engineer = new Engineer(name);
    expect(engineer.name).toEqual(expect.any(String));
    expect(engineer.title).toEqual(expect.any(String));
    expect(engineer.id).toEqual(expect.any(Number));
    expect(engineer.office).toEqual(expect.any(Number));
    expect(engineer.email).toEqual(expect.any(String));
    expect(engineer.github).toEqual(expect.any(String));

});
test('creats an Intern profile', () => {
    const intern = new Intern(name);
    expect(intern.name).toEqual(expect.any(String));
    expect(intern.title).toEqual(expect.any(String));
    expect(intern.id).toEqual(expect.any(Number));
    expect(intern.school).toEqual(expect.any(String));
    expect(intern.email).toEqual(expect.any(String));
    expect(intern.github).toEqual(expect.any(String));

});