'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Towers extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Towers.init({
    name: DataTypes.STRING,
    location: DataTypes.STRING,
    numberOfFloors: DataTypes.INTEGER,
    numberOfOffices: DataTypes.INTEGER,
    latitude: DataTypes.STRING,
    longitude: DataTypes.STRING,
    rating: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Towers',
  });
  return Towers;
};
