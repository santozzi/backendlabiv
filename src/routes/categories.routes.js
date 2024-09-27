import { Router } from 'express'
import { getCategories, getCategoryById } from '../controllers/categories.controller.js'

const rutas = Router()
rutas.get('/', getCategories)
rutas.get('/:id', getCategoryById)

export default rutas
