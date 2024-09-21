import { request, response } from 'express'
import { getCategoryByNameModel, getCategoriesModel } from '../models/categories.model.js'

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
const getCategoryByName = async (req = request, res = response) => {
  const { name } = req.params
  try {
    const data = await getCategoryByNameModel(name)

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

export { getCategories, getCategoryByName }
