const Intern = require('../lib/Intern.js')

test('creats an intern profile', () => {
    const intern = new Intern(name);

    expect(intern.name).toBe('Betty Reed');
    expect(intern.title).toBe('Intern');
    expect(intern.id).toEqual(expect.any(Number));
    expect(intern.email).toEqual(expect.any(String));
    expect(intern.github).toEqual(expect.any(String));
    expect(intern.school).toEqual(expect.any(String));
});

