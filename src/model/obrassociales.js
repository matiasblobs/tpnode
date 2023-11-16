 // importamos funciones
 import { DataTypes } from 'sequelize';
 import { sequelize } from '../database/database.js';

 // Armamos el esquema de la tabla, exportandolo en una constante (esta constante luego será importada y ejecutada por index.js)

 export const M_obrassociales = sequelize.define('obrassociales', {
    // EJEMPLO
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    obrasocial: {           type: DataTypes.STRING    },  
}, {        
    timestamps: true,
    // timestamps true agrega 2 campos extra que son marcas de auditoria, true es por defecto
});