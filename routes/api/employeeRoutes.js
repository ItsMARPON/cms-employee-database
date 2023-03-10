const router = require('express').Router();
const {Departments, Employees, Roles} = require('../../models');


// GET all employee data
router.get('/', async (req, res) => {
    try {
      const allEmployeeData = await Employees.findAll({
        include: [{ model: Departments }, {model: Employees}, {model: Roles}],
      });
      res.status(200).json(allEmployeeData);
    } catch (err) {
      res.status(500).json(err);
    }
  });
  
  // GET a single employee
  router.get('/:id', async (req, res) => {
    try {
      const singleEmployeeData = await Employees.findByPk(req.params.id, {
        include: [{ model: Departments }, { model: Employees }, {model: Roles}],
      });
  
      if (!allEmployeeData) {
        res.status(404).json({ message: 'No Employee Data found with that id!' });
        return;
      }
  
      res.status(200).json(singleEmployeeData);
    } catch (err) {
      res.status(500).json(err);
    }
  });
  
  // CREATE an employee
  router.post('/', async (req, res) => {
    try {
      const employeeData = await Employees.create({
        role_id: req.body.role_id,
      });
      res.status(200).json(employeeData);
    } catch (err) {
      res.status(400).json(err);
    }
  });
  
//   // DELETE an employee
  router.delete('/:id', async (req, res) => {
    try {
      const employeeData = await Employees.destroy({
        where: {
          id: req.params.id,
        },
      });
  
      if (!employeeData) {
        res.status(404).json({ message: 'No Employee Data found with that id!' });
        return;
      }
  
      res.status(200).json(employeeData);
    } catch (err) {
      res.status(500).json(err);
    }
  });
  
  module.exports = router;