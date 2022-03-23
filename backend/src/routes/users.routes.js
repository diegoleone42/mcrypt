const { Router }= require("express");
const router = Router();
const usersController = require("../controllers/users.controllers");

// Create - Read routes
router.get("/signin",usersController.getUser)
router.post("/signup",usersController.createUser)

module.exports = router;