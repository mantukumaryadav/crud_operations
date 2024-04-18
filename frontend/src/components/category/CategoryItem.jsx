import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import UpdateCategory from "./UpdateCategory";

const CategoryItem = ({ category, onDelete, onUpdate }) => {
  const [show, setShow] = useState(false);
  const [updatedCategoryName, setUpdatedCategoryName] = useState(
    category.categoryName
  );

  const handleUpdateClick = () => {
    setShow(true);
  };

  const handleClose = () => {
    setShow(false);
  };

  const handleSaveUpdate = () => {
    onUpdate(category.categoryId, updatedCategoryName);
    setShow(false);
  };
  return (
    <li>
      <div className="p-2 border">
        <p>{category.categoryName}</p>

        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Update Category</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <UpdateCategory
              updatedCategoryName={updatedCategoryName}
              setUpdatedCategoryName={setUpdatedCategoryName}
              onClose={handleClose}
              onUpdate={handleSaveUpdate}
            />
          </Modal.Body>
        </Modal>

        <div className="d-flex gap-2 ">
          <Button size="sm" onClick={() => onDelete(category.categoryId)}>
            Delete
          </Button>
          <Button size="sm" onClick={handleUpdateClick}>
            Update
          </Button>
        </div>
      </div>
    </li>
  );
};

export default CategoryItem;
