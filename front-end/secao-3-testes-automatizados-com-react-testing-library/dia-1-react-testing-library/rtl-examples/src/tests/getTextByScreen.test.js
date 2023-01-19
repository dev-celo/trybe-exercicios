// App.test.js
import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../App';
import userEvent from '@testing-library/user-event';

beforeEach(() => {
  render(<App />);
}) 

describe('Testando se ao clicar na tela o nome é impresso na mesma', () => {
  it('Verificando se existe o campo Email.', () => {
    const inputEmail = screen.getByLabelText('Email');
    expect(inputEmail).toBeInTheDocument();
    expect(inputEmail).toHaveProperty('type', 'email');
  });
  
  it('Verificando se existem dois botão', () => {
    const btn = screen.getAllByRole('button');
    expect(btn).toHaveLength(2);
  });
  
  it('Verificando se o botão e o campo email estão funcionando.', () => {
    const EMAIL_USER = 'email@email.com';

    const inputEmail = screen.getByTestId('email');
    const buttonSend = screen.getByTestId('id-send');
    expect(inputEmail).toBeInTheDocument();
    expect(buttonSend).toBeInTheDocument();

    const textEmail = screen.getByTestId('id-email-user');
    expect(textEmail).toBeInTheDocument();
    expect(textEmail).toHaveTextContent('Valor:')
    
    userEvent.type(inputEmail, 'marcelo@teste.com');
    userEvent.click(buttonSend);

    expect(textEmail).toHaveTextContent('Valor: marcelo@teste.com');
  });
});  

