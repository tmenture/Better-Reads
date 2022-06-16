const router = require('express').Router();
const { Book } = require('../../models');
const withAuth = require('../../utils/auth');

router.post('/', withAuth, (req, res) => {
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

router.delete('/:id', withAuth, (req, res) => {
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

module.exports = router;