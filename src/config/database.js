import { Sequelize } from "sequelize";
import "dotenv/config"

export const sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
        host : process.env.DB_HOST,
        dialect : process.env.DB_DIALECT
    }
)

export const starDB = async () => {
    try {
        await sequelize.authenticate();
        console.log("Conexión establecida con MySql")
        await sequelize.sync();
    } catch (error) {
        console.error("Error al establecer la conexión con la Base de Datos: ", error)
        
    }

}