const myFizzBuzz = require('./FizzBuzz');

describe('Testa função myFizzBuzz', () => {
  test('Deve retornar FizzBuzz', () => {
    expect(myFizzBuzz(15)).toBe('fizzbuzz');
  });
  test('Deve retornar Fizz', () => {
    expect(myFizzBuzz(21)).toBe('fizz');
  });
  test('Deve retornar Buzz', () => {
    expect(myFizzBuzz(25)).toBe('buzz');
  });
  test('Tratar números não divisíveis por 3 e 5 ou strings', () => {
    expect(myFizzBuzz(1)).toBe(1);
    expect(myFizzBuzz('5')).toBe(false);
  });
});