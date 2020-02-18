import { makeStyles, FormControlLabel, Checkbox } from '@krowdy-ui/core'
import { Filters } from '@krowdy-ui/views'
import React, { useState } from 'react'

const generateId = () => Math.round(Math.random() * 879898798).toString()

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

const categoryItems =[
  {
    _id  : '5e4c3b0dfc13ae1263000000',
    label: 'Kittie Osgarby alsdkfj laskdf a;lsdkff ;alksdfj ;laksdfj; laksjdfiasjdfijwoeiwj owiejfo iwjefiojjeiofwjioefjwiojfoejiwjiofwej'
  },
  {
    _id  : '5e4c3b0dfc13ae1263000001',
    label: 'Boy Buxcy'
  },
  {
    _id  : '5e4c3b0dfc13ae1263000002',
    label: 'Bibby Carriage'
  },
  {
    _id  : '5e4c3b0dfc13ae1263000003',
    label: 'Francklin Haresign'
  },
  {
    _id  : '5e4c3b0dfc13ae1263000004',
    label: 'Robb Mattiazzi'
  },
  {
    _id  : '5e4c3b0dfc13ae1263000005',
    label: 'Husein Abbett'
  },
  {
    _id  : '5e4c3b0dfc13ae1263000006',
    label: 'Curry Gieraths'
  },
  {
    _id  : '5e4c3b0dfc13ae1263000007',
    label: 'Edwina Cejka'
  },
  {
    _id  : '5e4c3b0dfc13ae1263000008',
    label: 'Fabio Santhouse'
  },
  {
    _id  : '5e4c3b0dfc13ae1263000009',
    label: 'Iris Hedges'
  },
  {
    _id  : '5e4c3b0dfc13ae126300000a',
    label: 'Vaughn Danell'
  },
  {
    _id  : '5e4c3b0dfc13ae126300000b',
    label: 'Amerigo Hesse'
  },
  {
    _id  : '5e4c3b0dfc13ae126300000c',
    label: 'Ephrem Mac Giolla Pheadair'
  },
  {
    _id  : '5e4c3b0dfc13ae126300000d',
    label: 'Mandie Andrea'
  },
  {
    _id  : '5e4c3b0dfc13ae126300000e',
    label: 'Ban Dalley'
  },
  {
    _id  : '5e4c3b0dfc13ae126300000f',
    label: 'Nefen Cockson'
  },
  {
    _id  : '5e4c3b0dfc13ae1263000010',
    label: 'Gloria Apfel'
  },
  {
    _id  : '5e4c3b0dfc13ae1263000011',
    label: 'Robinett Mantram'
  },
  {
    _id  : '5e4c3b0dfc13ae1263000012',
    label: 'Aarika Quinion alksdfjlas dfla sdflkaj dflkja dsflkajsdf lkajdfl kjalfkdsjl'
  },
  {
    _id  : '5e4c3b0dfc13ae1263000013',
    label: 'Georgetta Hosier'
  }
]

export default function () {
  const classes = useStyles()

  const [ appliedFilters, setAppliedFilters ] = useState([
    {
      _id        : '255424333',
      key        : 'codigoproceso',
      label      : 'Código proceso',
      operator   : '$ne',
      optionIndex: 1,
      typeFilter : 'generic',
      value      : [ 'HEMERON', 'DANTE' ]
    }
  ])

  const _handleChangeFilters = (updatedFilters) => {
    setAppliedFilters(updatedFilters)
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
        headerHomeComponent={<HeaderHomeComponent />}
        onChangeFilters={_handleChangeFilters}
        title='Todos las compras' />
    </div>
  )
}
