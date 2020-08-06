/* {
  // children: [ {
  //   key      : 'email',
  //   label    : 'Candidato',
  //   operator : '$in',
  //   reference: null,
  //   value    : [ {
  //     _id  : 'francisco_irrivari@hotmail.com',
  //     count: null,
  //     label: 'Francisco Irrivari'
  //   } ]
  // } ],
  children: [],
  key     : '1',
  operator: 'none',
  type    : 'include'
}, {
  // children: [ {
  //   key      : 'email',
  //   label    : 'Candidato',
  //   operator : '$nin',
  //   reference: null,
  //   value    : [ {
  //     _id  : 'jps_sinarahua@hotmail.com',
  //     count: null,
  //     label: 'Juan Pablo Segundo Sinarahua Terrones'
  //   } ]
  // } ],
  children: [],
  key     : '2',
  operator: 'none',
  type    : 'exclude'
}, */

export const filtersData = [ {
  children: [
    {
      _id     : '5f2c81f03d3b642268b6c52d',
      children: [
        {
          _id          : '5f2c81f83e6e27c6c00bd8c5',
          key          : 'nombreproceso',
          label        : 'Nombre del proceso',
          operator     : '$eq',
          operatorLabel: 'Contiene exactamente',
          optionIndex  : 0,
          type         : 'keyword',
          value        : [
            'waadwwa a',
            'awdwa'
          ]
        }
      ],
      expanded     : true,
      key          : 'codigoproceso',
      label        : 'Código proceso',
      operator     : '$eq',
      operatorLabel: 'Contiene exactamente',
      optionIndex  : 0,
      type         : 'generic',
      value        : [
        'awadadwa',
        'aaa'
      ]
    },
    {
      _id          : '5f2c8200a5bab8cb0501b31a',
      key          : 'estadoproceso',
      label        : 'Estado del proceso',
      operator     : '$in',
      operatorLabel: 'Es cualquiera de',
      optionIndex  : 0,
      type         : 'category',
      value        : [
        {
          _id  : '1043',
          count: 12,
          label: '1043 - estadoproceso'
        },
        {
          _id  : '485',
          count: 386,
          label: '485 - estadoproceso'
        }
      ]
    }
  ],
  key     : '3',
  operator: 'none',
  type    : 'default'
}, {
  children: [
    {
      _id     : '5f2c81f03d3b642268b6c52d',
      children: [
        {
          _id          : '5f2c81f83e6e27c6c00bd8c5',
          key          : 'nombreproceso',
          label        : 'Nombre del proceso',
          operator     : '$eq',
          operatorLabel: 'Contiene exactamente',
          optionIndex  : 0,
          type         : 'keyword',
          value        : [
            'waadwwa a',
            'awdwa'
          ]
        }
      ],
      expanded     : true,
      key          : 'codigoproceso',
      label        : 'Código proceso',
      operator     : '$eq',
      operatorLabel: 'Contiene exactamente',
      optionIndex  : 0,
      type         : 'generic',
      value        : [
        'awadadwa',
        'aaa'
      ]
    },
    {
      _id          : '5f2c8200a5bab8cb0501b31a',
      key          : 'estadoproceso',
      label        : 'Estado del proceso',
      operator     : '$in',
      operatorLabel: 'Es cualquiera de',
      optionIndex  : 0,
      type         : 'category',
      value        : [
        {
          _id  : '1043',
          count: 12,
          label: '1043 - estadoproceso'
        },
        {
          _id  : '485',
          count: 386,
          label: '485 - estadoproceso'
        }
      ]
    }
  ],
  key     : '3',
  operator: 'none',
  type    : 'default'
} ]

/*

*/
