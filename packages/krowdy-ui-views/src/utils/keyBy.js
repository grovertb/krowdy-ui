const keyBy = (arr, key) => arr.reduce((acc, el) => {
  acc[el[key]] = el

  return acc
}, {})

export default keyBy
