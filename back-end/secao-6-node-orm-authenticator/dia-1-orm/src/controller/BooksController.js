const { BooksService } = require('../service');

const getAll = async (_req, res) => {
  const result = await BooksService.getAll();
  res.status(200).json(result)
}

module.exports = { getAll }