

const Product = require('../database/models/product');

const createProduct = async (req, res) => {
    const newProductValues = req.body
    let isProductValid = validateProductSchema(newProductValues)
    /*const newProduct = new Product({
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
    });*/
    let createdProductId
    try{
        if(isProductValid){


            const createdProduct = await Product.create(newProductValues);
            createdProductId = createdProduct['_id']

            if(createdProductId){
                res.send(JSON.stringify(createdProductId.toString()));
            }else{
                res.status(400).send({})
            }
        }
        else {
            res.status(400).send({})
        }
    }
    catch(err){
        res.status(500).send({})
    }


}

const getAllProducts = async (req, res) => {
    let productsList
    try {

        productsList = await Product.find()

        if(productsList){
            res.send(JSON.stringify(productsList))
        }else{
            res.status(400).send({})
        }
    }
    catch(err){
        res.status(500).send({})
    }


}
const getProductById =async (req, res) => {
    const id = req.params.id
    let product
    try {
        product = await Product.findById(id)

        if(product){

            res.send(JSON.stringify(product))
        }else{
            res.status(404).send({})
        }
    }catch(err){
        res.status(500).send({})
    }


}
const updateProduct = async (req, res) => {
    const productId = req.params.id
    const productNewValues = req.body
    const isUpdateValid = validateProductSchema(productNewValues)
    try{
        if (isUpdateValid){
            const updatedProduct = await Product.findByIdAndUpdate(
                productId,
                productNewValues,
                {new: true}
                )
                if (updatedProduct) {
                    res.send(JSON.stringify(updatedProduct))
                } else {
                    res.status(404).send({})
                }
            }
        else{
            res.status(400).send({})
        }

    }catch (e) {
        res.status(500).send({})
    }
}
const deleteProduct = async (req, res) => {
    const productId = req.params.id
    let deletedProduct
    try{
        deletedProduct = await Product.findByIdAndDelete(productId)

        if(deletedProduct){
            res.send(JSON.stringify(deletedProduct))
        }else{
            res.status(404).send({})
        }

    }catch (e) {
        res.status(500).send({})
    }
}

function validateProductSchema(productData) {
    const allowedFields = [
        "title",
        "description",
        "price",
        "discountPercentage",
        "rating",
        "stock",
        "brand",
        "category",
        "thumbnail",
    ]
    const receivedFields = Object.keys(productData);
    let isValid = false
    if(receivedFields.length !== 0){

        isValid = allowedFields.every(field =>{
            let isFieldInRequest = receivedFields.includes(field)
            return isFieldInRequest

        } )
    }
    return isValid
}
module.exports = { createProduct,getAllProducts, getProductById, updateProduct, deleteProduct}