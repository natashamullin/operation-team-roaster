const Engineer = require('../lib/Engineer.js')

test('creats an engineer profile', () => {
    const engineer = new Engineer(name);

    expect(engineer.name).toBe('Jim Cash');
    expect(engineer.title).toBe('Engineer');
    expect(engineer.id).toEqual(expect.any(Number));
    expect(engineer.email).toBe("email@email.com");
    expect(engineer.github).toBe("github.com");

});