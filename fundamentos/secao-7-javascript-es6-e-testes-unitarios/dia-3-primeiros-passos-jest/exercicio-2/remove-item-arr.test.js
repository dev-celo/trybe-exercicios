const myRemove = require('./remove-item-arr');

describe('Testa função myRemove', () => {
  test('deve retornar um array removendo o item correto', () => {
    expect(myRemove([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
    expect(myRemove([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4]);
    expect(myRemove([1, 2, 3, 4], )).toEqual([1, 2, 3, 4]);
  });
});