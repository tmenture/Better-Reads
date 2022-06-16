const router = require('express').Router();
const axios = require('axios');
const { Book, User, Review } = require('../../models');
const withAuth = require('../../utils/auth');

router.get('/', (req, res) => {
    Book.findAll({
        attributes: [
            'id',
            'title',
            'author',
            [sequelize.literal('(SELECT COUNT(*) FROM vote WHERE review.id = vote.post_id)'), 'vote_count']
        ],
        include: [
            {
                model: Review,
                attributes: ['id', 'title', 'review_content', 'user_id', 'book_id'],
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
    }).then(dbBookData => res.json(dbBookData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

router.get('/:id', (req, res) => {
    Book.findOne({
        where: {
            id: req.params.id
        },
        attributes: [
            'id',
            'title',
            'author'
        ],
        include: [
            {
                model: Review,
                attributes: ['id', 'title', 'review_content', 'user_id', 'book_id'],
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
    }).then(dbBookData => {
        if (!dbBookData) {
            res.status(404).json({ message: 'No book found with this id' });
            return;
        }
        res.json(dbBookData);
    }).catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

router.post('/dashboard', withAuth, (req, res) => {
    Book.create({
        id: req.body.id,
        title: req.body.title,
        author: req.body.author
    }).then(dbBookData => res.json(dbBookData)) 
    .catch(err => {
        console.log(err);
        res.status(400).json(err);
    });
});

router.delete('/dashboard/:id', withAuth, (req, res) => {
    Book.destroy({
        where: {
            id: req.params.id
        }
    }).then(dbBookData => {
        if (!dbBookData) {
            res.status(404).json({ message: 'No book found with this id' });
            return;
        }
        res.json(dbCommentData);
    }).catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

module.exports = axios;