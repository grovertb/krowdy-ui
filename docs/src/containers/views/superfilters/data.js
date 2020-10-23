/* , */

export const filtersData = [ {
  children: [ {
    key          : 'email',
    label        : 'Candidato',
    operator     : '$in',
    operatorLabel: 'es',
    optionIndex  : 0,
    reference    : null,
    type         : 'list',
    value        : [ {
      _id  : 'francisco_irrivari@hotmail.com',
      count: null,
      label: 'Francisco Irrivari'
    }, {
      _id  : 'luis.sullca.h@uni.pe',
      count: null,
      label: 'Luis Sullca'
    } ]
  } ],
  key     : '1',
  operator: 'none',
  type    : 'include'
}, {
  children: [ {
    key          : 'email',
    label        : 'Candidato',
    operator     : '$nin',
    operatorLabel: 'no es',
    optionIndex  : 1,
    reference    : null,
    type         : 'list',
    value        : [ {
      _id  : 'jps_sinarahua@hotmail.com',
      count: null,
      label: 'Juan Segundo'
    }, {
      _id  : 'Juanito@gmail.com',
      count: null,
      label: 'Juanito rodriguez'
    }  ]
  } ],
  key     : '2',
  operator: 'none',
  type    : 'exclude'
}, {
  children: [
    {
      _id     : '5f2c81f03d3b642268b6c52d',
      children: [
        {
          _id     : '5f2c81f83e6e27c6c00bd8c5',
          children: [
            {
              _id          : '5f2c8200a5bab8cb0501b31a',
              key          : 'estadoproceso',
              label        : 'Estado del proceso Estado del proceso Estado del proceso',
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
            } ],
          expanded     : true,
          key          : 'nombreproceso',
          label        : 'Nombre del proceso',
          operator     : '$eq',
          operatorLabel: 'Contiene exactamente',
          optionIndex  : 0,
          type         : 'keyword',
          value        : [
            'Valor filtro 1',
            'Valor filtro 2'
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
            'Valor filtro 3',
            'Valor filtro 4'
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
  key     : '4',
  operator: 'none',
  type    : 'default'
} ]
// export const filtersData = []

export const categoryFilters = [
  {
    _id     : '0',
    children: [
      {
        _id  : '775428719',
        key  : 'codigoproceso',
        label: 'Código proceso',
        type : 'generic'
      },
      {
        _id  : '200168138',
        key  : 'nombreproceso',
        label: 'Nombre del proceso',
        type : 'keyword'
      },
      {
        _id  : '577316053',
        key  : 'estadoproceso',
        label: 'Estado del proceso',
        type : 'category'
      },
      {
        _id  : '675041186',
        key  : 'estrategabusqueda',
        label: 'Estratega de búsqueda',
        type : 'category'
      },
      {
        _id  : '360067768',
        key  : 'nombreproceso',
        label: 'Nombre del proceso',
        type : 'keyword'
      },
      {
        _id  : '670448599',
        key  : 'creacion',
        label: 'F. de creación',
        type : 'date'
      },
      {
        _id  : '92689769',
        key  : 'reproceso',
        label: 'Reproceso',
        type : 'number'
      }
    ],
    label: 'Sobre el proceso'
  },
  {
    _id     : '1',
    children: [
      {
        _id  : '752458766',
        key  : 'nombrecandidato',
        label: 'Nombre candidato',
        type : 'generic'
      },
      {
        _id  : '607887274',
        key  : 'telefonocandidato',
        label: 'Teléfono candidato',
        type : 'number'
      }
    ],
    label: 'Sobre el candidato'
  },
  {
    _id     : '4',
    children: [
      {
        _id  : '114252713',
        key  : 'business_id',
        label: 'ID',
        type : 'number'
      },
      {
        _id  : '239886875',
        key  : 'nombre_empresa',
        label: 'Nombre empresa',
        type : 'generic'
      },
      {
        _id  : '150565629',
        key  : 'lider_sac',
        label: 'Lider SAC',
        type : 'category'
      },
      {
        _id  : '782221959',
        key  : 'ruc',
        label: 'RUC',
        type : 'number'
      },
      {
        _id  : '102371116',
        key  : 'tipoempresa',
        label: 'Tipo de empresa',
        type : 'category'
      },
      {
        _id  : '149580328',
        key  : 'inudstriatype',
        label: 'Industria',
        type : 'category'
      },
      {
        _id  : '729387838',
        key  : 'tamanoempresa',
        label: 'Tamaño de la empresa',
        type : 'number'
      }
    ],
    label: 'Datos de la empresa'
  }
]

export const filterTypes = [
  {
    __v         : 0,
    _id         : '5e46ee5c847d6f2bba55e128',
    createdAt   : '2020-02-14T19:00:44.279Z',
    initialValue: {
      first : '', // from
      second: '' // to
    },
    options: [
      {
        _id           : '5e46ee5c847d6f2bba55e129',
        label         : 'Es igual a',
        numberOfInputs: 1,
        operator      : '$eq'
      },
      {
        _id           : '5e46ee5c847d6f2bba55e12a',
        label         : 'No es igual a',
        numberOfInputs: 1,
        operator      : '$ne'
      },
      {
        _id           : '5e46ee5c847d6f2bba55e12b',
        label         : 'Es mayor que',
        numberOfInputs: 1,
        operator      : '$gt'
      },
      {
        _id           : '5e46ee5c847d6f2bba55e12c',
        label         : 'Es mayor o igual que',
        numberOfInputs: 1,
        operator      : '$gte'
      },
      {
        _id           : '5e46ee5c847d6f2bba55e12d',
        label         : 'Es menor que',
        numberOfInputs: 1,
        operator      : '$lt'
      },
      {
        _id           : '5e46ee5c847d6f2bba55e12e',
        label         : 'Es menor o igual que',
        numberOfInputs: 1,
        operator      : '$lte'
      },
      {
        _id           : '5e46ee5c847d6f2bba55e12f',
        label         : 'Está entre',
        numberOfInputs: 2,
        operator      : '$range'
      },
      {
        _id           : '5e46ee5c847d6f2bba55e130',
        label         : 'Es conocido',
        numberOfInputs: 0,
        operator      : '$ne'
      },
      {
        _id           : '5e46ee5c847d6f2bba55e131',
        label         : 'Es desconocido',
        numberOfInputs: 0,
        operator      : '$eq'
      }
    ],
    type     : 'number',
    updatedAt: '2020-02-14T19:00:44.279Z'
  },
  {
    __v         : 0,
    _id         : '5e46ee98852bf22be2c0bd8d',
    createdAt   : '2020-02-14T19:01:44.832Z',
    initialValue: {
      first : null, // from
      second: null // to
    },
    options: [
      {
        _id           : '5e46ee98852bf22be2c0bd8e',
        label         : 'Es igual a',
        numberOfInputs: 1,
        operator      : '$eq'
      },
      {
        _id           : '5e46ee98852bf22be2c0bd8f',
        label         : 'Es posterior a',
        numberOfInputs: 1,
        operator      : '$gt'
      },
      {
        _id           : '5e46ee98852bf22be2c0bd90',
        label         : 'Es anterior a',
        numberOfInputs: 1,
        operator      : '$lt'
      },
      {
        _id           : '5e46ee98852bf22be2c0bd91',
        label         : 'Está entre',
        numberOfInputs: 2,
        operator      : '$in'
      },
      {
        _id           : '5e46ee98852bf22be2c0bd92',
        label         : 'Es conocido',
        numberOfInputs: 0,
        operator      : '$ne'
      },
      {
        _id           : '5e46ee98852bf22be2c0bd93',
        label         : 'Es desconocido',
        numberOfInputs: 0,
        operator      : '$eq'
      }
    ],
    type     : 'date',
    updatedAt: '2020-02-14T19:01:44.832Z'
  },
  {
    __v         : 0,
    _id         : '5e46eebec3f5342c06b5d39c',
    createdAt   : '2020-02-14T19:02:22.137Z',
    initialValue: [],
    options     : [
      {
        _id           : '5e46eebec3f5342c06b5d39d',
        label         : 'Es cualquiera de',
        numberOfInputs: 1,
        operator      : '$in'
      },
      {
        _id           : '5e46eebec3f5342c06b5d39e',
        label         : 'Es cualquiera de',
        numberOfInputs: 1,
        operator      : '$nin'
      },
      {
        _id           : '5e46eebec3f5342c06b5d39f',
        label         : 'Es conocido',
        numberOfInputs: 0,
        operator      : '$ne'
      },
      {
        _id           : '5e46eebec3f5342c06b5d3a0',
        label         : 'Es desconocido',
        numberOfInputs: 0,
        operator      : '$eq'
      }
    ],
    type     : 'category',
    updatedAt: '2020-02-14T19:02:22.137Z'
  },
  {
    __v         : 0,
    _id         : '5e46eedbed5e312c30c3a904',
    createdAt   : '2020-02-14T19:02:51.578Z',
    initialValue: [],
    options     : [
      {
        _id           : '5e46eedbed5e312c30c3a905',
        label         : 'Contiene exactamente',
        numberOfInputs: 1,
        operator      : '$eq'
      },
      {
        _id           : '5e46eedbed5e312c30c3a906',
        label         : 'No contiene exactamente',
        numberOfInputs: 1,
        operator      : '$ne'
      },
      {
        _id           : '5e46eedbed5e312c30c3a907',
        label         : 'Es conocido',
        numberOfInputs: 0,
        operator      : '$ne'
      },
      {
        _id           : '5e46eedbed5e312c30c3a908',
        label         : 'Es desconocido',
        numberOfInputs: 0,
        operator      : '$eq'
      }
    ],
    type     : 'generic',
    updatedAt: '2020-02-14T19:02:51.578Z'
  },
  {
    __v         : 0,
    _id         : '5e46eedbed5e312c30c3a910',
    createdAt   : '2020-02-14T19:02:51.578Z',
    initialValue: [],
    options     : [
      {
        _id           : '5e46eedbed5e312c30c3a905',
        label         : 'Contiene exactamente',
        numberOfInputs: 1,
        operator      : '$eq'
      },
      {
        _id           : '5e46eedbed5e312c30c3a906',
        label         : 'No contiene exactamente',
        numberOfInputs: 1,
        operator      : '$ne'
      },
      {
        _id           : '5e46eedbed5e312c30c3a907',
        label         : 'Es conocido',
        numberOfInputs: 0,
        operator      : '$ne'
      },
      {
        _id           : '5e46eedbed5e312c30c3a908',
        label         : 'Es desconocido',
        numberOfInputs: 0,
        operator      : '$eq'
      }
    ],
    type     : 'keyword',
    updatedAt: '2020-02-14T19:02:51.578Z'
  },
  {
    __v         : 0,
    _id         : '5e46eebec3f5342c06b5d39c',
    createdAt   : '2020-02-14T19:02:22.137Z',
    initialValue: [],
    options     : [
      {
        _id           : '5e46eebec3f5342c06b5d39d',
        label         : 'Es',
        numberOfInputs: 1,
        operator      : '$in'
      },
      {
        _id           : '5e46eebec3f5342c06b5d39e',
        label         : 'No es',
        numberOfInputs: 1,
        operator      : '$nin'
      }
    ],
    type     : 'list',
    updatedAt: '2020-02-14T19:02:22.137Z'
  }
]
