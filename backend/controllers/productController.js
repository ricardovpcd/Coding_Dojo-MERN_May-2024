import Product from "../models/productModel.js";

const createProduct = async (req, res) => {
    try {
        var data = req.body;
        var newProduct = await Product.create(data);
        res.status(200).json(newProduct);
    } catch (error) {
        res.status(400).json(error);
    }
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

const getOne = async (req, res) => {
    var idProduct = req.params.idProduct;
    var productFind = await Product.findById(idProduct);
    res.status(200).json(productFind);
}

const updateOne = async (req, res) => {
    try {
        var idProduct = req.params.idProduct;
        var data = req.body;

        await Product.findByIdAndUpdate(idProduct, data, {runValidators: true});
        res.status(200).json();
    } catch (error) {
        res.status(400).json(error);
    }
}

export {createProduct, findAll, deleteOne, getOne, updateOne};