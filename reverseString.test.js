const reverseString = require('./reverseString.js');

test('reversed', () => {
    expect(reverseString('hello')).toBe('olleh');
});

test('reversed', () => {
    expect(reverseString('SuperMarket')).toBe('tekraMrepuS');
});