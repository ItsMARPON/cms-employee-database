const router = require("express").Router();
const employeeRoutes = require("./employeeRoutes");
const departmentRoutes = require("./departmentRoutes");
const roleRoutes = require("./roleRoutes");

router.use("/employee", employeeRoutes);
router.use("/department", departmentRoutes);
router.use("/role", roleRoutes);

module.exports = router;
