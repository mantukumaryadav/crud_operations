// ProductForm.js
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Dropdown, Form } from "react-bootstrap";

const ProductForm = ({ onClose }) => {
  const [productName, setProductName] = useState("");
  const [categories, setCategories] = useState([]);
  const [selectedCategoryId, setSelectedCategoryId] = useState(null);
  const [selectedCategoryName, setSelectedCategoryName] =
    useState("Select Category");

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/categories/");
      setCategories(response.data.data);
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  };

  const handleCategoryChange = (categoryId) => {
    setSelectedCategoryId(categoryId);
    setSelectedCategoryName(categoryName);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:5000/api/categories/",
        {
          productName: productName,
          categoryId: selectedCategoryId,
        }
      );
      console.log(response.data);
      setProductName("");
      setSelectedCategoryId(null);
      setSelectedCategoryName("Select Category");
      onClose(false);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group>
        <Form.Control
          className="mb-2"
          type="text"
          placeholder="product Name"
          value={productName}
          onChange={(e) => setProductName(e.target.value)}
        />

        <Dropdown className="mb-2">
          <Dropdown.Toggle variant="success" id="dropdown-basic">
            {selectedCategoryName}
          </Dropdown.Toggle>
          <Dropdown.Menu>
            {categories.map((category) => (
              <Dropdown.Item
                key={category.categoryId}
                onSelect={() =>
                  handleCategoryChange(
                    category.categoryId,
                    category.categoryName
                  )
                }
              >
                {category.categoryName}
              </Dropdown.Item>
            ))}
          </Dropdown.Menu>
        </Dropdown>

        <Button type="submit">Add</Button>
      </Form.Group>
    </Form>
  );
};

export default ProductForm;
