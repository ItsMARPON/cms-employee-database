const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Departments extends Model {}

Departments.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING(30),
      allowNull: false,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "departments",
  }
);

module.exports = Departments;
