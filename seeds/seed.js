const sequelize = require('../config/connection');
const {Departments, Employees, Roles} = require('../models');

const employeesSeedData = require("./employeeData.json");

const seedDatabase = async () => {
    await sequelize.sync({force: true});

    const employees = await Employees.bulkCreate(employeesSeedData, {
        individualHooks: true,
        returning: true,
    });
 process.exit(0);
};


seedDatabase();