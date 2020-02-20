import React, { useState } from 'react'
import { PropTypes } from 'prop-types'
import clsx from 'clsx'
import AddIcon from '@material-ui/icons/Add'
import { IconButton } from '@material-ui/core'
import ArrowBackIcon from '@material-ui/icons/ArrowBackIos'
import { Button, Card, CardContent, CardHeader, TabPanel, withStyles } from '@krowdy-ui/core'
import AppliedFilters from './AppliedFilters'
import FilterConfig from './FilterConfig'
import FiltersList from './FiltersList'

export const styles = (theme) => ({
  backIcon: {
    marginRight: theme.spacing(1)
  },
  cardContent: {
    display       : 'flex',
    justifyContent: 'center'
  },
  cardTitle: {
    fontSize: 14
  },
  center: {
    alignItems   : 'center',
    display      : 'flex',
    flexDirection: 'column'
  },
  noPadding: {
    padding: 0
  },
  root: {
    minWidth: 204
  },
  titleBack: {
    fontSize: 14
  },
  titleContainer: {
    alignItems: 'center',
    display   : 'flex',
    height    : 20
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
    headerHomeComponent: HeaderHomeComponent = null,
    filters = [],
    onChangeFilters = () => {},
    onResetCategoryItems,
    categoryItems = [],
    hasNextPage = false,
    filterTypes = [],
    loadMoreCategoryItems = () => {},
    listWidth,
    filterGroups = []
  }  = props

  console.log('Dante: Filters -> filters', filters)
  const [ view, goToView ] = useState(Views.HOME)
  const [ filterSelected, setFilterSelected ] = useState()
  const [ filterToEdit, setFilterToEdit ] = useState()

  const addFilter = (filter) => {
    onChangeFilters([ ...filters, filter ])
  }

  const updateFilter = ({ _id, ...appliedfilter }) => {
    const filterIndex = filters.findIndex(filter => filter._id === _id)
    const existsFilter = filterIndex !== -1
    if(existsFilter) {
      const updatedFilter = {
        ...filters[filterIndex],
        ...appliedfilter
      }

      const updatedFilters = [
        ...filters.slice(0, filterIndex),
        updatedFilter,
        ...filters.slice(filterIndex + 1)
      ]

      onChangeFilters(updatedFilters)
    }
  }

  const _handleDeleteFilter = (appliedFilter) => {
    const updatedFilters = filters.filter(filter => filter._id !== appliedFilter._id)
    onChangeFilters(updatedFilters)
  }

  const _handleClickApplyFilters = (filter) => {
    if(filterToEdit) {
      // Exists, so update it
      updateFilter(filter)
      setFilterToEdit(null)
    } else {
      addFilter(filter)
    }
    goToView(Views.HOME)
  }

  const _handleClickFilterListItem = (item) => {
    setFilterSelected(item)
    goToView(Views.FILTER_CONFIG)
  }

  const _handleClickAddFilter = () => goToView(Views.FILTERS_SEARCH)

  const _handleClickEditFilter = (appliedFilter) => {
    setFilterToEdit(appliedFilter)
    goToView(Views.FILTER_CONFIG)
  }

  const _handleClickBack = () => {
    if(view.backIndex) {
      goToView(Views[view.backIndex])
      setFilterToEdit(null)
    }
  }

  return (
    <Card className={classes.root}>
      <CardHeader
        shadow
        title={(
          <div className={classes.titleContainer}>
            { view.index !== 0 && (
              <IconButton
                aria-label='delete'
                className={classes.backIcon}
                onClick={_handleClickBack}
                size='small'>
                <ArrowBackIcon fontSize='inherit' />
              </IconButton>
            )}
            <p className={classes.titleBack}>{view.index === 0 ? title : 'Atrás'}</p>
          </div>
        )} />
      <CardContent
        className={clsx(classes.cardContent, {
          [classes.noPadding]: !view.withPadding
        })}>
        <TabPanel
          className={classes.viewContainer}
          index={Views.HOME.index}
          value={view.index}>
          {HeaderHomeComponent}
          <AppliedFilters
            filters={filters}
            onClickEdit={_handleClickEditFilter}
            onDeleteFilter={_handleDeleteFilter} />
          <div className={classes.center}>
            <Button
              color='primary'
              onClick={_handleClickAddFilter}
              startIcon={<AddIcon />}>Añadir filtro</Button>
          </div>
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
            categoryItems={categoryItems}
            edit={filterToEdit ? true : false}
            filter={filterToEdit || filterSelected}
            filterTypes={filterTypes}
            hasNextPage={hasNextPage}
            listWidth={listWidth}
            loadMoreCategoryItems={loadMoreCategoryItems}
            onClickApply={_handleClickApplyFilters}
            onResetCategoryItems={onResetCategoryItems} />
        </TabPanel>
      </CardContent>
    </Card>
  )
}

Filters.propTypes = {
  categoryItems: PropTypes.arrayOf(PropTypes.shape({
    _id  : PropTypes.string.isRequired,
    label: PropTypes.string.isRequired
  })).isRequired,
  classes     : PropTypes.object,
  filterGroups: PropTypes.arrayOf(
    PropTypes.shape({
      _id     : PropTypes.string.isRequired,
      children: PropTypes.arrayOf(
        PropTypes.shape({
          _id  : PropTypes.string.isRequired,
          key  : PropTypes.string.isRequired,
          label: PropTypes.string.isRequired,
          type : PropTypes.string.isRequired
        })
      ),
      label: PropTypes.string.isRequired
    })
  ),
  filterTypes: PropTypes.arrayOf(
    PropTypes.shape({
      _id         : PropTypes.string.isRequired,
      initialValue: PropTypes.any.isRequired,
      options     : PropTypes.arrayOf(
        PropTypes.shape({
          _id           : PropTypes.string.isRequired,
          label         : PropTypes.string.isRequired,
          numberOfInputs: PropTypes.number.isRequired,
          operator      : PropTypes.string.isRequired
        })
      ).isRequired,
      type: PropTypes.string.isRequired
    })
  ).isRequired,
  filters: PropTypes.arrayOf(
    PropTypes.shape({
      _id          : PropTypes.string.isRequired,
      key          : PropTypes.string.isRequired,
      label        : PropTypes.string.isRequired,
      operator     : PropTypes.string.isRequired,
      operatorLabel: PropTypes.string.isRequired,
      optionIndex  : PropTypes.number.isRequired,
      type         : PropTypes.string.isRequired,
      value        : PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
        PropTypes.array
      ])
    })
  ),
  hasNextPage          : PropTypes.bool,
  headerHomeComponent  : PropTypes.node,
  listWidth            : PropTypes.number,
  loadMoreCategoryItems: PropTypes.func,
  onChangeFilters      : PropTypes.func.isRequired,
  onResetCategoryItems : PropTypes.func,
  title                : PropTypes.string.isRequired
}

Filters.muiName = 'KrowdyFilters'

export default withStyles(styles,{ name: 'Filters' })(Filters)
