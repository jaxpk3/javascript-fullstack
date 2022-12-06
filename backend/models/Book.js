/*
    MODELOS
    Aca vamos a definir como van a verse los datos que queremos guardar
    aca podemos definir cosas como titulo, autor, id, etc...
    Modelo de datos que nos permite consultar la BD de MongoDB

*/

import mongoose from "mongoose";

const BookSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, trim: true },
    author: { type: String, required: true, trim: true },
    isbn: { type: String, required: true, trim: true },
    imagePath: { type: String },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Book", BookSchema);
