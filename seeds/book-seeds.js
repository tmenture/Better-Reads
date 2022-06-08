const { Book } = require('../models');

const bookdata = [
  {
    title: "The Bible",
    author: 'God',
  },
  {
    title: "Harry Potter",
    author: 'J.K. Rowling',
  },
];

const seedBooks = () => Book.bulkCreate(bookdata);

module.exports = seedBooks;