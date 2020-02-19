import { makeStyles, FormControlLabel, Checkbox } from '@krowdy-ui/core'
import { Filters } from '@krowdy-ui/views'
import React, { useState } from 'react'

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

const useStyles = makeStyles({
  root: {
    // maxWidth: 400
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

  const _handleChangeFilters = (updatedFilters) => {
    setAppliedFilters(updatedFilters)
  }

  const _handleLoadMoreCategoryItems = async (key) => {
    const newItems = await getNewCategoryItemsAsync(key)
    setCategoryItems(prev => [ ...prev, ...newItems ])
  }

  return (
    <div style={{
      // maxHeight: 1200,
      width: '75%'
    }}>
      <Filters
        categoryItems={categoryItems}
        classes={{
          root: classes.root
        }}
        filterGroups={groupedFilters}
        filters={appliedFilters}
        hasNextPage={categoryItems.length < 100 ? true : false}
        headerHomeComponent={<HeaderHomeComponent />}
        loadMoreCategoryItems={_handleLoadMoreCategoryItems}
        onChangeFilters={_handleChangeFilters}
        title='Todos las compras' />
    </div>
  )
}
