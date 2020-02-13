import React from 'react'
import Search from '@krowdy-ui/views/Search'
import { List, ListSubheader, ListItem, ListItemText, makeStyles } from '@krowdy-ui/core'

export const useFiltersListStyles = makeStyles((theme) => ({
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
  searchFiltersContainer: {
    padding: 12
  },
  ul: {
    backgroundColor: theme.palette.background.paper,
    padding        : 0
  }
}))

const FiltersList = (props) => {
  const {
    filterGroups
  } = props

  const classes = useFiltersListStyles()

  return (
    <>
      <div className={classes.searchFiltersContainer}>
        <Search placeholder='Buscar' />
      </div>
      <List
        className={classes.filtersList}
        subheader={<li />}>
        {
          filterGroups.map(filterGroup => (
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
                  filterGroup.subItems.map(filter => (
                    <ListItem
                      className={classes.listItem}
                      key={`item-${filterGroup._id}-${filter._id}`}>
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
}

export default FiltersList
