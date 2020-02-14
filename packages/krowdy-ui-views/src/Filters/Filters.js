import { Button, Card, CardContent, CardHeader, TabPanel, withStyles } from '@krowdy-ui/core'
import AddIcon from '@material-ui/icons/Add'
import clsx from 'clsx'
import { PropTypes } from 'prop-types'
import React, { useState } from 'react'
import FiltersList from './FiltersList'
import FilterConfig from './FilterConfig'

export const styles = () => ({
  cardContent: {
    display       : 'flex',
    justifyContent: 'center'
  },
  cardTitle: {
    fontSize: 14
  },
  noPadding: {
    padding: 0
  },
  root: {
    maxHeight: '100%',
    maxWidth : 304,
    padding  : 0
  },
  viewContainer: {
    width: '100%'
  }
})

const Views = {
  FILTERS_SEARCH: {
    backIndex  : 'HOME',
    index      : 1,
    withPadding: false
  },
  FILTER_CONFIG: {
    backIndex  : 'FILTERS_SEARCH',
    index      : 2,
    withPadding: true
  },
  HOME: {
    index      : 0,
    withPadding: true
  }
}

const Filters = (props) => {
  const {
    classes,
    title = 'Todos las compras',
    filters: filterGroups = []
  }  = props

  const [ view, setView ] = useState(Views.FILTERS_SEARCH)
  const [ filterSelected, setFilterSelected ] = useState()

  const _handleClickFilterListItem = (_, item) => {
    setFilterSelected(item)
    setView(Views.FILTER_CONFIG)
  }

  const _handleClickAddFilter = () => setView(Views.FILTERS_SEARCH)
  const _handleClickApplyFilters = () => setView(Views.HOME)

  const _handleBack = () => {
    if(view.backIndex)
      setView(Views[view.backIndex])
  }

  const cardTitle = () => view.index === 0 ? title : 'Atrás'

  return (
    <Card className={classes.root}>
      <CardHeader
        // classes={{
        //   title: classes.cardTitle
        // }}
        onClick={_handleBack}
        title={cardTitle()} />
      <CardContent
        className={clsx(classes.cardContent, {
          [classes.noPadding]: !view.withPadding
        })}>
        <TabPanel
          className={classes.viewContainer}
          index={Views.HOME.index}
          value={view.index}>
          <Button
            color='primary'
            onClick={_handleClickAddFilter}
            startIcon={<AddIcon />}>Añadir filtro</Button>
        </TabPanel>
        <TabPanel
          className={classes.viewContainer}
          index={Views.FILTERS_SEARCH.index}
          value={view.index}>
          <FiltersList
            filterGroups={filterGroups}
            onClickItem={_handleClickFilterListItem} />
        </TabPanel>
        <TabPanel
          className={classes.viewContainer}
          index={Views.FILTER_CONFIG.index}
          value={view.index}>
          <FilterConfig
            filter={filterSelected}
            onClickApply={_handleClickApplyFilters} />
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
