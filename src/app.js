import express from "express";
import dotenv from "dotenv";
import cors from "./cors.js";

/*Routers */
import productsRouter from "./routes/products.routes.js";

dotenv.config();
const App = express();

App.use(express.json());
App.use(cors);

/* Routes */
App.use("/products", productsRouter);

export default App;
