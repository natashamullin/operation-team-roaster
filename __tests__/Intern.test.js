const Intern = require('../lib/classes.js')

test('creats an intern profile', () => {
    const intern = new Intern(name, title);

    expect(intern.name).toBe('Jim');
    expect(intern.title).toBe('Intern');
    expect(intern.id).toEqual(expect.any(Number));
    expect(intern.email).toEqual(expect.any(Object));
    expect(intern.github).toEqual(expect.any(Object));
    expect(intern.school).toEqual(expect.any(Object));
});