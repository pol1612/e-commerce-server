

const Product = require('../database/models/product');

const createProduct = async (req, res) => {
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
    try{
        await Product.create(newProduct);
    }
    catch(err){
        res.status(400).send({})
    }

    res.send("Product saved to the database !");
}

const getAllProducts = async (req, res) => {
    try {
        const products_list = await Product.find()
    }
    catch(err){
        res.status(404).send({})
    }
    res.send(JSON.stringify(products_list))
}
const getProductById =async (req, res) => {
    const id = req.params.id

    try {
        const product = await Product.findById(id)

    }catch(err){
        res.status(404).send({})
    }
    res.send(JSON.stringify(product))
}
const updateProduct = async (req, res) => {
    const productId = req.params.id
    const productNewValues = req.body
    try{
        const updatedProduct = await Product.findByIdAndUpdate(productId,
            {
                productNewValues
            }
        )

    }catch (e) {
        res.status(400).send({})
    }
    res.send(JSON.stringify(updateProduct))
}
const deleteProduct = async (req, res) => {
    const productId = req.params.id
    try{
        const deletedProduct = await Product.findByIdAndDelete(productId)
    }catch (e) {
        res.status(404).send({})
    }
    res.send(JSON.stringify(deleteProduct))
}
module.exports = { createProduct,getAllProducts, getProductById, updateProduct, deleteProduct}