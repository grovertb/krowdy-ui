export default function formatFilters(filters) {
  return filters.map(({ key, operator, filterType, value, children = [] }) => {
    const params = children.length ? { $and: formatFilters(children) } :{}

    return {
      [key]: {
        [operator]: filterType === 'date'? new Date(value) : value,
        ...params
      }
    }
  })
}
