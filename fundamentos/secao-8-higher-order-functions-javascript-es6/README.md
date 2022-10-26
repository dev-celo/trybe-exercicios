# Exercícios - agora, a prática
## I - Nova pessoa contratada
- [x] Crie uma função que retorne um objeto no formato { nomeCompleto, email } representando uma nova pessoa contratada. Passe sua função como parâmetro da HOF newEmployees para criar cada pessoa contratada em seu respectivo id. A sua função deve receber como parâmetro o nome completo da pessoa funcionária e, a partir dele, gerar automaticamente um email no formato nome_da_pessoa@trybe.com.


## II - Sorteador de loteria
- [x] Desenvolva uma HOF que retorna o resultado de um sorteio. Esta HOF irá gerar um número aleatório entre 1 e 5 recebendo como parâmetros o número apostado e uma função que checa se o número apostado é igual ao número sorteado. O retorno da sua HOF deve ser uma string (Ex: “Tente novamente” ou “Parabéns você ganhou”).

## III - Corretor automático de exame

- [x] Crie uma HOF que receberá três parâmetros:

- [x] O primeiro será um array de respostas corretas (soluções);

- [x] O segundo será um array contendo as respostas fornecidas por uma pessoa estudante;

- [x] O terceiro é uma função que compara os dois arrays e então dá uma pontuação baseada nos acertos. Para isso, essa função usará os seguintes critérios:

1. Uma resposta correta adiciona 1 ponto à pontuação final;

2. A ausência de uma resposta não altera a pontuação (quando for “N.A”);

3. Uma resposta incorreta reduz a pontuação final em 0.5 ponto.

4. Ao final, a HOF deve retornar o total de pontos obtidos através das respostas fornecidas pela pessoa estudante. Utilize os seguintes arrays:
