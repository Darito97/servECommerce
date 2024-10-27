import Product from "../models/Product.js";

const getProducts = async (req, res) => {
  try {
    const products = await Product.find({});
    res.json(products);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const createProduct = async (req, res) => {
  try {
    const product = new Product(req.body);
    const newProduct = await product.save();
    res.status(201).json(newProduct);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const updateProduct = async (req, res) => {
  try {
    const { id } = req.params;
    if (!id) {
      res.status(400).json({ message: "Product ID is required" });
    } else {
      const product = await Product.findById(id);
      if (!product) {
        res.status(404).json({ message: "Product not found" });
      } else {
        await Product.findByIdAndUpdate(id, req.body);
        res.status(204).send();
      }
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;
    if (!id) {
      res.status(400).json({ message: "Product ID is required" });
    } else {
      const product = await Product.findById(id);
      if (!product) {
        res.status(404).json({ message: "Product not found" });
      } else {
        await Product.findByIdAndDelete(id);
        res.status(204).send();
      }
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const getProduct = async (req, res) => {
  try {
    const { id } = req.params;
    if (!id) {
      res.status(400).json({ message: "Product ID is required" });
    } else {
      const product = await Product.findById(id);
      if (!product) {
        res.status(404).json({ message: "Product not found" });
      } else {
        res.json(product);
      }
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export { getProducts, createProduct, updateProduct, deleteProduct, getProduct };
