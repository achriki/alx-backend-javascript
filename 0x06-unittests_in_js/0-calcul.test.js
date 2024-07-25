const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('calculateNumber', () => {
    it('floating the both numbers', () => {
        assert.strictEqual(calculateNumber(1.0, 2.0), 3);
    });

    it('rounding down b', () => {
        assert.strictEqual(calculateNumber(2.0, 3.4), 5);
    });

    it('rounding down a', () => {
        assert.strictEqual(calculateNumber(2.4, 3), 5);
    });

    it('rounding down a & b', () => {
        assert.strictEqual(calculateNumber(2.0, 3.4), 5);
    });

    it('rounding up b', () => {
        assert.strictEqual(calculateNumber(2.0, 3.7), 6);
    });

    it('rounding up a', () => {
        assert.strictEqual(calculateNumber(2.6, 3), 6);
    });

    it('rounding up a & b', () => {
        assert.strictEqual(calculateNumber(2.7, 3.9), 7);
    });
})