const stringLength = require('./stringLength.js');

test('valid Length', () => {
    expect(stringLength('hello')).toBe(5);
});

test('valid Length', () => {
    expect(stringLength('thth.e/er')).toBe(9);
});