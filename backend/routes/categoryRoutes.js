const express = require("express");
const {
  getCategories,
  createCategory,
  updateCategory,
  deleteCategory,
} = require("../controllers/categoryController");

const router = express.Router();

router.post("/", createCategory);

router.get("/", getCategories);

router.put("/:id", updateCategory);

router.delete("/:id", deleteCategory);

module.exports = router;
