// DESCARTADO REVISAR

// importamos funciones
import { DataTypes } from 'sequelize';
import { sequelize } from '../database/database.js';

import { M_especializaciones } from "./medicos.js";
import { M_medicos } from "./medicos.js";

  
  const relacionEspecializaciones = sequelize.define('relacionspecializaciones', {
    // This table represents the many-to-many relationship
    ModelAId: {
      type: DataTypes.INTEGER,
      references: {
        model: M_medicos,
        key: 'id',
      },
    },
    ModelBId: {
      type: DataTypes.INTEGER,
      references: {
        model: M_especializaciones,
        key: 'id',
      },
    },
  });
  
  // Set up the associations in the models
  //M_medicos.belongsToMany(M_especializaciones, { through: relacionEspecializaciones });
  M_especializaciones.belongsToMany(M_medicos, { through: relacionEspecializaciones });