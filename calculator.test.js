import { expect } from 'chai'
import { calculator, calcFirstOperator } from './calculator'

describe('calculator', () => {


    it('should return 4', () => {
        const result = calculator('3 1 +');
        expect(result).to.equal(4);
    })

    it('should return 6', () => {
        const result = calculator('7 4 5 + * 3 - 10 /');
        expect(result).to.equal(6);
    })
    it('should return 6', () => {
        const result = calculator('1 4 + 8 - 9 *');
        expect(result).to.equal(-27);
    })



    it('handle invaild expression', () => {
        const result = calculator('7 4 5 + * 3 - / 10 90');
        expect(result).to.equal(null);
    })





})