import { Router } from 'express'
import { getCarts, getCartById } from '../controllers/carts.controller.js'

const rutas = Router()
rutas.get('/', getCarts)
rutas.get('/:id', getCartById)

export default rutas
