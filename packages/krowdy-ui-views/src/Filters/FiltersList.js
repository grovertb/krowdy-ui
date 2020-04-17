import React, { useMemo, useState } from 'react'
import { List, ListItem, ListItemText, ListSubheader, makeStyles } from '@krowdy-ui/core'
import Search from '@krowdy-ui/views/Search'
import tilderize from '../utils/tilderize'
import escapeRegexp from '../utils/escapeRegexp'

export const useStyles = makeStyles((theme) => ({
  filtersList: {
    overflow  : 'auto',
    paddingTop: 0
  },
  listItem: {
    '&:hover': {
      background: '#F3FBFF',
      color     : theme.palette.primary[500]
    },
    color     : theme.palette.grey[700],
    cursor    : 'pointer',
    fontSize  : 12,
    lineHeight: '16px',
    padding   : theme.spacing(1, 1.5)
  },
  listSection: {
    backgroundColor: theme.palette.background.paper
  },
  listSubheader: {
    borderBottom     : '1px solid',
    borderBottomColor: theme.palette.grey[300],
    color            : theme.palette.grey[800],
    fontSize         : 12,
    fontWeight       : 'bold',
    lineHeight       : '20px',
    marginBottom     : theme.spacing(0.5),
    marginLeft       : theme.spacing(1.5),
    marginRight      : theme.spacing(1.5),
    padding          : 0,
    paddingBottom    : theme.spacing(0.5)
  },
  notFound: {
    '& p': {
      color     : theme.palette.grey[500],
      fontWeight: 'bold'
    },
    alignItems   : 'center',
    display      : 'flex',
    flexDirection: 'column',
    padding      : theme.spacing(2.4)
  },
  searchFiltersContainer: {
    padding: theme.spacing(1.5)
  },
  ul: {
    backgroundColor: theme.palette.background.paper,
    padding        : 0
  }
}), { name: 'KrowdyFilterList' })

const FiltersList = React.memo((props) => {
  const {
    filterGroups,
    filters,
    uniqueFilter,
    onClickItem
  } = props

  const classes = useStyles()
  const [ search, setSearch ] = useState('')

  const searchInGroups = (filterGroups, search) => {
    if(!search) return filterGroups
    const escapedText = tilderize(escapeRegexp(search))
    const searchTerm = new RegExp(escapedText, 'i')

    return filterGroups.map(filterGroup => {
      const filtersSearched = filterGroup.children.filter(filter => searchTerm.test(filter.label))

      if(filtersSearched.length)
        return {
          _id     : filterGroup._id,
          children: filtersSearched,
          label   : filterGroup.label
        }

      return null
    }).filter(Boolean)
  }

  const filterGroupsSearched = useMemo(() =>
    searchInGroups(filterGroups, search)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  , [ filterGroups, search ])

  const _handleChangeSearch = (event) => setSearch(event.target.value)
  const _handleClickItem = (item) => () => onClickItem(item)

  return (
    <>
      <div className={classes.searchFiltersContainer}>
        <Search
          onChange={_handleChangeSearch}
          placeholder='Buscar'
          value={search}  />
      </div>
      <List
        className={classes.filtersList}>
        {
          !filterGroupsSearched.length &&
          <div className={classes.notFound}>
            <img alt='Sin resultados' src='https://s3.amazonaws.com/test.krowdy.apps/portales/sources/empty_content.png' width={140} />
            <p>No se encontraron resultados</p>
          </div>

        }
        {
          filterGroupsSearched.map((filterGroup, index) => (
            <li
              className={classes.listSection}
              key={`filterGroup-${index}`}>
              <ul className={classes.ul}>
                <ListSubheader
                  className={classes.listSubheader}
                  disableSticky={false}>
                  {filterGroup.label}
                </ListSubheader>
                {
                  filterGroup.children.filter(filter => uniqueFilter ? !filters.find(({ key }) => filter.key === key) : filter).map(filter => (
                    <ListItem
                      button
                      className={classes.listItem}
                      key={`filter-${index}-${filter._id}`}
                      onClick={_handleClickItem(filter)}>
                      <ListItemText
                        primary={filter.label} />
                    </ListItem>
                  ))
                }
              </ul>
            </li>
          ))
        }
      </List>
    </>
  )
})

export default FiltersList
