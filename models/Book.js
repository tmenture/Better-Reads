const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Book extends Model {}
 
Book.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    author: {
      type: DataTypes.STRING,
      allowNull: false
    },
    saved_book: {
      type: DataTypes.STRING,
      allowNull: false
    },
    rating: {
      type: DataTypes.TINYINT,
      allowNull: true
    }
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'book'
  }
);

module.exports = Book;