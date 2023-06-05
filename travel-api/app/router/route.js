const express = require("express");
const { isAdmin, verifyToken } = require("../controllers/verifyJwtToken");
const {
  findAllRoutes,
  findOneRoute,
  addRoute,
  updateRoute,
  deleteRoute,
} = require("../controllers/route");

const router = express.Router();

router.get("/routes/get", findAllRoutes);
router.get("/routes/get/:id", findOneRoute);
router.post("/routes/add", verifyToken, isAdmin, addRoute);
router.put("/routes/update/:id", verifyToken, isAdmin, updateRoute);
router.delete("/routes/delete/:id", verifyToken, isAdmin, deleteRoute);

module.exports = router;
