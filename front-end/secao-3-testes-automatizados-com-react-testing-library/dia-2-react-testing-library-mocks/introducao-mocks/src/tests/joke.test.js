import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../App';

afterEach(() => jest.clearAllMocks());

describe('Testando fetch de duas maneiras:', () => {
  it('fetches a joke with spyOn', async () => {
    const joke = {
      id: '7h3oGtrOfxc',
      joke: 'Whiteboards ... are remarkable.',
      status: 200,
    };
  
    jest.spyOn(global, 'fetch');
    global.fetch.mockResolvedValue({
      json: jest.fn().mockResolvedValue(joke),
    });
    
  
    render(<App />);
  
    const renderedJoke = await screen.findByText('Whiteboards ... are remarkable.');
    
    expect(renderedJoke).toBeInTheDocument();
    expect(global.fetch).toHaveBeenCalledTimes(1);
    expect(global.fetch).toHaveBeenCalledWith(
      'https://icanhazdadjoke.com/',
      { headers: { Accept: 'application/json' } },
    );
  });

  it('fetches a joke whith fn', async () => {
    const joke = {
      id: '7h3oGtrOfxc',
      joke: 'Whiteboards ... are remarkable.',
      status: 200,
    };
  
    // Outra forma de mock do fetch:
    global.fetch = jest.fn(() => Promise.resolve({
      json: () => Promise.resolve(joke),
    }));
  
    render(<App />);
    const renderedJoke = await screen.findByText('Whiteboards ... are remarkable.');
    expect(renderedJoke).toBeInTheDocument();
    expect(global.fetch).toHaveBeenCalledTimes(1);
    expect(global.fetch).toHaveBeenCalledWith('https://icanhazdadjoke.com/', { headers: { Accept: 'application/json' } });
  });
});

