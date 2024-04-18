import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, ButtonGroup, Container } from "react-bootstrap";
import ProductItem from "./ProductItem";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const pageSize = 10;

  const handleProductDelete = async (productId) => {
    const response = await axios.delete(
      `http://localhost:5000/api/products/${productId}`
    );
    setProducts(products.filter((product) => product.productId !== productId));
    console.log(response.data);
  };

  const handleProductUpdate = async (productId, updatedData) => {
    const response = await axios.delete(
      `http://localhost:5000/api/products/${productId}`,
      updatedData
    );
    console.log(response.data);
  };

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/api/products?page=${currentPage}&pageSize=${pageSize}`
        );
        setProducts(response.data.data);
        setTotalPages(response.data.totalPages);
      } catch (error) {
        console.error("error fatching products", error);
      }
    };

    fetchCategories();
  }, [currentPage]);

  const handlePreviousPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  const handleNextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div>
      <Container>
        <ul className="d-flex flex-wrap p-2 gap-2">
          {products.map((product) => (
            <ProductItem
              product={product}
              key={product.productId}
              onDelete={handleProductDelete}
              onUpdate={handleProductUpdate}
            />
          ))}
        </ul>

        <ButtonGroup aria-label="Pagination" className="text-center">
          <Button onClick={handlePreviousPage} disabled={currentPage === 1}>
            Prev
          </Button>
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <Button key={page} onClick={() => handlePageChange(page)}>
              {page}
            </Button>
          ))}
          <Button
            onClick={handleNextPage}
            disabled={currentPage === totalPages}
          >
            Next
          </Button>
        </ButtonGroup>
      </Container>
    </div>
  );
};

export default ProductList;
