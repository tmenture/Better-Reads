const router = require('express').Router();
const sequelize = require('../../config/connection');
const { Review, User, Comment, Book} = require('../../models');
const withAuth = require('../../utils/auth');

// get all users
router.get('/', (req, res) => {
  console.log('======================');
  Review.findAll({
    attributes: [
      'id',
      'review_content',
      'title',
      'created_at',
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
      }
    ]
  })
    .then(dbReviewData => res.json(dbReviewtData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get('/:id', (req, res) => {
  Review.findOne({
    where: {
      id: req.params.id
    },
    attributes: [
      'id',
      'review_content',
      'title',
      'created_at',
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
      res.json(dbReviewData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.post('/', withAuth, (req, res) => {
  // expects {title: 'Taskmaster goes public!', reviewt_url: 'https://taskmaster.com/press', user_id: 1}
  Review.create({
    title: req.body.title,
    review_content: req.body.review_content,
    user_id: req.session.user_id
  })
    .then(dbReviewData => res.json(dbReviewData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.put('/:id', withAuth, (req, res) => {
  Review.update(
    {
      title: req.body.title,
      review_content: req.body.review_content
    },
    {
      where: {
        id: req.params.id
      }
    },
  )
    .then(dbReviewData => {
      if (!dbReviewData) {
        res.status(404).json({ message: 'No review found with this id' });
        return;
      }
      res.json(dbReviewtData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.delete('/:id', withAuth, (req, res) => {
  console.log('id', req.params.id);
  Review.destroy({
    where: {
      id: req.params.id
    }
  })
    .then(dbReviewData => {
      if (!dbReviewData) {
        res.status(404).json({ message: 'No review found with this id' });
        return;
      }
      res.json(dbReviewData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;