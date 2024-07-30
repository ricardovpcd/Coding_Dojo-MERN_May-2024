import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema({
    name: String,
    sku: Number,
    isAvailable: Boolean
});

const Product = mongoose.model("products", ProductSchema);
export default Product;