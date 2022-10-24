const examAutoCorrector = require('./exam-auto-corrector');

describe('Testa função exam-auto-corrector', () => {
  it('Testa se a função retorna true', () => {
    expect(examAutoCorrector()). toBe(true)
  })
});