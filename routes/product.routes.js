const app = require('express');
const productController = require('../controllers/product.controller');
const isRequestAuthenticated = require('../middlewares/isRequestAuthenticated');
const router = app.Router()


router.post('/products',isRequestAuthenticated, productController.createProduct)

router.get("/products", productController.getAllProducts)

router.get("/products/:id", isRequestAuthenticated,productController.getProductById)

router.put("/products/:id", isRequestAuthenticated, productController.updateProduct)

router.delete("/products/:id", isRequestAuthenticated,productController.deleteProduct)

module.exports = router;