// CategoryForm.js
import axios from "axios";
import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

const CategoryForm = ({ onClose }) => {
  const [categoryName, setCategoryName] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (categoryName.trim() === "") {
      setErrorMessage("Please enter a category");
    } else {
      try {
        const response = await axios.post(
          "http://localhost:5000/api/categories/",
          {
            categoryName: categoryName,
          }
        );
        console.log(response.data);
        setCategoryName("");
        onClose(false);
      } catch (err) {
        console.log(err);
      }
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group>
        <Form.Control
          className="mb-2"
          type="text"
          placeholder="Category Name"
          value={categoryName}
          onChange={(e) => setCategoryName(e.target.value)}
        />
        {errorMessage && <p className="text-danger">{errorMessage}</p>}
        <Button type="submit">Add</Button>
      </Form.Group>
    </Form>
  );
};

export default CategoryForm;
