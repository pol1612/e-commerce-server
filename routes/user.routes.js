const app = require('express');
const userController = require('../controllers/user.controller');
const router = app.Router()

router.get("/users/:id", userController.getUserById)

module.exports = router;



