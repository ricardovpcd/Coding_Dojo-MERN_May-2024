import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema({
    name: { type: String, required: true },
    sku: { type: Number, required: true },
    isAvailable: Boolean
});

const Product = mongoose.model("products", ProductSchema);
export default Product;