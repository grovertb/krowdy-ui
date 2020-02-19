export default function formatFilters(filters) {
  return filters.map(({ key, operator, type, value, children = [] }) => {
    const child = children.length ? { $and: [ { $or: formatFilters(children) } ] } :{}

    const valueFilter = type === 'date' ?
      Array.isArray(value) ?
        value.map(date => new Date(date)) : new Date(value) :
      value

    return {
      [key]: (operator === '$range' && Array.isArray(valueFilter)) ?
        {
          $gte: valueFilter[0],
          $lte: valueFilter[1],
          ...child
        } :
        {
          [operator]: valueFilter,
          ...child
        }
    }
  })
}
