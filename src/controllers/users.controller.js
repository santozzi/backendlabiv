import { request, response } from 'express'
import { getUserByIdModel, getUsersModel } from '../models/users.model.js'
import { InvalidNumberPageException } from '../exceptions/InvalidNumberPageException.js'
import { InvalidNumberLimitException } from '../exceptions/InvalidNumberLimitException.js'
import { InvalidUserIdException } from '../exceptions/InvalidUserIdException.js'

const getUserById = async (req = request, res = response) => {
  const { id } = req.params
  //comentario

  try {
    const data = await getUserByIdModel(id)
    res.status(200).json({
      msg: 'Ok',
      data
    })
  } catch (error) {
    if (error instanceof InvalidUserIdException) {
      res.status(404).json({
        msg: error.message,
        data: []
      })
    } else {
      res.status(500).json({
        msg: error.message,
        data: []
      })
    }
  }
}

const getUsers = async (req = request, res = response) => {
  try {
    const { page, limit, nombre } = req.query
    const data = await getUsersModel(page, limit, nombre)

    res.status(200).json({
      msg: 'Ok',
      data
    })
  } catch (error) {
    if (
      error instanceof InvalidNumberLimitException ||
      error instanceof InvalidNumberPageException
    ) {
      res.status(400).json({
        msg: error.message,
        data: []
      })
    } else {
      res.status(500).json({
        msg: error.message,
        data: []
      })
    }
  }
}

export { getUserById, getUsers }
