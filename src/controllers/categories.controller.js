import { request, response } from 'express'
import { getCategoryByIdModel, getCategoriesModel } from '../models/categories.model.js'
import { InvalidNumberLimitException } from '../exceptions/InvalidNumberLimitException.js'
import { InvalidNumberPageException } from '../exceptions/InvalidNumberPageException.js'

// devuelve un listado de categorias, sin filtrar
const getCategories = async (req = request, res = response) => {
  try {
    const { page, limit, nombre } = req.query
    const data = await getCategoriesModel(page, limit, nombre)

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

// devuelve una categoria por nombre
const getCategoryById = async (req = request, res = response) => {
  const { id } = req.params
  try {
    const data = await getCategoryByIdModel(id)

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

export { getCategories, getCategoryById }
