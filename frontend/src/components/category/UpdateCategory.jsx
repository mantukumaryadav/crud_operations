import React from "react";
import { Button, Form } from "react-bootstrap";

const UpdateCategory = ({
  updatedCategoryName,
  setUpdatedCategoryName,
  onClose,
  onUpdate,
}) => {
  return (
    <div>
      <Form.Control
        type="text"
        value={updatedCategoryName}
        onChange={(e) => setUpdatedCategoryName(e.target.value)}
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

export default UpdateCategory;
