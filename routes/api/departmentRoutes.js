const router = require('express').Router();
const {Departments, Employees, Roles} = require('../../models');

// GET all department data
router.get('/', async (req, res) => {
    try {
      const allDepartmentData = await Departments.findAll({
        include: [{ model: Departments }, {model: Employees}, {model: Roles}],
      });
      res.status(200).json(allDepartmentData);
    } catch (err) {
      res.status(500).json(err);
    }
  });
  
  // GET a single department
  router.get('/:id', async (req, res) => {
    try {
      const singleDepartmentData = await Departments.findByPk(req.params.id, {
        include: [{ model: Departments }, { model: Employees }, {model: Roles}],
      });
  
      if (!allDepartmentData) {
        res.status(404).json({ message: 'No Department Data found with that id!' });
        return;
      }
  
      res.status(200).json(singleDepartmentData);
    } catch (err) {
      res.status(500).json(err);
    }
  });
  
//   CREATE a Department
  router.post('/', async (req, res) => {
    try {
      const departmentData = await Departments.create({
        Departments.id: req.body.department.id,
      });
      res.status(200).json(departmentData);
    } catch (err) {
      res.status(400).json(err);
    }
  });
  
  module.exports = router;