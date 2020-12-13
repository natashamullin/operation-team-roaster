const Manager = require('../lib/Manager.js')

test('creats a Manager profile', () => {
    const manager = new Manager(office);

    expect(manager.office).toEqual(expect.any(Number));

});
