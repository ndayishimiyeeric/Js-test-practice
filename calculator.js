class Calculator {
    constructor() {
        this.store = [];
    }

    get(numberOne, numberTwo) {
        this.store.push(numberOne);
        this.store.push(numberTwo);
        return this.store;
    }

    add() {
        let sum = this.store[0] + this.store[1];
        return sum;
    }

    substract() {
        let sub;
        if (this.store[0] >= this.store[1]) {
            sub = this.store[0] - this.store[1];
        } else {
            sub = this.store[1] - this.store[0];
        }
        return sub;
    }

    divide() {
        let div;
        if (this.store[0] >= this.store[1]) {
            div = this.store[0] / this.store[1];
        } else {
            div = this.store[1] / this.store[0];
        }
        return div;
    }

    multiply() {
        let prod = this.store[0] * this.store[1];
        return prod;
    }
}

module.exports = Calculator;