const { Review } = require('../models');

const reviewdata = [

];

const seedReviews = () => Review.bulkCreate(reviewdata);

module.exports = seedReviews;