import { Router } from 'express'
import { getUsersById, getUsers, getUsersPagination } from '../controllers/users.controller.js'

const rutas = Router()
rutas.get('/paginacion', getUsersPagination)
rutas.get('/', getUsers)
rutas.get('/:id', getUsersById)

export default rutas
