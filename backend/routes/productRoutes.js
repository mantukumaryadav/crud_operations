const express = require("express");
const {
  createProduct,
  getProducts,
  updateProduct,
  deleteProduct,
} = require("../controllers/productController");

const routes = express.Router();

routes.post("/", createProduct);

routes.get("/", getProducts);

routes.put("/:id", updateProduct);

routes.delete("/:id", deleteProduct);

module.exports = routes;
