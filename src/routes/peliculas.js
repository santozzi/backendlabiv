import { Router } from 'express';
import { getPeliculas, getEstrenos, getPopulares } from '../controllers/peliculas.js';

const rutas = Router();

rutas.get('/estrenos', getEstrenos);
rutas.get('/populares', getPopulares);

export default rutas;


 
