import { Router } from 'express';
import { getEmpleados, getEmpleado } from '../controllers/empleados.js';

const rutas = Router();

rutas.get('/', getEmpleados);
rutas.get('/:idEmpleado', getEmpleado); 

export default rutas;