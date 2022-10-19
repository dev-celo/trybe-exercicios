const sum = require('./sum');

describe('Testa função sum', () => {
  test('Retorna o resultado da soma', () => {
    expect(sum(0, 0)).toBe(0);
    expect(sum(4, 5)).toBe(9);
  });

  test('Tratamento de erro(só aceita number)', () => {
    expect(() => sum(5, '5')).toThrow();
    expect(() => sum(5, '5')).toThrow('parameters must be numbers');
  });
});