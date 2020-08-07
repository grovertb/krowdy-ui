import React, { useState } from 'react'
import { makeStyles, FormControlLabel, Checkbox, IconButton } from '@krowdy-ui/core'
import { SuperFilters, CardCandidateRanking } from '@krowdy-ui/views'
import { filtersData, categoryFilters, filterTypes } from './data'
import { Add as AddIcon, Remove as RemoveIcon } from '@material-ui/icons'
import { CategoryItem, Filter, Candidate, Event } from './interfaces'


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

const getNewCategoryItemsAsync = async (key: string, time = 1000): Promise<CategoryItem[]> => new Promise(resolve => {
  setTimeout(() => {
    const newItems: CategoryItem[] = new Array(15).fill(true).map(() => {
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
  email    : 'luis.sullca.h@uni.pe',
  firstName: 'Luis Alfredo',
  lastName : 'Sullca Huaracca'
}, {
  _id      : 2,
  email    : 'anderson@gmail.com',
  firstName: 'Anderson',
  lastName : 'Sinche'
}, {
  _id      : 3,
  email    : 'mario@gmail.com',
  firstName: 'Mario',
  lastName : 'Fishman'
}, {
  _id      : 4,
  email    : 'piero@gmail.com',
  firstName: 'Piero',
  lastName : 'Rodriguez'
} ]

export default function () {
  const classes = useStyles()

  const [ filters, setFilters ] = useState<Filter[]>(filtersData)
  // const [ filters, setFilters ] = useState([])

  const [ categoryItems, setCategoryItems ] = useState<CategoryItem[]>([])
  const [ currenCategory, setCurrentCategory ] = useState<string>()

  const _handleChangeFilters = (updatedFilters: Filter[]) => {
    setFilters(updatedFilters)
  }

  const _handleLoadMoreCategoryItems = async (key:string, values: CategoryItem[]) => {
    const newItems: CategoryItem[] = await getNewCategoryItemsAsync(key)
    setCategoryItems(prev => [ ...prev, ...newItems ])
  }

  const _handleSelectCategoryFilter = (category: string, values: any[]) => {
    setCurrentCategory(category)
    if(values && values.length) {
      setCategoryItems(values)
    } else if(currenCategory !== category) {
      setCategoryItems([])
    }
  }

  const _handleClickCandidate = (candidate: Candidate) => () => {
    console.log('_handleClickCandidate', candidate)
  }
  const _handleClickIncludeCandidate = (candidate:Candidate) => (e: Event) => {
    e.stopPropagation()
    setFilters((filters: Filter[]) => filters.map((groupFilter) => {
      if(groupFilter.type === 'include') return ({
        ...groupFilter,
        children: (groupFilter.children || []).map((filter) => {
          const { key, value } = filter
          if(key === 'email' && !value.some(({ _id }:{ _id: string}) => _id === candidate.email))
            return ({
              ...filter,
              value: value.concat({
                _id  : candidate.email,
                count: null,
                label: candidate.firstName
              })
            })

          return filter
        })
      })

      return groupFilter
    }))
  }
  const _handleClickExcludeCandidate = (candidate: Candidate) => (e: Event) => {
    e.stopPropagation()
    setFilters((filters: Filter[]) => filters.map((groupFilter) => {
      if(groupFilter.type === 'exclude') return ({
        ...groupFilter,
        children: (groupFilter.children || []).map((filter) => {
          const { key, value } = filter
          if(key === 'email' && !value.some(({ _id }: { _id: string}) => _id === candidate.email))
            return ({
              ...filter,
              value: value.concat({
                _id  : candidate.email,
                count: null,
                label: candidate.firstName
              })
            })

          return filter
        })
      })

      return groupFilter
    }))
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
