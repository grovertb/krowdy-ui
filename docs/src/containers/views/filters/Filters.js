import React, { useState } from 'react'
import { makeStyles, FormControlLabel, Checkbox } from '@krowdy-ui/core'
import { Filters } from '@krowdy-ui/views'

const groupedFilters = [
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
        type : 'generic'
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
        type : 'generic'
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

const filterTypes = [
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
  }
]

const useStyles = makeStyles({
  root: {
    maxWidth: 300
  }
})

const HeaderHomeComponent = () => (
  <div>
    <FormControlLabel
      control={
        <Checkbox color='primary' size='small' value='checked' />
      }
      label='Mostrar solo los candidatos postulantes' />
  </div>
)

const getNewCategoryItemsAsync = async (key, time = 1000) => new Promise(resolve => {
  setTimeout(() => {
    const newItems = new Array(15).fill(true).map(() => {
      const id = Math.round(Math.random() * 1231).toString()

      return {
        _id  : id,
        label: `${id} - ${key}`
      }
    })
    resolve(newItems)
  }, time)
})

export default function () {
  const classes = useStyles()

  const [ appliedFilters, setAppliedFilters ] = useState([])
  const [ categoryItems, setCategoryItems ] = useState([])
  const [ currenCategory, setCurrentCategory ] = useState()

  const _handleChangeFilters = (updatedFilters) => {
    setAppliedFilters(updatedFilters)
  }

  const _handleLoadMoreCategoryItems = async (key) => {
    const newItems = await getNewCategoryItemsAsync(key)
    setCategoryItems(prev => [ ...prev, ...newItems ])
  }

  const _handleSelectCategoryFilter = (category) => {
    if(currenCategory !== category) {
      setCurrentCategory(category)
      setCategoryItems([])
    }
  }

  return (
    <Filters
      categoryItems={categoryItems}
      classes={{
        root: classes.root
      }}
      filterGroups={groupedFilters}
      filters={appliedFilters}
      filterTypes={filterTypes}
      hasNextPage={categoryItems.length < 100 ? true : false}
      headerHomeComponent={<HeaderHomeComponent />}
      loadMoreCategoryItems={_handleLoadMoreCategoryItems}
      onChangeFilters={_handleChangeFilters}
      onSelectCategoryFilter={_handleSelectCategoryFilter}
      title='Todos las compras' />
  )
}
