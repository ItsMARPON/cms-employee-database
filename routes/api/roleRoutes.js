const router = require('express').Router();
const {Departments, Employees, Roles} = require('../../models');

// GET all Roles data
router.get('/', async (req, res) => {
    try {
      const allRoleData = await Roles.findAll({
        include: [{ model: Departments }, {model: Employees}, {model: Roles}],
      });
      res.status(200).json(allRoleData);
    } catch (err) {
      res.status(500).json(err);
    }
  });
  
  // GET a single Role
  router.get('/:id', async (req, res) => {
    try {
      const singleRoleData = await Roles.findByPk(req.params.id, {
        include: [{ model: Departments }, { model: Employees }, {model: Roles}],
      });
  
      if (!allRolesData) {
        res.status(404).json({ message: 'No Role Data found with that id!' });
        return;
      }
  
      res.status(200).json(singleRoleData);
    } catch (err) {
      res.status(500).json(err);
    }
  });
  
  // CREATE a Role
  router.post('/', async (req, res) => {
    try {
      const roleData = await Roles.create({
        role_id: req.body.role_id,
      });
      res.status(200).json(roleData);
    } catch (err) {
      res.status(400).json(err);
    }
  });
  
//   // DELETE a role
  router.delete('/:id', async (req, res) => {
    try {
      const roleData = await Roles.destroy({
        where: {
          id: req.params.id,
        },
      });
  
      if (!roleData) {
        res.status(404).json({ message: 'No Role Data found with that id!' });
        return;
      }
  
      res.status(200).json(roleData);
    } catch (err) {
      res.status(500).json(err);
    }
  });
  
  module.exports = router;