const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Roles extends Model {}

Roles.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: DataTypes.STRING(30),
      allowNull: false,
    },
    salary: {
      type: DataTypes.DECIMAL,
      allowNull: false,
    },
    department_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "departments",
        key: "id",
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "roles",
  }
);

module.exports = Roles;
