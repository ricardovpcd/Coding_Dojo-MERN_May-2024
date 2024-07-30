import Product from "../models/productModel.js";

const createProduct = async (req, res) => {
    var data = req.body;
    var newProduct = await Product.create(data);
    res.status(200).json(newProduct);
}

const findAll = async (req, res) => {
    var listProducts = await Product.find();
    res.status(200).json(listProducts);
}

const deleteOne = async (req, res) => {
    var data = req.params.idProduct;
    await Product.findByIdAndDelete(data);
    res.status(200).json();
}

export {createProduct, findAll, deleteOne};