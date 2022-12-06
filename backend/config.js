/*
    CONFIGURACION A LA CONEXION A LA BD
    Si nos conectamos a una base de datos que no existe entonces mongodb la va a crear por nosotros.

    Vamos a guardar todas las variables en este archivo 
    Acá vamos a guardar por ejemplo cadenas de conexión, contraseñas, tokens, clan secret, etc…
*/

import { config } from "dotenv";

config();

// if (process.env.NODE_ENV !== 'production') {
//   config();
// } 
  

export const PORT = process.env.PORT || 4000;
export const MONGODB_URI =
  process.env.MONGODB_URI || "mongodb://localhost:27017/bookstore";
