const express = require("express");
const cors = require("cors");
const connection = require("./config/db"); 
const productRoutes = require("./routes/productRoutes");
const categoryRoutes = require("./routes/categoryRoutes"); 

const PORT = 5000;
const app = express();

// Middleware setup
app.use(express.json()); 
app.use(cors());

// Define routes
app.use("/api/products", productRoutes);
app.use("/api/categories", categoryRoutes);

// database connection
connection.query("SELECT 1")
  .then(() => {
    console.log("Connection successful"); 
    app.listen(PORT, () => console.log(`Listening on ${PORT}`));
  })
  .catch((err) => console.log("Error:", err));
