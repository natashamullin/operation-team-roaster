const Manager = require('../lib/Manager.js')

test('creats a Manager profile', () => {
    const manager = new Manager(name);

    expect(manager.name).toBe('Manager');
    expect(manager.title).toBe('Manager');
    expect(manager.id).toEqual(expect.any(Number));
    expect(manager.email).toBe("email@email.com");
    expect(manager.github).toBe("github.com");

});