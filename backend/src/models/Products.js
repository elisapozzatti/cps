import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  name: String,
  category: String,
  price: Number,
  code: String,
  image: String,
  description: String,
});

const Products = mongoose.model("Products", productSchema);

export default Products;
