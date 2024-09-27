import { request, response } from 'express'
import { getProductByIdModel, getProductsModel } from '../models/products.model.js'
import { InvalidPriceException } from '../exceptions/InvalidPriceException.js'
import { InvalidNumberPageException } from '../exceptions/InvalidNumberPageException.js'
import { InvalidNumberLimitException } from '../exceptions/InvalidNumberLimitException.js'

// devuelve un listado de productos, sin filtrar
const getProducts = async (req = request, res = response) => {
  // verificar si logro traer los productos
  try {
    const {minPrice, maxPrice, page, limit } = req.query
    const data = await getProductsModel(minPrice, maxPrice, page, limit)

    res.status(200).json({
      msg: 'Ok',
      data
    })
  } catch (error) {
    if ((error instanceof InvalidNumberLimitException) || (error instanceof InvalidNumberPageException) || (error instanceof InvalidPriceException)) {
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

// devuelve un producto por id
const getProductById = async (req = request, res = response) => {
  const { id } = req.params

  // verifico si puedo traer un producto por id
  try {
    const data = await getProductByIdModel(id)
    res.status(200).json({
      msg: 'Ok',
      data
    })
  } catch (error) {
    res.status(400).json({
      msg: error.message,
      data: []
    })
  }
}

export { getProducts, getProductById }
