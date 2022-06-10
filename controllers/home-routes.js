const router = require('express').Router();
const sequelize = require('../config/connection');
const { Review, User, Comment, Book } = require('../models');

//get all reviews
router.get('/', (req, res) => {
  console.log(req.session);

  Review.findAll({
    attributes: [
      'id',
      'title',
      'created_at',
      'review_content'
    ],
    include: [
      {
        model: Comment,
        attributes: ['id', 'comment_text', 'review_id', 'user_id', 'created_at'],
        include: {
          model: User,
          attributes: ['username']
        }
      },
      {
        model: User,
        attributes: ['username']
      },
      {
        model: Book,
        attributes: ['title', 'author']
      }
    ]
  })
    .then(dbReviewData => {
      const reviews = dbReviewData.map(review => review.get({ plain: true }));
      res.render('homepage', {
        reviews,
        loggedIn: req.session.loggedIn
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

// get single review
router.get('/review/:id', (req, res) => {
  Review.findOne({
    where: {
      id: req.params.id
    },
    attributes: [
      'id',
      'title',
      'created_at',
      'review_content'
    ],
    include: [
      {
        model: Comment,
        attributes: ['id', 'comment_text', 'review_id', 'user_id', 'created_at'],
        include: {
          model: User,
          attributes: ['username']
        }
      },
      {
        model: User,
        attributes: ['username']
      },
      {
        model: Book,
        attributes: ['title', 'author']
      }
    ]
  })
    .then(dbReviewData => {
      if (!dbReviewData) {
        res.status(404).json({ message: 'No review found with this id' });
        return;
      }

      const review = dbReviewData.get({ plain: true });

      res.render('single-review', {
        review,
        loggedIn: req.session.loggedIn
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }

  res.render('login');
});

router.get('/signup', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }
  
  res.render('signup');
});

module.exports = router;


