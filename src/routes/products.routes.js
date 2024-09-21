import { Router } from 'express'
import { getProducts, getProductById } from '../controllers/products.controller.js'

const rutas = Router()
// rutas.get('/paginacion', getUsersPagination)
rutas.get('/', getProducts)
rutas.get('/:id', getProductById)

export default rutas
