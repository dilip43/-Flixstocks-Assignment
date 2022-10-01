const mongoose = require("mongoose");
const CustomerOrder = require("./CustomerOrder");

const CustomerDetailSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },

  phone: {
    type: Number,
    required: true,
    unique: true,
    max: 10,
  },

  name: {
    type: String,
    required: true,
  },

  order: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "CustomerOrder",
  },
});

const CustomerDetails = mongoose.modal(
  "Customer_Details",
  CustomerDetailSchema
);

module.exports = CustomerDetails;
