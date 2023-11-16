// importamos funciones
import { DataTypes } from 'sequelize';
import { sequelize } from '../database/database.js';




// Armamos el esquema de la tabla, exportandolo en una constante (esta constante luego será importada y ejecutada por index.js)

export const M_pacientes = sequelize.define('pacientes', {
    // 
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    
    // datos personales
    nombre: { type: DataTypes.STRING },
    apellido: { type: DataTypes.STRING },
    dni: { type: DataTypes.INTEGER },
    direccion: { type: DataTypes.STRING },
    telefono: { type: DataTypes.STRING },
    celular: { type: DataTypes.STRING },
    fechanac: { type: DataTypes.DATEONLY  },
    fechaalta: { type: DataTypes.DATEONLY },

    //
    antecedentes: { type: DataTypes.STRING },

    // Foreign Key
    idObrasocial: {
        type: DataTypes.INTEGER,
        references: {
            model:'obrassociales',
            key: 'id'
        }, 
        foreignKey: true 
    } 

}, {
    timestamps: true,
    // timestamps true agrega 2 campos extra que son marcas de auditoria, true es por defecto
});