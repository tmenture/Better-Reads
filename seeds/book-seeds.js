const { Book } = require('../models');

const bookdata = [
    {
        title: "a Title",
        author: "a author"
    }
];

const seedBooks = () => Book.bulkCreate(bookdata);

module.exports = seedBooks;