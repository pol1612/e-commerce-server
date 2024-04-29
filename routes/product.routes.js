const product = require('../database/models/product');
const app = require('express');
const product_controller = require('../controllers/product.controller');
const router = app.Router()


router.post('/product', product_controller.product_create);

router.get("/product", product_controller.product_get_all)

module.exports = router;