const expree = require("express");
const router = express.Router();

const CustomerDetails = require("./models/CustomerDetails");
const CustomerOrder = require("./models/CustomerOrder");
const Product = require("./models/Product");

//API to fetch Customers list
router.get("/list", async (req, res) => {
  try {
    list = await CustomerDetails.find({}).select({
      order: 0,
    });
    if (!list) return res.status(200).json([]);

    return res.status(200).json(result);
  } catch (err) {
    console.log("Something Went Wong: " + err);
    return res.status(404).json({ error: "Customer list not found" });
  }
});

//API to fetch Specific Customer list
router.get("/customer/:customer_id", async (req, res) => {
  try {
    var orderList = CustomerOrder.findById(req.params.customer_id)
      .populate("CustomerOrder", { productList: 1 })
      .populate("Product");
  } catch (err) {}
});

//API to Create New Customer
router.post("/customer", (req, res) => {
  var { email, phone, name } = req.body;

  if (email == "" && phone === null && name == "") {
    return res.status(400).json("Request body is empty");
  } else if (
    email == "" ||
    email === null ||
    phone === null ||
    name == "" ||
    name === null
  ) {
    return res.status(400).json("invalid fields value");
  }

  var customer = new CustomerDetails(req.body);
  customer.save((err, customer) => {
    if (err) return res.status(400).json(err);
    return res.status(201).json({ id: customer._id });
  });
});

//API to Create New Product
router.post("/product", (req, res) => {
  var { productCategory, productInfo, price, quantityAvailable } = req.body;

  if (
    productCategory == "" &&
    productInfo == "" &&
    price === null &&
    quantityAvailable === null
  ) {
    return res.status(400).json("Request body is empty");
  } else if (
    productCategory == "" ||
    productCategory === null ||
    productInfo == "" ||
    productInfo === null ||
    price === null ||
    price < 0 ||
    quantityAvailable === null ||
    quantityAvailable < 0
  ) {
    return res.status(400).json("invalid fields value");
  }

  var product = new Product(req.body);
  product.save((err, product) => {
    if (err) return res.status(400).json(err);
    return res.status(201).json({ id: product._id });
  });
});

//API to update Product Price
router.put("/:productId", async (req, res) => {
  const product = await Product.updateOne(
    { _id: req.params.productId },
    { $set: { price: req.body.price } }
  );
  res.send(product);
});

module.exports = router;
