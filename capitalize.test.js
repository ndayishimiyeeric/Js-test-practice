const capitalize = require('./capitalize.js');

test('Unite Test to capital', () => {
    expect(capitalize('hello')).toBe('Hello');
});

test('Unite Test to capital', () => {
    expect(capitalize('aaaaa')).toBe('Aaaaa');
});