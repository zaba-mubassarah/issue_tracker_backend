import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import issueRoutes from "./routes/issues.js";
import usersRoute from "./routes/users.js";
import signUpRoutes from "./routes/signUp.js";
import productCategoryRoutes from "./routes/productCategory.js";
import productSubCategoryRoutes from "./routes/productSubCategory.js";
import productsRoutes from "./routes/product.js";
const app = express();
dotenv.config();
import cors from "cors";

const PORT = 5000;
app.use(bodyParser.json());

mongoose
  .connect("mongodb://localhost/mydb", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("connection successful"))
  .catch((err) => console.log(err));

app.use("/issues", cors(), issueRoutes);
app.use("/users", cors(), usersRoute);
app.use("/", cors(), signUpRoutes);
app.use("/product-category", cors(), productCategoryRoutes);
app.use("/product-sub-category", cors(), productSubCategoryRoutes);
app.use("/products", cors(), productsRoutes);

app.listen(PORT, () =>
  console.log(`Server running on port: http://localhost:${PORT}`)
);
