const newPersonHired = require('./new-person-hired');

describe('Testa função person', () => {
  it('Testa se a função person retorna um objeto', () => {
    expect(typeof newPersonHired.person()).toBe('object');
  })
  it('Testa se a função person retorna um objeto com as chaves nome e email caso preenchida', () => {
    expect(newPersonHired.person('Marcelo Henrique')). toEqual({ nome: 'Marcelo Henrique', email: ' marcelo_henrique@gmail.com' });
  })
});

describe('Testa função newEmployees', () => {
  it('Testa se a função newEmployees retorna um objeto', () => {
    expect(typeof newPersonHired.newEmployees(newPersonHired.person)).toBe('object');
  })
  it('Testa se a função newEmployees retorna um objeto com as chaves id, nome e email caso preenchida', () => {
    expect(newPersonHired.newEmployees(newPersonHired.person)).toEqual({
      id1: { nome: 'Pedro Guerra', email: ' pedro_guerra@gmail.com' },
      id2: { nome: 'Luiza Drumond', email: ' luiza_drumond@gmail.com' },
      id3: { nome: 'Carla Paiva', email: ' carla_paiva@gmail.com' }
    });
  })
});