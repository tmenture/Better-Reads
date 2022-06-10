const router = require('express').Router();
const sequelize = require('../config/connection');
const { Review, User, Comment, Book } = require('../models');
const withAuth = require('../utils/auth');

// get all review for dashboard
router.get('/', withAuth, (req, res) => {
  Review.findAll({
    where: {
      user_id: req.session.user_id
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
      const reviews = dbReviewData.map(review => review.get({ plain: true }));
      res.render('dashboard', { reviews, loggedIn: true });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get('/edit/:id', withAuth, (req, res) => {
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
        
    res.render('edit-review', {
      review,
      loggedIn: true
      });
    })
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});
      
router.get('/create/', withAuth, (req, res) => {
  Review.findAll({
    where: {
      // use the ID from the session
      user_id: req.session.user_id
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
      // serialize data before passing to template
      const reviews = dbReviewData.map(review => review.get({ plain: true }));
      res.render('create-review', { reviews, loggedIn: true });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

    
module.exports = router;


