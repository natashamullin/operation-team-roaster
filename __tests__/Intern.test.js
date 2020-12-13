const Intern = require('../lib/Intern.js')

test('creats an intern profile', () => {
    const intern = new Intern(school);

    expect(intern.school).toEqual(expect.any(String));
});


