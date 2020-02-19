import { formatFilters } from '@krowdy-ui/views'
export { default } from './routes'

const response = formatFilters([
  {
    _id     : '5e4d9738dbc934f64985babb',
    children: [
      {
        _id          : '5e4d9738dbc934f64985babb',
        key          : 'actualizacion',
        label        : 'F. de actualizacion',
        operator     : '$range',
        operatorLabel: 'Está entre',
        optionIndex  : 3,
        type         : 'date',
        value        : [
          '2017-06-06T02:00:00.000Z',
          '2020-02-28T20:00:00.000Z'
        ]
      }
    ],
    key          : 'creacion',
    label        : 'F. de creacion',
    operator     : '$range',
    operatorLabel: 'Está entre',
    optionIndex  : 3,
    type         : 'date',
    value        : [
      '2017-06-06T20:00:00.000Z',
      '2020-02-28T20:00:00.000Z'
    ]
  }
])

console.log('Grover: response', response)
