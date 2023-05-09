const express = require('express');

const booksRoute = express.Router();

const { booksController } = require('../controller');

booksRoute.get('/', booksController.getAll);

booksRoute.get('/:id', booksController.getById);

booksRoute.post('/', booksController.create);

booksRoute.put('/:id', booksController.update);

module.exports = booksRoute;