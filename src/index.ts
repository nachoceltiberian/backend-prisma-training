import express from "express";

import productsRoutes from "./routes/products.routes";
import categoriesRoutes from "./routes/categories.routes";

const app = express();

app.use(express.json());

app.use("/api", productsRoutes);
app.use("/api", categoriesRoutes);

app.listen(3000);
console.log("Server on port", 3000);