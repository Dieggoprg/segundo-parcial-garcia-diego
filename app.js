import express from "express";
import { ruta } from "./src/routes/movie.routes.js";
import { starDB } from "./src/config/database.js";
import "dotenv/config";

const app = express();
const PORT = process.env.PORT

app.use(express.json());
app.use("/api", ruta);

starDB();

app.listen(PORT, () => {
    console.log("RUNNING SERVER🖥️📡")
})
