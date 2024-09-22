import { Router } from 'express'
import { getAuthLogin } from '../controllers/auth.controller.js'

const rutas = Router()
rutas.post('/login', getAuthLogin)

export default rutas
