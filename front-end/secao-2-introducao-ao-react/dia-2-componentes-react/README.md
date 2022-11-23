# Boas-vindas ao repositório do exercício Pokédex Components! 

# Requisitos
 
## 1. Crie o componente `<Pokedex />`

<details>
  <summary>Este componente deverá renderizar um título e uma <code>ul</code></summary>

  - Este componente deverá:

    - ser criado dentro da pasta `src/components`.

    - conter uma tag `h1` com o texto `Pokédex`.
  
    - conter uma tag `ul`. Por enquanto, essa lista estará vazia.

    - receber uma lista de Pokémon através da `prop` chamada `pokemonList`.
  
  - Ser renderizado dentro do `App.js`.
</details>

<details>
  <summary>💡dicas</summary>

  - Não esqueça de fazer as devidas validações com o `PropTypes`!

</details>

<details>
  <summary><strong>O que será verificado</strong></summary>

  - Será validado se:

    - uma tag `h1` com o texto `Pokédex` é renderizado dentro do componente `<Pokedex />`.
  
    - uma tag `ul` é renderizada dentro do componente `<Pokedex />`.
  
    - o componente `<Pokedex />` é renderizado dentro do `App.js`.

</details>

## 2. Crie o componente `<Pokemon />`

<details>
  <summary>Este componente deverá renderizar as informações de um pokémon</summary>
  
  - Ele deve ser criado dentro da pasta `src/components`.
  
  - Este componente deverá : 
    - receber uma `prop` chamada `pokemon`, que será um objeto com as informações de um Pokémon.

    - conter uma tag `li` que envolva todo o seu conteúdo.
  
  - Este componente deverá renderizar as seguintes informações (que estão dentro do objeto recebido via `props` chamada `pokemon`):

    - o nome do Pokémon;
    - o tipo do Pokémon;
    - o peso médio do Pokémon, acompanhado da unidade de medida usada. Por exemplo: `"20 kg"`;
    - a imagem do Pokémon.
    - Conter na imagem o atributo `alt` com o valor do nome do Pokémon.
    
  <details>
    <summary><strong>Estrutura do objeto Pokémon</strong></summary>

  ```js
  {
    id: 25,
    name: 'Pikachu',
    type: 'Electric',
    averageWeight: {
      value: 6.0,
      measurementUnit: 'kg',
    },
    image: 'https://cdn2.bulbagarden.net/upload/b/b2/Spr_5b_025_m.png',
    moreInfo: 'https://bulbapedia.bulbagarden.net/wiki/Pikachu_(Pok%C3%A9mon)',
  }
  ```

  </details>
</details>

<details>
  <summary>💡dicas</summary>

  - Abra o arquivo `src/data.js` e veja o nome das propriedades de cada pokémon, escolhendo assim os atributos que mais se adequam ao projeto. Verificar como receberemos um objeto, bem como o nome de suas chaves, e quais devemos utilizar para resolver nosso requisito, faz parte do dia-a-dia de pessoas programadoras. 😄

  - Não esqueça de fazer as devidas validações com o `PropTypes`!

</details>

<details>
  <summary><strong>O que será verificado</strong></summary>

  - Será verificado se o: 
  
    - componente possui a tag `li` envolvendo seu conteúdo.
  
    - nome do Pokémon passado via `props` é renderizado.
  
    - tipo do Pokémon passado via `props` é renderizado.
  
    - peso médio do Pokémon e a unidade de medida passados via `props` serão renderizados.
  
  - Será validado se a imagem do pokémon passado via `props` é renderizada.
  
  - Será validado se a imagem do pokémon possui o atributo `alt` com o nome do pokémon passado via `props`.
</details>

## 3. Renderize uma lista com as informações de cada Pokémon

<details>
  <summary>Renderize uma lista com as informações dos Pokémon dentro do componente <code>&lt;Pokedex /&gt;</code></summary>

  - Você encontrará a lista com as informações dos Pokémon no arquivo `src/data.js`.
  
  - Faça a importação do `src/data.js` no componente `App.js`.

  - O componente `<Pokedex/>` deve receber a lista de Pokémon por meio da `props` chamada `pokemonList`.

  - Cada Pokémon da lista deverá ser renderizado por um componente `Pokemon`. Passe as informações do Pokémon por meio da `props` que já existe nesse componente.
</details>

<details>
  <summary>💡dicas</summary>

  - Para garantir a renderização, independentemente se foi passado ou não uma `prop` para o componente, que tal conferir a documentação sobre as _[defaultProps](https://pt-br.reactjs.org/docs/typechecking-with-proptypes.html#default-prop-values)_?

  - Lembre-se de que, quando você está renderizando uma lista no React, é necessário adicionar um atributo `key` em cada elemento. Você pode usar o `id` do Pokémon como `key`.

  - Não esqueça de fazer as devidas validações com o `PropTypes`!

</details>

<details>
  <summary><strong>O que será verificado</strong></summary>

  - Se o componente `<Pokedex />` renderiza a quantidade correta de elementos.

  - Se todos os elementos da lista são renderizados.

</details>

# Exercício extra (esse não é testado pelo avaliador)

Estilize a aplicação adicionando classes que vão aprimorar seus componentes, de modo que cada conteúdo listado seja um card