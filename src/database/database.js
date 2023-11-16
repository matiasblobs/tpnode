// importar funcion desde modulo
import Sequelize from "sequelize";

// nombre de base de datos, usuario, contraseña
export const sequelize = new Sequelize("tpfinal", "postgres", "1234", {
    host: "localhost",
    dialect: "postgres",
});  
