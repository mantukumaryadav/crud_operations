import React from "react";
import { Button, Form } from "react-bootstrap";

const UpdateProduct = ({
  updatedProductName,
  setUpdatedProductName,
  onClose,
  onUpdate,
}) => {
  return (
    <div>
      <Form.Control
        type="text"
        value={updatedProductName}
        onChange={(e) => setUpdatedProductName(e.target.value)}
      />
      <Button variant="secondary" onClick={onClose}>
        Close
      </Button>
      <Button variant="primary" onClick={onUpdate}>
        Save Changes
      </Button>
    </div>
  );
};

export default UpdateProduct;
