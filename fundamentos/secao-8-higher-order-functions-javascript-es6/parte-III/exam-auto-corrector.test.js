const examAutoCorrector = require('./exam-auto-corrector');
const array1 = ['a', 'b'];

describe('Testa função examCorrector', () => {
  it('Testa se a função examCorrector retorna um number', () => {
    expect(typeof examAutoCorrector.examCorrector(array1, array1, examAutoCorrector.autoCorrector)). toBe('number')
  })
  it('Testa se a função examCorrector é uma função', () => {
    expect(typeof examAutoCorrector.examCorrector). toBe('function')
  })
});

describe('Testa função autoCorrector', () => {
  it('Testa se a função autoCorrector retorna um number', () => {
    expect(typeof examAutoCorrector.autoCorrector(['a'], ['a'],)).toBe('number')
  })
  it('Testa se a função autoCorrector é uma função', () => {
    expect(typeof examAutoCorrector.autoCorrector).toBe('function')
  })
  it('Testa se a função autoCorrector ao receber dois arrays[2] iguais retorna 2', () => {
    expect(examAutoCorrector.examCorrector(array1, array1, examAutoCorrector.autoCorrector)).toBe(2)
  })
  it('Testa se a função autoCorrector ao receber dois arrays[2] diferente retorna 0.5', () => {
    expect(examAutoCorrector.examCorrector(array1, ['a', 'a'], examAutoCorrector.autoCorrector)).toBe(0.5)
  })
  it('Testa se a função autoCorrector ao receber dois arrays[2] diferente um com valor "N.A" retorna 1', () => {
    expect(examAutoCorrector.examCorrector(array1, ['a', 'N.A'], examAutoCorrector.autoCorrector)).toBe(1)
  })
});