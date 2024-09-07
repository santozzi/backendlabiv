import { Router } from 'express'
import { getUsersByLastname, getUsers } from '../controllers/users.controller.js'

const rutas = Router()

rutas.get('/', getUsers)
rutas.get('/:lastname', getUsersByLastname)

export default rutas
