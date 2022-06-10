const { Review } = require('../models');

const reviewdata = [
  {
    title: "This book",
    review_content: 'Wow love this book',
    user_id: 1,
    book_id: 1
  },
  {
    title: 'Another Book',
    review_content: 'This book was fine',
    user_id: 2,
    book_id: 2
  },
];

const seedReviews = () => Review.bulkCreate(reviewdata);

module.exports = seedReviews;