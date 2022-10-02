# Exercícios - agora, a prática
🚀 Se liga nesse foguete!

Os exercícios destacados com 🚀 são os fundamentais pra você ir bem no projeto! Todos os exercícios vão contribuir com sua formação, mas fique de olho nesses! 👀

Agora você vai fazer alguns exercícios.

## Parte I
🚀 Altere o tipo das variáveis (var) para let ou const para que respeitem o escopo em que foram declaradas.

🚀 Modifique a variável para que respeite o escopo onde está sendo declarada. Lembre-se: para que a variável respeite o escopo, ela não deve ser acessível fora do escopo em que esteja sendo declarada.
Copie o código abaixo e rode-o para verificar sua saída:

🚀 Altere o valor das propriedades do objeto, para que respeite as características da variável do tipo const;
Copie o código abaixo e rode-o para verificar sua saída:

Copiar
    // Executando esse código iremos receber um erro `TypeError: Assignment to constant variable.`
    const pessoa = {
      nome: 'Henri',
      idade: 20
    }
    pessoa = {
      nome: 'Luna',
      idade: 19
    } // Altere essa estrutura para corrigir o erro.
    console.log('Nome:', pessoa.nome);
    console.log('Idade:', pessoa.idade);
    
🚀 Modifique a variável para que não ocorra Erro;
🚀 Modifique a estrutura das funções a seguir para que elas sejam arrow functions;

🚀 Transforme a função numeroAleatorio em uma arrow function;
Copie o código abaixo:

Copiar
    function numeroAleatorio() {
      return Math.random()
    }
    console.log(numeroAleatorio());
Solução:

Copiar
    const numeroAleatorio = () => Math.random()

    console.log(numeroAleatorio());
🚀 Transforme a função hello em uma arrow function;
Copie o código abaixo:

Copiar
    function hello(nome) {
      return `Olá, ${nome}!`
    }
    let nome = 'Ivan';
    console.log(hello(nome));
🚀 Transforme a função nomeCompleto em uma arrow function;
Copie o código abaixo:

Copiar
    function nomeCompleto(nome, sobrenome) {
      return `${nome} ${sobrenome}`
    }
    let nome = 'Ivan';
    let sobrenome = 'Pires';
    console.log(nomeCompleto(nome, sobrenome));
🚀 Altere a expressão if/else utilizando ternary operator;

Copie o código abaixo:

Copiar
    let speed = 90;
    const speedCar = (speed) => {
      if (speed >= 120) {
        return `Você ultrapassou o limite de velocidade`;
      } else {
        return `Você está na velocidade permitida`;
      }
    };
    console.log(speedCar(speed));


## Parte II

Abaixo, você verá algumas especificações de algoritmos para desenvolver. É fundamental que você utilize o que aprendeu sobre let, const, arrow functions, template literals e ternary operator.

### Crie uma função que ligue e desligue um motor de um carro.

#### Crie uma variável para armazenar o valor de status do seu motor (lembre-se de armazenar o tipo de variável da forma correta);

#### Crie a função ligarDesligar utilizando arrow functions. Ela não receberá nenhum parâmetro;

#### Crie a lógica para ligar e desligar o motor (a lógica deverá utilizar uma condicional para ligar e desligar o motor);

#### Imprima no terminal “O motor está ligado“ e “O motor está desligado“ (lembre-se de utilizar o template literals nesse momento).

#### Bônus (opcional): tente fazer o mesmo exercício utilizando ternary operator.


### 🚀 Crie uma função que calcule a área de um círculo.

Na matemática, a fórmula para calcular a área de um círculo é: área = PI vezes o raio elevado ao quadrado.

Com base nessa informação:

#### Crie a função circleArea, que recebe o valor do raio como parâmetro, utilizando arrow functions;

#### Crie uma variável para armazenar o valor de PI (lembre-se de armazenar o tipo de variável da forma correta);

#### Crie a lógica para retornar a área do círculo;

Imprima no terminal “Essa é a área do círculo: resultado da função“ (lembre-se de utilizar o template literals nesse momento).

Exemplo de retorno:

Parâmetro: 3

Retorno: Essa é a área do círculo: 28.259999999999998

Parâmetro: 5

Retorno: Essa é a área do círculo: 78.5

#### 🚀 Crie uma função que receba uma frase como parâmetro e retorne a maior palavra da frase.

Exemplo:

Copiar
  longestWord('Antônio foi no banheiro e não sabemos o que aconteceu') // retorna 'aconteceu'
De olho na dica 👀: Nesse exercício, será necessário utilizar os conhecimentos sobre array, método split e loop for/of.

Bônus (opcional): Tente fazer o mesmo exercício utilizando o método array.sort().