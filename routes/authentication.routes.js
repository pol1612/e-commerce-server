const app = require('express');
const userController = require('../controllers/user.controller');
const router = app.Router()



router.get("/authentication/login", userController.getUserAuthToken)

router.post("/authentication/register", userController.createUserAndGetUserAuthToken)


module.exports = router;