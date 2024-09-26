import { Router } from 'express'
import { getUserById, getUsers } from '../controllers/users.controller.js'
import { authentication } from '../middlewares/auth.middleware.js'

const rutas = Router()
rutas.get('/', authentication, getUsers)
rutas.get('/:id',authentication, getUserById)

export default rutas
