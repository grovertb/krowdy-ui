import XDate from 'xdate'

const formatDate = date => new XDate(date).toString('yyyy/MM/dd') // 2020/01/20

const formatRegex = value => {
  const vocals = [
    '[aáàãâä]',
    '[eéèêë]',
    '[iíìîï]',
    '[oóòõôö]',
    '[uúùûü]'
  ]

  let string = Array.isArray(value) ? value.join('|') : value

  vocals.forEach(list => {
    string = string.replace(new RegExp(list, 'gi'), list)
  })

  return new RegExp(`(^|)${string.replace(/ /g, '\\s*')}($|)\\b`, 'i')
}

export default function formatFilters(filters) {
  return filters.map(({ key, operator, type, value, children = [] }) => {
    const child = children.length ? { $and: [ { $or: formatFilters(children) } ] } : {}

    const valueFilter = type === 'date' ?
      Array.isArray(value) ?
        value.map(date => formatDate(date)) : formatDate(value) :
      value

    return {
      [key]: (operator === '$range') ?
        {
          $gte: valueFilter[0],
          $lte: valueFilter[1],
          ...child
        } :
        (operator === '$regex' || operator === '$unregex') ? {
          $regex: formatRegex(value),
          ...child
        } :
          {
            [operator]: valueFilter,
            ...child
          }
    }
  })
}
