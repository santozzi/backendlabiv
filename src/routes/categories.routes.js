import { Router } from 'express'
import { getCategories, getCategoryByName } from '../controllers/categories.controller.js'

const rutas = Router()
rutas.get('/', getCategories)
rutas.get('/:name', getCategoryByName)

export default rutas