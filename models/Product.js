const mongoose = require("mongoose");
const ProductSchema = new mongoose.Schema({
  productCategory: {
    type: String,
  },

  productInfo: {
    type: String,
  },

  price: {
    type: Number,
  },

  quantityAvailable: {
    type: Number,
  },
});

const Product = mongoose.modal("Product", ProductSchema);

module.exports = Product;
