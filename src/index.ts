/** Importaciones */
import express from "express";
import { config } from "dotenv"
import calcRouter from "./routes/calc.routes.ts";

/** Configuracion */
config(); // Variables de Entorno
const {
    PORT = 3000,
    URI = 'https://localhost:27017'
} = process.env
const app = express(); // Servidor HttpExpress

/* Middlewares */
app.use(express.json()) // FormData
app.use(express.urlencoded({ extended: true })) // x-www-form-urlencoded
app.use(express.static('public')) // static server

/** Rutas */
app.use("/api/calc/", calcRouter);
/** Ejecucion*/
app.listen(PORT, () => console.log("service running"))