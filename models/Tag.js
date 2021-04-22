// Import Model, DataTypes from sequelize library
const { Model, DataTypes } = require('sequelize');

// Imort database connection
const sequelize = require('../config/connection.js');

// Create Tag class by extending sequelize Model class
class Tag extends Model {}

// Define fields and roles for Tag model
Tag.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    tag_name: {
      type: DataTypes.STRING,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'tag',
  }
);

module.exports = Tag;
