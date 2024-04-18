const db = require("../config/db");


//  get all categories
const getCategories = async (req, res) => {
  try {
    const data = await db.query(`SELECT *  from categories;`);
    res.status(202).json({ data: data[0] });
  } catch (err) {
    res.status(500).json({
      message: err,
    });
  }
};


//  create a category
const createCategory = async (req, res) => {
  try {
    const { categoryName } = req.body;

    const [{ insertId }] = await db.query(
      `INSERT INTO categories (categoryName) 
          VALUES (?)`,
      [categoryName]
    );
    res
      .status(201)
      .json({ message: "Category created successfully", categoryName });
  } catch (error) {
    console.error("Error creating category:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};


//  update category
const updateCategory = async (req, res) => {
  try {
    const { id: categoryId } = req.params;

    if (!categoryId) {
      return res
        .status(404)
        .send({ success: false, message: "Invalid Category Id" });
    }

    const { categoryName } = req.body;

    const [[category]] = await db.query(
      `SELECT * FROM categories WHERE categoryId = ?`,
      [categoryId]
    );

    if (!category) {
      return res
        .status(500)
        .send({ success: false, message: "Error in update data" });
    }

    const [{ affectedRows }] = await db.query(
      `UPDATE categories SET categoryName = ? WHERE categoryId = ?`,
      [categoryName, categoryId]
    );

    if (affectedRows === 0) {
      return res
        .status(500)
        .json({ success: false, message: "Error updating category" });
    }

    res.status(200).send({
      success: true,
      message: "category updated successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error updating product",
    });
  }
};


//  delete category
const deleteCategory = async (req, res) => {
  try {
    const categoryId = req.params.id;

    if (!categoryId) {
      return res.status(404).send({
        success: false,
        message: "Category not found",
      });
    }

    await db.query(`DELETE FROM categories WHERE categoryId = ?`, [categoryId]);

    res.status(200).send({
      success: true,
      message: "Category deleted",
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error deleting category",
      error,
    });
  }
};

module.exports = {
  getCategories,
  updateCategory,
  deleteCategory,
  createCategory,
};
