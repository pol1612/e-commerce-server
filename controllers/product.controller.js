

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
    let createdProductId
    try{
        const createdProduct = await Product.create(newProduct);
        createdProductId = createdProduct['_id']
    }
    catch(err){
        res.status(500).send({})
    }

    if(createdProductId != null){
        res.send(JSON.stringify(createdProductId.toString()));
    }else{
        res.status(400).send({})
    }
}

const getAllProducts = async (req, res) => {
    let productsList
    try {
        productsList = await Product.find()
    }
    catch(err){
        res.status(404).send({})
    }

    if(productsList != null){
        res.send(JSON.stringify(productsList))
    }else{
        res.status(400).send({})
    }
}
const getProductById =async (req, res) => {
    const id = req.params.id
    let product
    try {
        product = await Product.findById(id)

    }catch(err){
        res.status(404).send({})
    }

    if(product != null){

        res.send(JSON.stringify(product))
    }else{
        res.status(400).send({})
    }
}
const updateProduct = async (req, res) => {
    const productId = req.params.id
    const productNewValues = req.body
    let updatedProduct
    try{
        updatedProduct = await Product.findByIdAndUpdate(productId,
            {
                productNewValues
            }
        )

    }catch (e) {
        res.status(400).send({})
    }

    if(updatedProduct != null){
        res.send(JSON.stringify(updatedProduct))
    }else{
        res.status(400).send({})

    }
}
const deleteProduct = async (req, res) => {
    const productId = req.params.id
    let deletedProduct
    try{
        deletedProduct = await Product.findByIdAndDelete(productId)
    }catch (e) {
        res.status(404).send({})
    }

    if(deletedProduct != null){
        res.send(JSON.stringify(deletedProduct))
    }else{
        res.status(400).send({})

    }
}
module.exports = { createProduct,getAllProducts, getProductById, updateProduct, deleteProduct}