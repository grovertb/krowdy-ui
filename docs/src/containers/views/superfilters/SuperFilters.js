import React, { useRef, useState } from 'react'
import { makeStyles, FormControlLabel, Checkbox, IconButton } from '@krowdy-ui/core'
import { SuperFilters, CardCandidateRanking } from '@krowdy-ui/views'
import { filtersData, categoryFilters, filterTypes, candidates } from './data'
import { Add as AddIcon, Remove as RemoveIcon } from '@material-ui/icons'

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

export default function () {
  const classes = useStyles()

  const ref = useRef()

  const [ filters, setFilters ] = useState(filtersData)

  // const [ filters, setFilters ] = useState([])

  const [ categoryItems, setCategoryItems ] = useState([])
  const [ currenCategory, setCurrentCategory ] = useState()

  const _handleChangeFilters = (updatedFilters) => {
    setFilters(updatedFilters)
  }

  const _handleLoadMoreCategoryItems = async (key) => {
    const newItems = await getNewCategoryItemsAsync(key)
    setCategoryItems(prev => [ ...prev, ...newItems ])
  }

  const _handleSelectCategoryFilter = (category, values) => {
    setCurrentCategory(category)
    if(values && values.length)
      setCategoryItems(values)
    else if(currenCategory !== category)
      setCategoryItems([])
  }

  const _handleClickCandidate = (candidate) => () => {
    console.log('_handleClickCandidate', candidate)
  }

  const _handleClickIncludeCandidate = (candidate) => (e) => {
    e.stopPropagation()

    setFilters(filters => ref.current.spliceCandidateInFilters(filters, candidate, 'include'))
  }
  const _handleClickExcludeCandidate = (candidate) => (e) => {
    e.stopPropagation()
    setFilters(filters => ref.current.spliceCandidateInFilters(filters, candidate, 'exclude'))
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
        ref={ref}
        title='Todos las compras'
        totalItems={3}
        uniqueFilter />
      <div style={{ flex: 1 }}>
        {candidates.map((candidate) => (
          <CardCandidateRanking
            action={(
              <div>
                <IconButton onClick={_handleClickExcludeCandidate(candidate)} size='small'>
                  <RemoveIcon fontSize='small' />
                </IconButton>
                <IconButton onClick={_handleClickIncludeCandidate(candidate)} size='small'>
                  <AddIcon fontSize='small' />
                </IconButton>
              </div>
            )}
            firstName={candidate.firstName}
            key={candidate._id}
            lastName={candidate.lastName}
            onClick={_handleClickCandidate(candidate)} />
        ))}
      </div>
    </div>
  )
}
