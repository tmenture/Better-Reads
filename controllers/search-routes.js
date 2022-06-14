const router = require('express').Router();
const sequelize = require('../config/connection');
const { Review, Book } = require('../models');
const withAuth = require('../utils/auth');

router.get("/", (req, res) => {
    res.render("search-books");
});




router.post("/", (req, res) => {
    res.render("search-books", {book_title: req.body.book_title, book_author: req.body.book_author, book_desc: req.body.book_desc} );
    console.log(req.body.book_title)
});

module.exports = router;

