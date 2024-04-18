import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Modal } from "react-bootstrap";
import CategoryForm from "../components/category/CategoryForm";
import CategoryList from "../components/category/CategoryList";

const CategoryPage = () => {
  const [categories, setCategories] = useState([]);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5000/api/categories"
        );
        setCategories(response.data.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchCategories();
  }, []);

  const handleDeleteCategory = async (categoryId) => {
    try {
      const response = await axios.delete(
        `http://localhost:5000/api/categories/${categoryId}`
      );

      setCategories((cate) => cate.filter((c) => c.productId !== categoryId));
      console.log(response.data);
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleUpdateCategory = async (categoryId, updatedData) => {
    try {
      const response = await axios.put(
        `http://localhost:5000/api/categories/${categoryId}`,
        updatedData
      );
      console.log(response.data);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div>
      <div className="d-flex justify-content-around py-2 border-bottom">
        <h2>Category List</h2>
        <Button onClick={handleShow}>Add Category</Button>
      </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Category</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <CategoryForm onClose={handleClose} />
        </Modal.Body>
      </Modal>

      <CategoryList
        categories={categories}
        onUpdate={handleUpdateCategory}
        onDelete={handleDeleteCategory}
      />
    </div>
  );
};

export default CategoryPage;
