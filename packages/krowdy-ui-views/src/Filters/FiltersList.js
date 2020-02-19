import { List, ListItem, ListItemText, ListSubheader, makeStyles } from '@krowdy-ui/core'
import Search from '@krowdy-ui/views/Search'
import React, { useMemo, useState } from 'react'
import tilderize from '../utils/tilderize'
import escapeRegexp from '../utils/escapeRegexp'

export const useStyles = makeStyles((theme) => ({
  filtersList: {
    maxHeight: 500,
    overflow : 'auto',
    position : 'relative'
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
    padding   : '8px 12px',
    transition: '.3s'
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
    marginBottom     : 4,
    marginLeft       : 12,
    marginRight      : 12,
    padding          : 0,
    paddingBottom    : 4
  },
  notFound: {
    '& p': {
      color     : theme.palette.grey[500],
      fontWeight: 'bold'
    },
    alignItems   : 'center',
    display      : 'flex',
    flexDirection: 'column',
    padding      : 20
  },
  searchFiltersContainer: {
    padding: 12
  },
  ul: {
    backgroundColor: theme.palette.background.paper,
    padding        : 0
  }
}))

const FiltersList = React.memo((props) => {
  const {
    filterGroups,
    onClickItem
  } = props

  const classes = useStyles()
  const [ search, setSearch ] = useState('')

  const searchInGroups = (search) => {
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
    searchInGroups(search)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  , [ search ])

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
        className={classes.filtersList}
        subheader={<li />}>
        {
          !filterGroupsSearched.length &&
          <div className={classes.notFound}>
            <img alt='Sin resultados' src='https://s3.amazonaws.com/test.krowdy.apps/portales/sources/empty_content.png' width={140} />
            <p>No se encontraron resultados</p>
          </div>

        }
        {
          filterGroupsSearched.map(filterGroup => (
            <li
              className={classes.listSection}
              key={`section-${filterGroup._id}`}>
              <ul className={classes.ul}>
                <ListSubheader
                  className={classes.listSubheader}
                  disableSticky={false}>
                  {filterGroup.label}
                </ListSubheader>
                {
                  filterGroup.children.map(filter => (
                    <ListItem
                      className={classes.listItem}
                      key={`item-${filterGroup._id}-${filter._id}`}
                      onClick={_handleClickItem(filter)}
                      value={filter}>
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
