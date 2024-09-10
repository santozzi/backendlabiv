import { Router } from 'express'
import { getPokemonById, getPokemons } from '../controllers/pokemons.controller.js'

const rutas = Router()
//rutas.get('/paginacion', getUsersPagination)
rutas.get('/', getPokemons)
rutas.get('/:id', getPokemonById)

export default rutas
