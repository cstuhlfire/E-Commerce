// Import Model, DataTypes from sequelize library
const { Model, DataTypes } = require('sequelize');

// Import the database connection
const sequelize = require('../config/connection');

// Create ProductTag class by extending sequelize Model class
class ProductTag extends Model {}

// Setup fields and rules for ProductTage model
ProductTag.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    product_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'product',
        key: 'id',
        unique: false,
      },
    },
    tag_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'tag',
        key: 'id',
        unique: false,
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product_tag',
  }
);

module.exports = ProductTag;
