// importamos funciones
import { DataTypes } from 'sequelize';
import { sequelize } from '../database/database.js';




// Armamos el esquema de la tabla, exportandolo en una constante (esta constante luego será importada y ejecutada por index.js)

export const M_medicos = sequelize.define('medicos', {
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
    matricula: { type: DataTypes.STRING },
  
    horariosAtt: { type: DataTypes.ARRAY(DataTypes.JSON), defaultValue: []}
  /*  idEspecializaciones: FOREIGN KEY; RELACION CON TABLA EXTERNA */
  
   

    

}, {
    timestamps: true,
    // timestamps true agrega 2 campos extra que son marcas de auditoria, true es por defecto
});

export const M_especializaciones = sequelize.define('especializaciones', {
    // EJEMPLO
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    especializacion: {           type: DataTypes.STRING    },  
}, {        
    timestamps: true,
    // timestamps true agrega 2 campos extra que son marcas de auditoria, true es por defecto
});


/////////////// CONEXION
export const MedicosEspecializaciones = sequelize.define('medicosespecializaciones', {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    medicoId: {
      type: DataTypes.INTEGER,
      references: {
        model: M_medicos, 
        key: 'id',
        onDelete: 'RESTRICT', // Add this line to enforce the constraint
      }
    },
    especializacioneId: {
      type: DataTypes.INTEGER,
      references: {
        model: M_especializaciones, 
        key: 'id',
        onDelete: 'RESTRICT', // Add this line to enforce the constraint
      }
    }
  });
  M_medicos.belongsToMany(M_especializaciones, { through: MedicosEspecializaciones, onDelete: 'RESTRICT' });
  M_especializaciones.belongsToMany(M_medicos, { through: MedicosEspecializaciones, onDelete: 'RESTRICT' });
