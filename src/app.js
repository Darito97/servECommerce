import express from "express";
import dotenv from "dotenv";
import cors from "./cors.js";

/*Routers */

dotenv.config();
const App = express();

App.use(express.json());
App.use(cors);

/* Routes */

export default App;
