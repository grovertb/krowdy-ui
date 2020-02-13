import { Button, Card, CardContent, CardHeader, TabPanel, withStyles } from '@krowdy-ui/core'
import AddIcon from '@material-ui/icons/Add'
import clsx from 'clsx'
import { PropTypes } from 'prop-types'
import React, { useState } from 'react'
import FiltersList from './FiltersList'

const Views = {
  FILTERS_SEARCH: {
    index      : 1,
    withPadding: false
  },
  HOME: {
    index      : 0,
    withPadding: true
  }
}

export const styles = (theme) => ({
  cardContent: {
    display       : 'flex',
    justifyContent: 'center'
  },
  cardTitle: {
    fontSize: 14
  },
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
  noPadding: {
    padding: 0
  },
  root: {
    maxHeight: '100%',
    maxWidth : 304,
    padding  : 0
  },
  searchFiltersContainer: {
    padding: 12
  },
  ul: {
    backgroundColor: theme.palette.background.paper,
    padding        : 0
  },
  viewContainer: {
    width: '100%'
  }
})

const Filters = (props) => {
  const {
    classes,
    title = 'Todos las compras',
    filters: filterGroups = []
  }  = props
  console.log('Dante: Filters -> filters', filterGroups)

  const [ view, setView ] = useState(Views.FILTERS_SEARCH)

  const _handleClickAddFilter = () => {
    setView(Views.FILTERS_SEARCH)
  }

  return (
    <Card className={classes.root}>
      <CardHeader
        // classes={{
        //   title: classes.cardTitle
        // }}
        title={title} />
      <CardContent className={clsx(classes.cardContent, {
        [classes.noPadding]: !view.withPadding
      })}>
        <TabPanel className={classes.viewContainer} index={0} value={view.index}>
          <Button
            color='primary'
            onClick={_handleClickAddFilter}
            startIcon={<AddIcon />}>Añadir filtro</Button>
        </TabPanel>
        <TabPanel
          className={classes.viewContainer}
          index={1}
          value={view.index}>
          <FiltersList filterGroups={filterGroups} />
        </TabPanel>
      </CardContent>
    </Card>
  )
}

Filters.propTypes = {
  classes: PropTypes.object,
  title  : PropTypes.string.isRequired
}

Filters.muiName = 'KrowdyFilters'

export default withStyles(styles,{ name: 'Filters' })(Filters)
