const product = require('../database/models/product');
const app = require('express');
const productController = require('../controllers/product.controller');
const router = app.Router()


router.post('/products', productController.createProduct)

router.get("/products", productController.getAllProducts)

router.get("/products/:id", productController.getProductById)

router.put("/products/:id", productController.updateProduct)

router.delete("/products/:id", productController.deleteProduct)

module.exports = router;B