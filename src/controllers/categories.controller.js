import { request, response } from 'express'
import { getCategoryByIdModel, getCategoriesModel } from '../models/categories.model.js'

// devuelve un listado de categorias, sin filtrar
const getCategories = async (req = request, res = response) => {
  try {
    const { page, limit } = req.query
    const data = await getCategoriesModel(page, limit)

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
    res.status(400).json({
      msg: error,
      data: []
    })
  }
}

export { getCategories, getCategoryById }
