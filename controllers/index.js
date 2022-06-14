const router = require('express').Router();

const apiRoutes = require('./api/');
const homeRoutes = require('./home-routes.js');
const dashboardRoutes = require('./dashboard-routes.js');
const searchRoutes = require('./search-routes');

router.use('/', homeRoutes);
router.use('/dashboard', dashboardRoutes);
//router.use('/book', bookRoutes);
router.use('/api', apiRoutes);
router.use('/search', searchRoutes);

router.use((req, res) => {
    res.status(404).end();
});

module.exports = router;