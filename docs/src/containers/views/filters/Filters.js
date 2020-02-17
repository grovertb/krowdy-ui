import { makeStyles, FormControlLabel, Checkbox } from '@krowdy-ui/core'
import { Filters } from '@krowdy-ui/views'
import React, { useState } from 'react'

const generateId = () => Math.round(Math.random() * 8798798).toString()

const useStyles = makeStyles({
  root: {
    // maxWidth: 400
  }
})

const parentGroupKeys = {
  0: {
    _id  : '0',
    label: 'Sobre el proceso'
  },
  1: {
    _id  : '1',
    label: 'Sobre el candidato'
  },
  2: {
    _id  : '2',
    label: 'Sobre la tarea'
  },
  3: {
    _id  : '3',
    label: 'Sobre el candidato'
  },
  4: {
    _id  : '4',
    label: 'Datos de la empresa'
  }
}

const datatables = [
  {
    _id           : generateId(),
    key           : 'codigoproceso',
    label         : 'Código proceso',
    parentGroupKey: 0,
    source        : 'proceso',
    typeFilter    : 'generic'
  },
  {
    _id           : generateId(),
    key           : 'nombreproceso',
    label         : 'Nombre del proceso',
    parentGroupKey: 0,
    source        : 'nombreproceso',
    typeFilter    : 'generic'
  },
  {
    _id           : generateId(),
    key           : 'estadoproceso',
    label         : 'Estado del proceso',
    parentGroupKey: 0,
    source        : 'estadoproceso',
    typeFilter    : 'category'
  },
  {
    _id           : generateId(),
    key           : 'estrategabusqueda',
    label         : 'Estratega de busqueda',
    parentGroupKey: 0,
    source        : 'estraproceso',
    typeFilter    : 'category'
  },
  {
    _id           : generateId(),
    key           : 'nombreproceso',
    label         : 'Nombre del proceso',
    parentGroupKey: 0,
    source        : 'nombreproceso',
    typeFilter    : 'generic'
  },
  {
    _id           : generateId(),
    key           : 'creacion',
    label         : 'F. de creacion',
    parentGroupKey: 0,
    source        : 'creacion',
    typeFilter    : 'date'
  },
  {
    _id           : generateId(),
    key           : 'reproceso',
    label         : 'Reproceso',
    parentGroupKey: 0,
    source        : 'proceso',
    typeFilter    : 'number'
  },
  // Sobre el candidato
  {
    _id           : generateId(),
    key           : 'nombrecandidato',
    label         : 'Nombre candidato',
    parentGroupKey: 1,
    source        : 'nombrecand',
    typeFilter    : 'generic'
  },
  {
    _id           : generateId(),
    key           : 'telefonocandidato',
    label         : 'Telefono candidato',
    parentGroupKey: 1,
    source        : 'candidato',
    typeFilter    : 'number'
  },
  {
    _id           : generateId(),
    key           : 'business_id',
    label         : 'ID',
    parentGroupKey: 4,
    source        : 'company',
    typeFilter    : 'number'
  },
  {
    _id           : generateId(),
    key           : 'nombre_empresa',
    label         : 'Nombre empresa',
    parentGroupKey: 4,
    source        : 'company',
    typeFilter    : 'generic'
  },
  {
    _id           : generateId(),
    key           : 'lider_sac',
    label         : 'Lider SAC',
    parentGroupKey: 4,
    source        : 'company',
    typeFilter    : 'category'
  },
  {
    _id           : generateId(),
    key           : 'ruc',
    label         : 'RUC',
    parentGroupKey: 4,
    source        : 'company',
    typeFilter    : 'number'
  },
  {
    _id           : generateId(),
    key           : 'tipoempresa',
    label         : 'Tipo de empresa',
    parentGroupKey: 4,
    source        : 'company',
    typeFilter    : 'category'
  },
  {
    _id           : generateId(),
    key           : 'inudstriatype',
    label         : 'Industria',
    parentGroupKey: 4,
    source        : 'company',
    typeFilter    : 'category'
  },
  {
    _id           : generateId(),
    key           : 'tamanoempresa',
    label         : 'TamangetFilterConfigValueo de la empresa',
    parentGroupKey: 4,
    source        : 'company',
    typeFilter    : 'category'
  },
  {
    _id           : generateId(),
    key           : 'tamanoempresa',
    label         : 'Tamano de la empresa',
    parentGroupKey: 4,
    source        : 'company',
    typeFilter    : 'category'
  },
  {
    _id           : generateId(),
    key           : 'tamanoempresa',
    label         : 'Tamano de la empresa',
    parentGroupKey: 4,
    source        : 'company',
    typeFilter    : 'category'
  },
  {
    _id           : generateId(),
    key           : 'tamanoempresa',
    label         : 'Tamano de la empresa',
    parentGroupKey: 4,
    source        : 'company',
    typeFilter    : 'category'
  },
  {
    _id           : generateId(),
    key           : 'tamanoempresa',
    label         : 'Tamano de la empresa',
    parentGroupKey: 4,
    source        : 'company',
    typeFilter    : 'category'
  },
  {
    _id           : generateId(),
    key           : 'tamanoempresa',
    label         : 'Tamano de la empresa',
    parentGroupKey: 4,
    source        : 'company',
    typeFilter    : 'category'
  },
  {
    _id           : generateId(),
    key           : 'tamanoempresa',
    label         : 'Tamano de la empresa',
    parentGroupKey: 4,
    source        : 'company',
    typeFilter    : 'category'
  }
]

const getGroupedFilters = () => {
  const objGrouped = datatables.reduce((obj, x) => {
    if(obj[x.parentGroupKey])
      obj[x.parentGroupKey].children.push(x)
    else
      obj[x.parentGroupKey] = {
        ...parentGroupKeys[x.parentGroupKey],
        children: [ x ]
      }

    return obj
  }, {})

  return Object.values(objGrouped)
}

const groupedFilters = getGroupedFilters()

const HeaderHomeComponent = () => (
  <div>
    <FormControlLabel control={<Checkbox color='primary' size='small' value='checked' />} label='Mostrar solo los candidatos postulantes' />
  </div>
)

export default function () {
  const classes = useStyles()

  const [ appliedFilters, setAppliedFilters ] = useState([])
  console.log('Dante: appliedFilters', appliedFilters)

  // handled on update or add filter
  const _handleApplyFilter = (newFilter) => {
    setAppliedFilters(prev => [ ...prev, newFilter ])
  }

  return (
    <div style={{
      maxHeight: 500,
      width    : '75%'
    }}>
      <Filters
        classes={{
          root: classes.root
        }}
        filterGroups={groupedFilters}
        filters={appliedFilters}
        headerHomeComponent={<HeaderHomeComponent />}
        onClickApply={_handleApplyFilter}
        title='Todos las compras' />
    </div>
  )
}
