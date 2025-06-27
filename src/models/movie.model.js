import { sequelize } from "../config/database.js"
import { DataTypes } from "sequelize"

export const Movies = sequelize.define("Movies", {
    title : {type: DataTypes.STRING, allowNull : false, unique : true},
    director : {type : DataTypes.STRING, allowNull : false},
    duration : {type: DataTypes.INTEGER, allowNull : false},
    genre : {type : DataTypes.STRING, allowNull : false },
    description : {type : DataTypes.STRING}
})

