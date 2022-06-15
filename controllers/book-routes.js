const router = require('express').Router();
const sequelize = require('../config/connection');
const { Review, Book } = require('../models');
const withAuth = require('../utils/auth');

router.get("/", (req, res) => {
  console.log("rendering");
  Book.findAll({
    attributes: [
     //'id',
      'title',
      'author'
  ],
  include: [
    {
      model: Review,
      attributes: ['id']
    }
    ]
})
  .then(dbReviewData => {
    const books = dbReviewData.map(book => book.get({ plain: true }));
    res.render('search-books', {books, loggedIn: true });
  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});


router.post('/', withAuth, (req, res) => {
  console.log("adding to book");
    Book.create({
      title: req.body.title,
      author: req.body.author
    })
      .then(dbBookData => res.json(dbBookData))
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  })
    
 module.exports = router;