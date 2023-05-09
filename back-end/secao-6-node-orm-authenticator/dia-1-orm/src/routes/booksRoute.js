const express = require('express');

const booksRoute = express.Router();

const { booksController } = require('../controller');

booksRoute.get('/', booksController.getAll);

module.exports = booksRoute;