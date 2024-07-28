const express = require("express");
const router = express.Router();
const adminController = require("../controllers/adminController");
const auth = require("../middleware/auth");

router.post("/register", adminController.register);
router.post("/login", adminController.login);
router.get("/users", auth, adminController.getUsers);
router.put("/user/:id", auth, adminController.updateUser);
router.delete("/user/:id", auth, adminController.deleteUser);

module.exports = router;
