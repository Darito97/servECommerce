import express from "express";
import dotenv from "dotenv";
import cors from "./cors.js";

/*Routers */
import carritoRouter from "./routes/carrito.routes.js";

dotenv.config();
const App = express();

App.use(express.json());
App.use(cors);

/* Routes */
App.use("/carrito", carritoRouter);

export default App;
