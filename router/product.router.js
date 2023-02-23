const express = require("express");
const { getAllProduct, createProduct } = require("../controllers/product.controller");
const productRouter = express.Router();
productRouter.get("/",getAllProduct);
productRouter.post("/",createProduct);
module.exports = productRouter;