const { Vote } = require('../models');

const votedata = [
  {
    user_id: 1,
    review_id: 2
  },
  {
    user_id: 2,
    review_id: 1
  }
];

const seedVotes = () => Vote.bulkCreate(votedata);

module.exports = seedVotes;