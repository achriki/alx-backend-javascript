const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe('calculateNumber', () => {
    describe ('type == "SUM"', () => {
        it('positive numbers', () => {
            assert.strictEqual(calculateNumber('SUM', 1.0, 2.0), 3)
        })

        it('rounded positive numbers', () => {
            assert.strictEqual(calculateNumber('SUM', 1.4, 2.8), 4)
        })

        it('negative numbers', () => {
            assert.strictEqual(calculateNumber('SUM', -1.0, -2.0), -3)
        })
        
        it('rounded negative numbers', () => {
            assert.strictEqual(calculateNumber('SUM', -1.4, -2.8), -4)
        })

        it('positive and negative numbers', () => {
            assert.strictEqual(calculateNumber('SUM', -1.0, 2.0), 1)
        })

        it('positive and negative numbers (rounded)', () => {
            assert.strictEqual(calculateNumber('SUM', 2.1, -3.7), -2)
        })
    });

    describe ('type == "SUBTRACT"', () => {
        it('positive numbers', () => {
            assert.strictEqual(calculateNumber('SUBTRACT', 2.0, 2.0), 0)
        })

        it('rounded positive numbers', () => {
            assert.strictEqual(calculateNumber('SUBTRACT', 1.4, 2.8), -2)
        })

        it('negative numbers', () => {
            assert.strictEqual(calculateNumber('SUBTRACT', -1.0, -2.0), 1)
        })
        
        it('rounded negative numbers', () => {
            assert.strictEqual(calculateNumber('SUBTRACT', -1.4, -2.8), 2)
        })

        it('positive and negative numbers', () => {
            assert.strictEqual(calculateNumber('SUBTRACT', -1.0, 2.0), -3)
        })

        it('positive and negative numbers (rounded)', () => {
            assert.strictEqual(calculateNumber('SUBTRACT', 2.1, -3.7), 6)
        })
    });

    describe('type == "DIVIDE"',() => {
        it('positive numbers', () => {
            assert.strictEqual(calculateNumber('DIVIDE', 8.0, 2.0), 4.0);
        })

        it('rounded positive numbers', () => {
            assert.strictEqual(calculateNumber('DIVIDE', 2.6, 3.0), 1);
        })

        it('negative numbers', () => {
            assert.strictEqual(calculateNumber('DIVIDE', -7.0, -2.0), 3.5);
        })
        
        it('rounded negative numbers', () => {
            assert.strictEqual(calculateNumber('DIVIDE', -2.4, -0.8), 2)
        })

        it('positive and negative numbers', () => {
            assert.strictEqual(calculateNumber('DIVIDE', -7.0, 2.0), -3.5);
        })

        it('positive and negative numbers (rounded)', () => {
            assert.strictEqual(calculateNumber('SUBTRACT', 2.1, -3.7), 6)
        })

        it('0 and positive number', () => {
            assert.strictEqual(calculateNumber('DIVIDE', 0.0, 5.0), 0);
        })
    
        it('0 and negative number', () => {
            assert.strictEqual(calculateNumber('DIVIDE', 0.0, -5.0), -0);
        })

        it('positive number and 0', () => {
            assert.strictEqual(calculateNumber('DIVIDE', 5.0, 0), 'Error');
        })

        it('negative number and 0', () => {
            assert.strictEqual(calculateNumber('DIVIDE', -5.0, 0), 'Error');
        })
    });
})
