const app = require('express');
const userController = require('../controllers/user.controller');
const router = app.Router()

router.post("/authentication/register", userController.createUserAndGetUserAuthToken)

router.get("/authentication/login", userController.getUserAuthToken)

module.exports = router;