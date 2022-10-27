const books = [
  {
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    genre: 'Fantasia',
    author: {
      name: 'George R. R. Martin',
      birthYear: 1948,
    },
    releaseYear: 1991,
  },
  {
    id: 2,
    name: 'O Senhor dos Anéis',
    genre: 'Fantasia',
    author: {
      name: 'J. R. R. Tolkien',
      birthYear: 1892,
    },
    releaseYear: 1954,
  },
  {
    id: 3,
    name: 'Fundação',
    genre: 'Ficção Científica',
    author: {
      name: 'Isaac Asimov',
      birthYear: 1920,
    },
    releaseYear: 1951,
  },
  {
    id: 4,
    name: 'Duna',
    genre: 'Ficção Científica',
    author: {
      name: 'Frank Herbert',
      birthYear: 1920,
    },
    releaseYear: 1965,
  },
  {
    id: 5,
    name: 'A Coisa',
    genre: 'Terror',
    author: {
      name: 'Stephen King',
      birthYear: 1947,
    },
    releaseYear: 1986,
  },
  {
    id: 6,
    name: 'O Chamado de Cthulhu',
    genre: 'Terror',
    author: {
      name: 'H. P. Lovecraft',
      birthYear: 1890,
    },
    releaseYear: 1928,
  },
];

// Adicione o código do exercício aqui:

const authorWith3DotsOnName = (array) => array.map(element => element.author.name);

let authorsName = authorWith3DotsOnName(books).map(book => book.split(' '));

let name3Dot = () => {
  let nameOf3Dots
  authorsName.forEach((book) => {
    if(book[0].endsWith('.') && book[1].endsWith('.') && book[2].endsWith('.')) {
      nameOf3Dots = book.toString().replace(/,/g, ' ');
    }
  });
  return nameOf3Dots;
}

let nameOfBook = (books) => {
  let nameOfBook;
  books.forEach( (book) => {
    if(book.author.name === name3Dot()) {
      nameOfBook = book.name;
    }
  } )
  return nameOfBook;
}

console.log(nameOfBook(books));
