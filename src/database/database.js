// importar funcion desde modulo
import Sequelize from "sequelize";

// nombre de base de datos, usuario, contraseña
export const sequelize = new Sequelize("tpfinal", "fl0user", "KsN4tLl2CoDj", {
    host: "ep-sparkling-leaf-49395978.ap-southeast-1.aws.neon.fl0.io",
    dialect: "postgres",
});  
