import { Router } from "express";
import express from "express"
const ruta = express.Router();

ruta.get("/movies", (req, res) => {
    return res.status(200).json("TODAS LAS PELICULAS")
})

ruta.post("//movies", )

export {ruta};