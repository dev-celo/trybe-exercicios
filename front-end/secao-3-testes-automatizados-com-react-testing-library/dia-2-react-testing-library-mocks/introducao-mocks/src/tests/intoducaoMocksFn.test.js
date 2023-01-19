
describe('Testando funcção randomica com mock fn', () => {
  const retornaNumeroAleatorio = () => Math.floor(Math.random() * 100);
  
  const divisivelPorDois = () => (retornaNumeroAleatorio() % 2) === 0;
  test("#divisivelPorDois", () => {
    // testando se a função foi chamada
    const divisivelPorDois = jest
    .fn()
    .mockReturnValue('feriado')
    .mockReturnValueOnce('sexta-feira')
    .mockReturnValueOnce('sabado');
  
    expect(divisivelPorDois()).toBe('sexta-feira');
    expect(divisivelPorDois).toHaveBeenCalledTimes(1);
    
    expect(divisivelPorDois()).toBe('sabado');
    expect(divisivelPorDois).toHaveBeenCalledTimes(2);
    
    expect(divisivelPorDois()).toBe('feriado');
    expect(divisivelPorDois).toHaveBeenCalledTimes(3);
  });
});
