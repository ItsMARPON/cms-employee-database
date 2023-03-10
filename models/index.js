const Employees = require('./employees');
const Roles = require('./roles');
const Departments = require('./departments');

Employees.hasOne(Roles, {
  foreignKey: 'role_id',
  onDelete: 'CASCADE',
});

Roles.belongsTo(Employees, {
  foreignKey: 'role_id',
});

Roles.belongsTo(Departments, {
  foreignKey: 'role_id',
});

module.exports = { Employees, Roles, Departments };
