import { request, response } from 'express'
import { getCartByIdModel, getCartsModel } from '../models/carts.model.js'
import { InvalidUserIdException } from '../exceptions/InvalidUserIdException.js'
import { InvalidNumberPageException } from '../exceptions/InvalidNumberPageException.js'
import { InvalidNumberLimitException } from '../exceptions/InvalidNumberLimitException.js'

// devuelve un listado de carros, sin filtrar
const getCarts = async (req = request, res = response) => {
  try {
    const { userId, page, limit } = req.query
    const data = await getCartsModel(userId, page, limit)

    res.status(200).json({
      msg: 'Ok',
      data
    })
  } catch (error) {
    if ((error instanceof InvalidNumberLimitException) || (error instanceof InvalidNumberPageException)) {
      res.status(400).json({
        msg: error.message,
        data: []
      })
    } else {
      res.status(500).json({
        msg: 'Internal Server Error',
        data: []
      })
    }
  }
}

// devuelve un carro por id
const getCartById = async (req = request, res = response) => {
  const { id } = req.params
  try {
    const data = await getCartByIdModel(id)

    res.status(200).json({
      msg: 'Ok',
      data
    })
  } catch (error) {
    if ((error instanceof InvalidNumberLimitException) || (error instanceof InvalidNumberPageException)) {
      res.status(400).json({
        msg: error.message,
        data: []
      })
    } else {
      res.status(500).json({
        msg: 'Internal Server Error',
        data: []
      })
    }
  }
}

export { getCarts, getCartById }
