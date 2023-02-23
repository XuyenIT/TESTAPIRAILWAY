const { Product } = require("../models");

const getAllProduct = async(req,res)=>{
    try {
        const productList = await Product.findAll();
        res.status(201).send(productList);
    } catch (error) {
        res.status(500).send(error);
    }
}
const createProduct = async(req,res)=>{
    const {productName,price,cate} = req.body;
    try {
        const newProduct = await Product.create({
            productName,price,cate
        });
        res.status(201).send(newProduct)
    } catch (error) {
        res.status(500).send(error);
    }
}
module.exports = {
    getAllProduct,
    createProduct
}