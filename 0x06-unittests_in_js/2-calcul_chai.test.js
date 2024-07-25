const assert = require('assert');
const {expect} = require('chai')
const calculateNumber = require('./1-calcul');

describe('calculateNumber', () => {
    describe ('type == "SUM"', () => {
        it('positive numbers', () => {
            expect(calculateNumber('SUM', 1.0, 2.0)).to.equal(3)
        })

        it('rounded positive numbers', () => {
            expect(calculateNumber('SUM', 1.4, 2.8)).to.equal(4)
        })

        it('negative numbers', () => {
            expect(calculateNumber('SUM', -1.0, -2.0)).to.equal(-3)
        })
        
        it('rounded negative numbers', () => {
            expect(calculateNumber('SUM', -1.4, -2.8)).to.equal(-4)
        })

        it('positive and negative numbers', () => {
            expect(calculateNumber('SUM', -1.0, 2.0)).to.equal(1)
        })

        it('positive and negative numbers (rounded)', () => {
            expect(calculateNumber('SUM', 2.1, -3.7)).to.equal(-2)
        })
    });

    describe ('type == "SUBTRACT"', () => {
        it('positive numbers', () => {
            expect(calculateNumber('SUBTRACT', 2.0, 2.0)).to.equal(0)
        })

        it('rounded positive numbers', () => {
            expect(calculateNumber('SUBTRACT', 1.4, 2.8)).to.equal(-2)
        })

        it('negative numbers', () => {
            expect(calculateNumber('SUBTRACT', -1.0, -2.0)).to.equal(1)
        })
        
        it('rounded negative numbers', () => {
            expect(calculateNumber('SUBTRACT', -1.4, -2.8)).to.equal(2)
        })

        it('positive and negative numbers', () => {
            expect(calculateNumber('SUBTRACT', -1.0, 2.0)).to.equal(-3)
        })

        it('positive and negative numbers (rounded)', () => {
            expect(calculateNumber('SUBTRACT', 2.1, -3.7)).to.equal(6)
        })
    });

    describe('type == "DIVIDE"',() => {
        it('positive numbers', () => {
            expect(calculateNumber('DIVIDE', 8.0, 2.0)).to.equal(4.0);
        })

        it('rounded positive numbers', () => {
            expect(calculateNumber('DIVIDE', 2.6, 3.0)).to.equal(1);
        })

        it('negative numbers', () => {
            expect(calculateNumber('DIVIDE', -7.0, -2.0)).to.equal(3.5);
        })
        
        it('rounded negative numbers', () => {
            expect(calculateNumber('DIVIDE', -2.4, -0.8)).to.equal(2)
        })

        it('positive and negative numbers', () => {
            expect(calculateNumber('DIVIDE', -7.0, 2.0)).to.equal(-3.5);
        })

        it('positive and negative numbers (rounded)', () => {
            expect(calculateNumber('SUBTRACT', 2.1, -3.7)).to.equal(6)
        })

        it('0 and positive number', () => {
            expect(calculateNumber('DIVIDE', 0.0, 5.0)).to.equal(0);
        })
    
        it('0 and negative number', () => {
            expect(calculateNumber('DIVIDE', 0.0, -5.0)).to.equal(-0);
        })

        it('positive number and 0', () => {
            expect(calculateNumber('DIVIDE', 5.0, 0)).to.equal('Error');
        })

        it('negative number and 0', () => {
            expect(calculateNumber('DIVIDE', -5.0, 0)).to.equal('Error');
        })
    });
})
