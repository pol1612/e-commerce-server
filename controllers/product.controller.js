
const Product = require('../database/models/product');

const product_create = async (req, res) => {
    const newProduct = new Product({
        title: req.body.title,
        description: req.body.description,
        price: req.body.price,
        discountPercentage: req.body.discountPercentage,
        rating: req.body.rating,
        stock: req.body.stock,
        brand: req.body.brand,
        category: req.body.category,
        thumbnail: req.body.thumbnail,
        images: req.body.images,
    });

    await Product.create(newProduct);
    res.send("Product saved to the database!");
}

const product_get_all = async (req, res) => {
    const products_list = await Product.find()
    res.send(JSON.stringify(products_list))
}
module.exports = {product_create, product_get_all}