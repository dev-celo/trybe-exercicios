# BOOKS API

Uma API simples construída com sequelize utilizando a arquitetura de software MSC - model, service e controller. Com a funcionalidade de listar todos os livros, listar um livro pelo id, criar um novo livro, atualizar um livro existente e deletar.

## 🚀 Começando

Essas instruções permitirão que você obtenha uma cópia do projeto em operação na sua máquina local para fins de desenvolvimento e teste.

Clone o projeto com o seguinte comado:
`git clone git@github.com:dev-celo/trybe-exercicios.git`

Entre no repositório e vá até ``trybe-exercicios/back-end/secao-6-node-orm-authenticator/dia-1-orm``

Para executar o nodemon: `npm run dev`

Rotas para acesso:
Lista todos os produtos:
###### get `http://localhost:3000/books/`

Lista um produto em específico pelo id
###### get `http://localhost:3000/books/1`

Cria um produto
###### post `http://localhost:3000/books/`
body da requisição:
{
  "title": "title",
  "author": "author",
  "pageQuantity": "pageQuantity"
}

### 📋 Pré-requisitos

Instale as dependências dos seguintes pacotes:
`Express`
`mysql2`
`nodemon`
`sequelize`

com o seguinte comando

```
npm i
```

### 🔧 Instalação

Você deve executar para ter um ambiente de desenvolvimento em execução:

Iniciando nodemon

```
npm run dev
```

faça as requisições para rotas com Thunder client por exemplo

Vá atéo thunder client e coloque o
```
método GET
```
Insira a seguinte url
```
http://localhost:3000/books/

```

E receberá a lista de livros cadastrados na API.

## 🛠️ Construído com

Mencione as ferramentas que você usou para criar seu projeto

* [Express](https://expressjs.com/pt-br/) - O framework web usado
* [Sequelize](https://sequelize.org/) - DB
* [Arquitetura MSC](https://dev.to/gabrielhsilvestre/controller-e-service-uma-breve-introducao-24hk)



## 📌 Versão

Nós usamos [SemVer](http://semver.org/) para controle de versão. Para as versões disponíveis, observe as [tags neste repositório](https://github.com/suas/tags/do/projeto). 

## ✒️ Autores

Mencione todos aqueles que ajudaram a levantar o projeto desde o seu início

* **Marcelo Silva** - *Trabalho Inicial* - [Marcelo Silva](https://github.com/dev-celo)
* **Marcelo Silva** - *Documentação* - [Marcelo Silva](https://github.com/dev-celo)

⌨️ com ❤️ por [Marcelo Silva](https://github.com/dev-celo) 😊