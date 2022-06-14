const router = require('express').Router();
const sequelize = require('../config/connection');
const withAuth = require('../utils/auth');
const axios = require('axios')

router.get("/", (req, res) => {
    const api = ("https://www.googleapis.com/books/v1/volumes?q=" + req.query.book)
    console.log(api)
    axios.get(api).then(data=> { 
    res.render("search-books", {
        books: data.data.items
         }
    )
    console.log(data.data.items)
})

})

module.exports = router;
