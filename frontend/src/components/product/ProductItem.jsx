import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import UpdateProduct from "./UpdateProduct";

const ProductItem = ({ product, onDelete, onUpdate }) => {
  const [show, setShow] = useState(false);
  const [updatedProductName, setUpdatedProductName] = useState(
    product.productName
  );

  const handleUpdateClick = () => {
    setShow(true);
  };

  const handleClose = () => {
    setShow(false);
  };

  const handleSaveUpdate = () => {
    onUpdate(product.productId, updatedProductName);
    setShow(false);
  };

  return (
    <li className="border p-2 rounded">
      <h3>{product.productName}</h3>
      <p className="fw-semibold">Category : {product.categoryName}</p>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Update Product</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <UpdateProduct
            updatedProductName={updatedProductName}
            setUpdatedProductName={setUpdatedProductName}
            onClose={handleClose}
            onUpdate={handleSaveUpdate}
          />
        </Modal.Body>
      </Modal>

      <div className="d-flex gap-2">
        <Button size="sm" onClick={() => onDelete(product.productId)}>
          Delete
        </Button>
        <Button size="sm" onClick={handleUpdateClick}>
          Update
        </Button>
      </div>
    </li>
  );
};

export default ProductItem;
