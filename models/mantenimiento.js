import { DataTypes } from 'sequelize';
import  db from '../database/db.js';

const Mantenimiento = db.define('mantenimiento', {
    idActivo: DataTypes.STRING,
    nombreActivo: DataTypes.STRING,
    fechaMantenimiento: DataTypes.STRING,
  });
  
  
  export default Mantenimiento;