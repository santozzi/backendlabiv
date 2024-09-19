import { request, response } from 'express'
import { getPokemonByIdModel, getPokemonsModel } from '../models/pokemons.model.js'

const getPokemonById = async (req = request, res = response) => {
  const { id } = req.params
  console.log('este es el id', id)

  try {
    const data = await getPokemonByIdModel(id)
    res.status(200).json({
      msg: 'Ok',
      data
    })
  } catch (error) {
    res.status(400).json({
      msg: error,
      data: []
    })
  }
}

const getPokemons = async (req = request, res = response) => {
  // TODO: verificar si el body es un usuario

  try {
    const data = await getPokemonsModel()
    console.log('estoy en el controller', data.data)

    res.status(200).json({
      msg: 'Ok',
      data: data.data
    })
  } catch (error) {
    res.status(400).json({
      msg: error,
      data: []
    })
  }
}
/* const getUsersPagination = async (req = request, res = response) => {
  // TODO: verificar si el body es un usuario
  const { page, limit } = req.query
  console.log('estoy con la query:', page, ' ', limit)

  try {
    const data = await getUsersModel(page, limit)
    res.status(200).json({
      msg: 'Ok',
      data
    })
  } catch (error) {
    res.status(400).json({
      msg: error,
      data: []
    })
  }
}
*/
export { getPokemonById, getPokemons }
