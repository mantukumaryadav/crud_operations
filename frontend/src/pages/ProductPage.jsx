import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import ProductForm from "../components/product/ProductForm";
import ProductList from "../components/product/ProductList";

const ProductPage = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <div className="d-flex justify-content-around py-2 border-bottom">
        <h2>Product List</h2>
        <Button onClick={handleShow}>Add Product</Button>
      </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Create new Product</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ProductForm onClose={handleClose} />
        </Modal.Body>
      </Modal>

      <ProductList />
    </div>
  );
};

export default ProductPage;
