import { where } from "sequelize";
import { Movies } from "../models/movie.mode.js";

export const ObtenerTodaslasMovies =  async (req, res) => { 
    try {
        const movies = await Movies.findAll();
        return res.status(200).json(movies);
    } catch (error) {
        return res.status(404).json("No se encontró ninguna Pelicula")
    }
};

export const ObtenerMoviesPorID = async (req, res) => {
    try {
        const movies = Movies.findByPk({where : {id: req.params.id}})
        if(movies) {return res.status(200).json(movies)}
        else {res.status(404).json("Id no reconocido")}
    } catch (error) {
        return res.status(500).json(error);
        
    }
   
};

export const CrearMovies = async (req, res)=> {
    const {id , title, director, duration, genre, description} = req.body;

    if(title === undefined || title === "") return res.status(400).json({ Menssage: "title no puede estar vacio" })
    if(director === undefined || director === "") return res.status(400).json({ Menssage: "Race no puede estar vacio" })
    if(duration === undefined || duration === "") return res.status(400).json( {Menssage: "duration no puede estar vacio"} )

    const durationINT = Math.floor(durationINT);
    if (duration !== durationINT) return res.status(400).json({Menssage: 'la DURACIÓN debe ser Integer' });

    if (typeof description  !== "string") return res.status(400).json({Menssage: 'Description no válida, debe ser de type string si es que se desea proporcionar'})
    if (typeof title !== "string") return res.status(400).json({Menssage: 'Title no válido, debe sde ter ype String'})
    if (typeof genre !== "string") return res.status(400).json({Menssage : 'Genre no válido, debe sde ter ype String'})

    if (title) {
        const TituloUnico = await PERSONAJES.findOne({where: {title}});
        if(TituloUnico !== "") return res.status(400).json({Menssage: 'Titlo ya Existente'})
    }

    try {
     const movies = await Movies.create(req.body);
     return res.status(201).json(movies);
  } catch (error) {
   return res.status(500).json({ error: error.message });
}};

export const actualizarMovies = async (req, res) => {
    const {id , title, director, duration, genre, description} = req.body;
    
    if(title === undefined || title === "") return res.status(400).json({ Menssage: "title no puede estar vacio" })
    if(director === undefined || director === "") return res.status(400).json({ Menssage: "Race no puede estar vacio" })
    if(duration === undefined || duration === "") return res.status(400).json( {Menssage: "duration no puede estar vacio"} )

    const durationINT = Math.floor(durationINT);
    if (duration !== durationINT) return res.status(400).json({Menssage: 'la DURACIÓN debe ser Integer' });

    if (typeof description  !== "string") return res.status(400).json({Menssage: 'Description no válida, debe ser de type string si es que se desea proporcionar'})
    if (typeof title !== "string") return res.status(400).json({Menssage: 'Title no válido, debe sde ter ype String'})
    if (typeof genre !== "string") return res.status(400).json({Menssage : 'Genre no válido, debe sde ter ype String'})

    if (title) {
        const TituloUnico = await PERSONAJES.findOne({where: {title}});
        if(TituloUnico !== "") return res.status(400).json({Menssage: 'Titlo ya Existente'})
        
 try {
     const [actualizar] = await Movies.update(req.body,{where: { id: req.params.id}})
     const actualizarMovies = await Movies.findByPk(req.params.id);
      return res.json(actualizarMovies);
      
    } catch (error) {
        return res.status(404).json("No se encontró la Pelicula con el id: ", req.params.id)
    }
}}

export const eliminarMovie = async (req, res) => {
  try {
    const eliminar = await Movies.destroy({ where: { id: req.params.id } }); 
    if(eliminar === 0) return res.status(404).json({Menssage : "Movie no encontrada"})
    if (eliminar) return res.status(204).json({ message: "Movie eliminada" });
  } catch (error) {
     res.status(500).json({ error: error.Menssage})
  }}