const Review = require('./Review');
const User = require('./User');
const Vote = require('./Vote');
const Comment = require('./Comment');
const Book = require('./Book');

User.hasMany(Review, {
  foreignKey: 'user_id'
});

Review.belongsTo(User, {
  foreignKey: 'user_id',
  onDelete: 'SET NULL'
});

User.belongsToMany(Review, {
  through: Vote,
  as: 'voted_posts',

  foreignKey: 'user_id',
  onDelete: 'SET NULL'
});

Review.belongsToMany(User, {
  through: Vote,
  as: 'voted_posts',
  foreignKey: 'review_id',
  onDelete: 'SET NULL'
});


Vote.belongsTo(User, {
  foreignKey: 'user_id',
  onDelete: 'SET NULL'
});

Vote.belongsTo(Review, {
  foreignKey: 'review_id',
  onDelete: 'SET NULL'
});

User.hasMany(Vote, {
  foreignKey: 'user_id'
});

Review.hasMany(Vote, {
  foreignKey: 'review_id'
});

Comment.belongsTo(User, {
  foreignKey: 'user_id',
  onDelete: 'SET NULL'
});

Comment.belongsTo(Review, {
  foreignKey: 'review_id',
  onDelete: 'SET NULL'
});

Review.belongsTo(Book, {
  foreignKey: 'book_id',
  onDelete: 'SET NULL'
})

User.hasMany(Comment, {
  foreignKey: 'user_id',
  onDelete: 'SET NULL'
});

Review.hasMany(Comment, {
  foreignKey: 'review_id'
});

Book.hasMany(Review, {
  foreignKey: 'book_id',
  onDelete: 'SET NULL'
})

module.exports = { User, Review, Vote, Comment, Book };