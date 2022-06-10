const { Review } = require('../models');

const reviewdata = [
  {
    title: 'Donec posuere metus vitae ipsum.',
    review_content: 'Morbi non quam nec dui luctus rutrum.',
    user_id: 1
  },
  {
    title: 'Morbi non quam nec dui luctus rutrum.',
    review_content: 'Morbi non quam nec dui luctus rutrum.',
    user_id: 2
  },
];

const seedReviews = () => Review.bulkCreate(reviewdata);

module.exports = seedReviews;
