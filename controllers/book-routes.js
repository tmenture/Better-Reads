const router = require('express').Router();

router.get("/", (req, res) => {
    res.render("search-books")
})

module.exports = router;