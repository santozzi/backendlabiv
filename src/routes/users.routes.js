import { Router } from 'express'
import { getUserById, getUsers } from '../controllers/users.controller.js'

const rutas = Router()
rutas.get('/', authentication, getUsers)
rutas.get('/:id', getUserById)

export default rutas
