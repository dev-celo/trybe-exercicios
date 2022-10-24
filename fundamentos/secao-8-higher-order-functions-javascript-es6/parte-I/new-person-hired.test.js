const newPersonHired = require('./new-person-hired');

describe('Testa função new-person-hired', () => {
  it('Testa se a função retorna true', () => {
    expect(newPersonHired()). toBe(true)
  })
});