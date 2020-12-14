'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Office extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Office.belongsTo(models.Towers, {
        foreignKey: 'towerId',
        onDelete: 'CASCADE'
      })
    }
  };
  Office.init({
    name: DataTypes.STRING,
    flatNo: DataTypes.INTEGER,
    blockName: DataTypes.STRING,
    description: DataTypes.TEXT,
    towerId: {
      type: DataTypes.INTEGER,
      onDelete: 'CASCADE',
      references: {
        model: 'Towers',
        key: 'id',
        as: 'towerId',
      }
    },
  }, {
    sequelize,
    modelName: 'Office',
  });
  return Office;
};
