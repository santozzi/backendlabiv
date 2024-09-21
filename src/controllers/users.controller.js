import { request, response } from 'express'
import { getUserByIdModel, getUsersModel } from '../models/users.model.js'

const getUserById = async (req = request, res = response) => {
  const { id } = req.params
  console.log('este es el id', id)

  try {
    const data = await getUserByIdModel(id)
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
    const { page, limit } = req.query

    const data = await getUsersModel(page, limit)
    console.log('estoy en el controller', data)

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

export { getUserById, getUsers, getUsersPagination }
