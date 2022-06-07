const router = require('express').Router();

const userRoutes = require('./user-routes');
const postRoutes = require('./revriew-routes');
const commentRoutes = require('./comment-routes');

router.use('/users', userRoutes);
router.use('/reviews', reviewRoutes);
router.use('/comments', commentRoutes);

module.exports = router;