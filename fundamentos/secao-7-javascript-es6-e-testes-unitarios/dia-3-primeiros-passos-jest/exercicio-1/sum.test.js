const sum = require('./sum');

describe('Exercício 1', () => {
  test('Soma de 4 + 5 é igual a nove 9', () => {
    expect(0).toBe(sum(0, 0));
  });

  test('Soma de 4 + 5 é igual a nove 9', () => {
    expect(9).toBe(sum(4, 5));
  });

  test('Tratamento de tipo number', () => {
    expect(() => sum(5, '7')).toThrow('parameters must be numbers');
  });
});