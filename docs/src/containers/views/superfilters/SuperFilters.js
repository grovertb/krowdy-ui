import React, { useState } from 'react'
import { makeStyles, FormControlLabel, Checkbox } from '@krowdy-ui/core'
import { SuperFilters, CardCandidateRanking } from '@krowdy-ui/views'
import { filtersData, categoryFilters, filterTypes } from './data'

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
        count: Math.round(Math.random() * 1231),
        label: `${id} - ${key}`
      }
    })
    resolve(newItems)
  }, time)
})

const candidates = [ {
  _id      : 1,
  firstName: 'Luis Alfredo',
  lastName : 'Sullca Huaracca'
}, {
  _id      : 2,
  firstName: 'Anderson',
  lastName : 'Sinche'
}, {
  _id      : 3,
  firstName: 'Mario',
  lastName : 'Fishman'
}, {
  _id      : 4,
  firstName: 'Piero',
  lastName : 'Rodriguez'
} ]

export default function () {
  const classes = useStyles()

  const [ filters, setFilters ] = useState(filtersData)
  // const [ filters, setFilters ] = useState([])

  const [ categoryItems, setCategoryItems ] = useState([])
  const [ currenCategory, setCurrentCategory ] = useState()

  const _handleChangeFilters = (updatedFilters) => {
    setFilters(updatedFilters)
  }

  const _handleLoadMoreCategoryItems = async (key, values) => {
    if(key === 'email') {
      setCategoryItems(values)
    } else {
      const newItems = await getNewCategoryItemsAsync(key)
      setCategoryItems(prev => [ ...prev, ...newItems ])
    }
  }

  const _handleSelectCategoryFilter = (category, values) => {
    if(category === 'email') {
      setCurrentCategory(category)
      setCategoryItems(values)
    } else if(currenCategory !== category) {
      setCurrentCategory(category)
      setCategoryItems([])
    }
  }

  return (
    <div style={{ display: 'flex', maxHeight: 700, width: '100%' }}>
      <SuperFilters
        categoryItems={categoryItems}
        classes={{
          root: classes.root
        }}
        filterGroups={categoryFilters}
        filters={filters}
        filterTypes={filterTypes}
        hasNextPage={categoryItems.length < 100 ? true : false}
        headerHomeComponent={<HeaderHomeComponent />}
        loadMoreCategoryItems={_handleLoadMoreCategoryItems}
        onChangeFilters={_handleChangeFilters}
        onSelectCategoryFilter={_handleSelectCategoryFilter}
        title='Todos las compras'
        uniqueFilter />
      <div style={{ flex: 1 }}>
        {candidates.map((candidate) => (
          <CardCandidateRanking
            firstName={candidate.firstName}
            key={candidate._id}
            lastName={candidate.lastName} />
        ))}
      </div>
    </div>
  )
}
