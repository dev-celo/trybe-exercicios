const sortAndCheck = require('./sort');

// Desenvolva uma HOF que retorna o resultado de um sorteio. Esta HOF irá gerar um número aleatório entre 1 e 5 recebendo como parâmetros o número apostado e uma função que checa se o número apostado é igual ao número sorteado. O retorno da sua HOF deve ser uma string (Ex: “Tente novamente” ou “Parabéns você ganhou”).

describe('Testa função sortNumber', () => {
  it('Testa se a função sortNumber retorna uma string', () => {
    expect(typeof sortAndCheck.sortNumber()).toBe('string')
  })
  it('Testa se a função sortNumber é uma função', () => {
    expect(typeof sortAndCheck.sortNumber).toBe('function')
  })
});
describe('Testa função checkNumber', () => {
  it('Testa se a função checkNumber retorna uma string', () => {
    expect(typeof sortAndCheck.checkNumber()).toBe('string')
  })
  it('Testa se a função checkNumber tem o comportamento esperado', () => {
    expect(sortAndCheck.checkNumber(5, 5)).toBe('Parabéns você ganhou')
    expect(sortAndCheck.checkNumber(5, 6)).toBe('Tente novamente')
  })
});