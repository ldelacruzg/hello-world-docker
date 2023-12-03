import express from "express";
import { v4 as uuid } from "uuid";
import mongoose from "mongoose";

const app = express();
const PORT = 3000;

const db = await mongoose
  .connect("mongodb://datitos:27017/test-docker")
  .then(() => console.log("Conexión exitosa a base de datos - modificado desde el container"))
  .catch((e) =>
    console.log(`No se puso conectar a la base de datos + ${e.message}`)
  );

// Model
const ProductSchema = new mongoose.Schema({
  name: String,
});

const ProductModel = mongoose.model("Product", ProductSchema);

// Endpoint
app.get("/", async (_, res) => {
  console.log("listando products...");
  res.json({ data: await ProductModel.find() });
});

app.get("/crear", async (_, res) => {
  console.log("creando...");
  const newProduct = await ProductModel.create({
    name: "laptop",
  });

  res.json({
    say: "Hello world!",
    uuid: uuid(),
    newProduct,
  });
});

app.listen(PORT, () => {
  console.log(`Server on port ${PORT}`);
});
