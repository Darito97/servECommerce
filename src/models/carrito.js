import mongoose from "mongoose";

const carritoSchema = new mongoose.Schema({
  productos: [
    {
      id: { type: String, required: true },
      timestamp: { type: Date, required: true, default: Date.now },
      nombre: { type: String, required: true },
      descripcion: { type: String, required: true },
      foto: { type: String, required: true },
      precio: { type: Float64Array, required: true },
      stock: { type: Number, required: true },
    },
  ],
  timestamp: { type: Date, required: true },
});

const Carrito = mongoose.model("carrito", carritoSchema);

export default Carrito;
