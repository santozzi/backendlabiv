import { Router } from 'express'
import { getUserById, getUsers, getUsersPagination } from '../controllers/users.controller.js'

const rutas = Router()
rutas.get('/paginacion', getUsersPagination)
rutas.get('/', getUsers)
rutas.get('/:id', getUserById)

export default rutas
