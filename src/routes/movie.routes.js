import { Router, express } from "express";
import { ObtenerTodaslasMovies, ObtenerMoviesPorID, CrearMovies, actualizarMovies, eliminarMovie  } from "../controllers/movie.controllers.js";
const ruta = express.Router();

ruta.get("/movies", ObtenerTodaslasMovies)
ruta.get("/movies/:id", ObtenerMoviesPorID)
ruta.post("/movies", CrearMovies)
ruta.put("/movies/:id", actualizarMovies)
ruta.delete("movies/:id", eliminarMovie)

export {ruta};