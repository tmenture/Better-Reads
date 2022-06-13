const { Book } = require('../models');

const bookdata = [
];

const seedBooks = () => Book.bulkCreate(bookdata);

module.exports = seedBooks;