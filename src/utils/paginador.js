const paginador = (url, data, page = 0, limit = 10) => {
  return new Promise((resolve, reject) => {
    const count = data.length
    const pages = Math.ceil(count / limit)
    let info
    let result

    if (page === 0) {
      info = {
        count,
        pages: 1,
        next: null,
        prev: null
      }
      result = {
        info,
        results: data
      }
    } else {
      info = {
        count,
        pages,
        next:
          pages !== page
            ? `${url}?page=${Number(page) + 1}&limit=${limit}`
            : null,
        prev: page > 1 ? `${url}?page=${page - 1}&limit=${limit}` : null
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
