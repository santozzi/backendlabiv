import { InvalidNumberPageException } from '../exceptions/InvalidNumberPageException.js'
import { InvalidNumberLimitException } from '../exceptions/InvalidNumberLimitException.js'
const paginador = (url, data, page, limit, filtro = '') => {
  return new Promise((resolve, reject) => {
    if ((page === undefined || page === null) && (limit !== undefined)) {
      page = 1
    }
    if (limit === undefined) {
      limit = 10
    }
    const count = data.length
    const pages = Math.ceil(count / limit)
    let info
    let result

    if (isNaN(limit)) {
      reject(new InvalidNumberLimitException('El límite debe ser un número'))
    } else if (limit <= 0) {
      reject(new InvalidNumberLimitException('El límite debe ser mayor que 0'))
    } else if (page === undefined || page === null) {
      info = {
        count,
        pages,
        next: `${url}?page=2&limit=${limit}${filtro}`,
        prev: null
      }
      const inicio = 0
      let fin = 1 * limit
      if (pages === 1) {
        fin = count - 1
      }
      const results = data.slice(inicio, fin)
      result = {
        info,
        results
      }
    } else if (isNaN(page)) {
      reject(new InvalidNumberPageException('La página debe ser un número'))
    } else if (page <= 0) {
      reject(new InvalidNumberPageException('La página debe ser mayor que 0'))
    } else if (page > pages) {
      reject(new InvalidNumberPageException('La página no puede ser mayor que el número de páginas'))
    } else {
      info = {
        count,
        pages,
        next:
          pages > page
            ? `${url}?page=${Number(page) + 1}&limit=${limit}${filtro}`
            : null,
        prev: page > 1 ? `${url}?page=${page - 1}&limit=${limit}${filtro}` : null
      }

      const inicio = (page - 1) * limit
      let fin = page * limit
      if (page === pages) {
        fin = count - 1
      }
      const results = data.slice(inicio, fin)
      result = {
        info,
        results
      }
    }
    resolve(result)
  })
}
export { paginador }
