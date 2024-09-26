import { Router } from 'express'
import { getProducts, getProductById } from '../controllers/products.controller.js'

const rutas = Router()
rutas.get('/', getProducts) // obtener todos los productos
rutas.get('/:id', getProductById) // obtener un producto por id

export default rutas
