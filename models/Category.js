// Import Model, DataTyples from sequelize library
const { Model, DataTypes } = require('sequelize');

// Import the database connection
const sequelize = require('../config/connection.js');

// Create Category class by extending sequelize Model class
class Category extends Model {}

// Setup fields and rules for Category model
Category.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    category_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'category',
  }
);

module.exports = Category;
