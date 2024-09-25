import { request, response } from 'express'
import { getCartByIdModel, getCartsModel } from '../models/carts.model.js'

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
    res.status(400).json({
      msg: error,
      data: []
    })
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
    res.status(400).json({
      msg: error,
      data: []
    })
  }
}

export { getCarts, getCartById }
