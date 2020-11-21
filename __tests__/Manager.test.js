const Manager = require('../lib/classes.js')

test('creats a Manager profile', () => {
    const manager = new Manager(name, title);

    expect(manager.name).toBe('Jim');
    expect(manager.title).toBe('Manager');
    expect(manager.id).toEqual(expect.any(Number));
    expect(manager.email).toEqual(expect.any(Object));
    expect(manager.github).toEqual(expect.any(Object));

});