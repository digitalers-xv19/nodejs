/** Importaciones */
import express from "express";
import { config } from "dotenv"

import { dbConn } from "./utils/dbConn.ts";
import calcRouter from "./routes/calc.routes.ts";
import apiRouter from "./routes/api.routes.ts";

/** Configuracion */
config(); // Variables de Entorno
const {
    PORT = 3000,
    URI = 'mongodb://localhost:27017/digitalers'
} = process.env;
const app = express(); // Servidor HttpExpress
dbConn(URI);

/* Middlewares */
app.use(express.json()) // FormData
app.use(express.urlencoded({ extended: true })) // x-www-form-urlencoded
app.use(express.static('public')) // static server

/** Rutas */
app.use("/api/calc/", calcRouter);
app.use("/api/", apiRouter);
/** Ejecucion*/
app.listen(PORT, () => console.log("service running"));