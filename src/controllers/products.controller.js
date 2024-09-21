import { request, response } from 'express'
import { getProductByIdModel, getProductsModel } from '../models/products.model.js'

// devuelve un listado de productos, sin filtrar
const getProducts = async (req = request, res = response) => {
  // verificar si logro traer los productos
  try {
    const { page, limit } = req.query
    const data = await getProductsModel(page, limit)

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
      msg: error,
      data: []
    })
  }
}

export { getProducts, getProductById }
