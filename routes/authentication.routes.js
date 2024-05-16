const app = require('express');
const userController = require('../controllers/user.controller');
const router = app.Router()
const isRequestAuthenticated = require('../middlewares/isRequestAuthenticated')

router.get("/authentication/:id", isRequestAuthenticated,userController.getUserById)

router.post("/authentication/login", userController.getUserAuthToken)

router.post("/authentication/register", userController.createUserAndGetUserAuthToken)


module.exports = router;