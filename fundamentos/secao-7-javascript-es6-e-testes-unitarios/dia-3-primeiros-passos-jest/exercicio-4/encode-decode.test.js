const {encode, decode} = require('./encode-decode');

describe('Testa funções encode', () => {
  test('Testa se existe as funções encode', () => {
    expect(encode).toBeDefined();
    expect(typeof encode).toBe('function');
  });
  test('converte apenas a vogal "a" no número 1', () => {
    expect(encode('ana')).toEqual('1n1');
  });
  test('converte apenas  vogal "e" no número 2', () => {
    expect(encode('ele')).toEqual('2l2');
  });
  test('converte apenas a vogal "i" no número 3', () => {
    expect(encode('vixi')).toEqual('v3x3');
  });
  test('converte apenas a vogal "o" no número 4', () => {
    expect(encode('ovo')).toEqual('4v4');
  });
  test('converte apenas a vogal "u" no número 5', () => {
    expect(encode('um')).toEqual('5m');
  });
  test('checa se o retorno da função tem o mesmo número de caracteres', () => {
    expect(encode('devcelo').length).toEqual(7);
  });
});

describe('Testa funções decode', () => {
  test('Testa se existe as funções decode', () => {
    expect(decode).toBeDefined();
    expect(typeof decode).toBe('function');
  });
  test('converte apenas o número 1 na vogal "a"', () => {
    expect(decode('1n1')).toEqual('ana');
  });
  test('converte apenaso número 2 na vogal "e"', () => {
    expect(decode('2l2')).toEqual('ele');
  });
  test('converte apenas o número 3 na vogal "i"', () => {
    expect(decode('v3x3')).toEqual('vixi');
  });
  test('converte apenas o número 4 na vogal "o"', () => {
    expect(decode('4v4')).toEqual('ovo');
  });
  test('converte apenas o número 5 na vogal "u"', () => {
    expect(decode('5m')).toEqual('um');
  });
  test('checa se o retorno da função tem o mesmo número de caracteres', () => {
    expect(decode('d2vc2l4').length).toEqual(7);
  });
});

