import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/layouts/Header";
import CategoryPage from "./pages/CategoryPage";
import HomePage from "./pages/HomePage";
import ProductPage from "./pages/ProductPage";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/categories" element={<CategoryPage />} />
        <Route path="/products" element={<ProductPage />} />
      </Routes>
    </>
  );
}

export default App;
