const Review = require('./Review');
const User = require('./User');
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
  through: 'user_id',
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
});

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
});

module.exports = { User, Review, Comment, Book };