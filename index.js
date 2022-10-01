const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const bodyParser = require("body-parser");
const app = express();
const PORT = process.env.PORT || 3000;
const groceryRoute = require("./routes/GroceryStore");

//middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

//routes
app.use("/api", groceryRoute);

mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
  })
  .then(() => {
    console.log("connected to Mongo db database");
  })
  .catch((err) => {
    console.log("Error connecting to database" + err);
  });

app.listen(PORT, () => {
  console.log("Backend server has started at port:" + 8081);
});
