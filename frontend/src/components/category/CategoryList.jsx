import React from "react";
import { Container } from "react-bootstrap";
import CategoryItem from "./CategoryItem";

const CategoryList = ({ categories, onDelete, onUpdate }) => {
  return (
    <div>
      <Container>
        <ul className="d-flex flex-wrap p-2 gap-2">
          {categories.map((category) => (
            <CategoryItem
              category={category}
              key={category.categoryId}
              onDelete={onDelete}
              onUpdate={onUpdate}
            />
          ))}
        </ul>
      </Container>
    </div>
  );
};

export default CategoryList;
