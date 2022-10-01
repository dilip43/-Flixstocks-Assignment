const mongoose = require("mongoose");
const Product = require("./product");
const CustomerOrderSchema = new mongoose.Schema({
  productList: {
    type: [mongoose.Schema.Types.ObjectId],
    ref: "Product",
  },

  totalPrice: {
    type: Number,
  },

  paymentInfo: {
    type: String,
  },
});

const CustomerOrder = mongoose.modal("CustomerOrder", CustomerOrderSchema);

module.exports = CustomerOrder;
