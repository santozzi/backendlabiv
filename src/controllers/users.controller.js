import { request, response } from 'express'
import { getUsersByIdModel, getUsersModel } from '../models/user.model.js'

const getUsersById = async (req = request, res = response) => {
  const { id } = req.params
  console.log('este es el id', id)

  try {
    const data = await getUsersByIdModel(id)
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

const getUsers = async (req = request, res = response) => {
  // TODO: verificar si el body es un usuario

  try {
    const data = await getUsersModel()
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
const getUsersPagination = async (req = request, res = response) => {
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

export { getUsersById, getUsers, getUsersPagination }
