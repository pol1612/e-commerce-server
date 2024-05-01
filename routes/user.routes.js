const app = require('express');
const userController = require('../controllers/user.controller');
const router = app.Router()

router.get("/users/:id", userController.getUserById)

router.post("/users/register", userController.createUserAndGetUserAuthToken)

router.get("/users/login", userController.getUserAuthToken)

module.exports = router;



