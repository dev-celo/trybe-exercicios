const { BooksService } = require('../service');

const getAll = async (_req, res) => {
  const result = await BooksService.getAll();
  return res.status(200).json(result);
}

const getById = async (req, res) => {
  try {
    const { id } = req.params;
    const book = await BooksService.getById(id);
    if (!book) return res.status(404).json({ message: 'Book not found' });
    return res.status(200).json(book);
  } catch (err) {
    return res.status(400).json(err.message);
  }
}

const create = async (req, res) => {
  try {
    const { title, author, pageQuantity } = req.body;
    const user = await BooksService.create({ title, author, pageQuantity });
    return res.status(201).json(user);
  } catch (err) {
    return res.status(400).json(err.message);
  }
}

const update = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, author, pageQuantity } = req.body;

    const bookUpdated = await BooksService.update(id, { title, author, pageQuantity });

    if (!bookUpdated) return res.status(404).json({ message: 'Book not found' });
    return res.status(201).json({ message: 'Book updated' });
  } catch (err) {
    return res.status(400).json(err.message);
  }
}

module.exports = { getAll, getById, create, update }