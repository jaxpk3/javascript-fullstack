/*
    CONEXION A LA BASE DE DATOS
    MONGODB_URI --> es la variable de conexion la base de datos
*/

import mongoose from "mongoose";
import { MONGODB_URI } from "./config.js";

try {
  const db = await mongoose.connect(MONGODB_URI);
  console.log("Database is connected to", db.connection.host);
} catch (error) {
  console.error(error);
}
