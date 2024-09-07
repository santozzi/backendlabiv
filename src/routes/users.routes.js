import { Router } from 'express'
import { getUsersByLastnameModel, getUsersModel } from '../models/user.model'

const rutas = Router()

rutas.get('/', getEstrenos)
rutas.get('/:lastname', getPopulares)

export default rutas