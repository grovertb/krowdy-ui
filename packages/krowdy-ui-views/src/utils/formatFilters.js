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

const formatValue = (type, value) => {
  switch (type) {
    case 'date':
      return formatDate(value)
    case 'number':
      return Number(value)
    case 'category':
      return typeof value === 'object' ? value._id  : value
    default:
      return value
  }
}

export default function formatFilters(filters) {
  return filters.map((filter) => {
    const { key, operator, type, value, children = [] } = filter

    const valueFilter =  Array.isArray(value) ? value.map(val => formatValue(type, val)) : formatValue(type, value)

    let valueFromOperator = {}

    switch (operator) {
      case '$range':
        valueFromOperator = {
          $gte: valueFilter[0],
          $lte: valueFilter[1]
        }

        break
      case '$regex':
      case '$unregex':
        valueFromOperator = {
          $regex: formatRegex(value)
        }

        break
      default:
        valueFromOperator = {
          [operator]: valueFilter
        }

        break
    }

    const response = {
      [key]: valueFromOperator
    }

    if(children.length) {
      const child =  formatFilters(children)

      return {
        $and: [
          {
            $or  : child,
            [key]: valueFromOperator
          }
        ]
      }
    }

    return response
  })
}
