const { sum, sub, mult, div } = require('./OperacoesAritimeticas');

describe('Operações Aritiméticas', () => {
    it('Soma', () => {
        expect(sum(1, 2)).toBe(3);
        expect(sum(1, 5)).toBeGreaterThan(4);
        expect(sum(1, 5)).toBeGreaterThan(5);
        expect(sum(1, 5)).not.toBe(7);
        expect(sum(1, 5)).not.toBe(4);
    });
    it('Subtração', () => {
        expect(sub(1, 2)).toBe(-1);
        expect(sub(1, 5)).toBeLessThan(0);
        expect(sub(1, 5)).toBeLessThan(-1);
        expect(sub(1, 4)).not.toBe(7);
        expect(sub(1, 5)).not.toBe(4);
    });
    it('Multiplicação', () => {
        expect(mult(1, 2)).toBe(2);
        expect(mult(1, 5)).toBeGreaterThan(4);
        expect(mult(2, 5)).toBeGreaterThan(5);
        expect(mult(1, 5)).not.toBe(7);
        expect(mult(1, 5)).not.toBe(4);
    });
    it('Divisão', () => {
        expect(div(1, 2)).toBe(0.5);
        expect(div(1, 0)).toBe(Infinity);
        expect(div(0, 0)).toBe(NaN);
        expect(div(1, 2)).not.toBe(0.6);
        expect(div(1, 2)).not.toBe(0.4);
        expect(div(1, 2)).not.toBe(0.3);
    });
});

