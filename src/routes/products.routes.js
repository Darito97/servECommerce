import { Router } from "express";

/*Controller */
import {
  getProducts,
  createProduct,
  updateProduct,
  deleteProduct,
  getProduct,
} from "../controllers/products.controller.js";

const routerProducts = Router();

routerProducts.get("/", getProducts);
routerProducts.post("/", createProduct);
routerProducts.put("/:id", updateProduct);
routerProducts.delete("/:id", deleteProduct);
routerProducts.get("/:id", getProduct);

export default routerProducts;
