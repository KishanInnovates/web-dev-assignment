const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");

router.get("/items", userController.viewItems);
router.get("/item/:id", userController.viewItemDetails);
router.post("/item/interaction", userController.addItemInteraction);

module.exports = router;
