 // importamos funciones
 import { DataTypes } from 'sequelize';
 import { sequelize } from '../database/database.js';

 // Armamos el esquema de la tabla, exportandolo en una constante (esta constante luego será importada y ejecutada por index.js)

 export const M_clinicas = sequelize.define('clinicas', {
    // EJEMPLO
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    diagnostico: {           type: DataTypes.TEXT    },   
    acciones: {           type: DataTypes.TEXT    },  
    // Foreign Key
    idPaciente: {
        type: DataTypes.INTEGER,
        references: {
            model:'pacientes',
            key: 'id'
        }, 
        foreignKey: true 
    }, 
    // Foreign Key
    idMedico: {
        type: DataTypes.INTEGER,
        references: {
            model:'medicos',
            key: 'id'
        }, 
        foreignKey: true 
    } 


}, {        
    timestamps: true,
    // timestamps true agrega 2 campos extra que son marcas de auditoria, true es por defecto
});