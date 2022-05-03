const Calculator = require('./calculator.js');
const assert = require('assert');

describe('Unit Test', () => {
    test('get two numbers and Add', () => {
        const calc = new Calculator();
        expect(calc.get(2,3)).toEqual([2,3])

        assert(calc.get(3,5));
        assert(calc.add());
    })

    test('get two numbers and substract', () => {
        const calc = new Calculator();
        expect(calc.get(2,3)).toEqual([2,3])
        expect(calc.substract()).toEqual(1)

        assert(calc.add());
    })

    test('get two numbers and divide', () => {
        const calc = new Calculator();
        expect(calc.get(2,8)).toEqual([2,8])
        expect(calc.divide()).toEqual(4)

        assert(calc.substract());
    })

    test('get two numbers and multiply', () => {
        const calc = new Calculator();
        expect(calc.get(2,8)).toEqual([2,8])
        expect(calc.multiply()).toEqual(16)

        assert(calc.divide());
    })
})