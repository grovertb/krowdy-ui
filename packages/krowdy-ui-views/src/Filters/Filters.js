import React, { useState } from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'
import AddIcon from '@material-ui/icons/Add'
import { IconButton } from '@material-ui/core'
import ArrowBackIcon from '@material-ui/icons/ArrowBackIos'
import { Button, Card, CardContent, CardHeader, TabPanel, withStyles } from '@krowdy-ui/core'
import FilterConfig from './FilterConfig'
import FiltersList from './FiltersList'
import FiltersTree from './FiltersTree'

export const styles = (theme) => ({
  backIcon: {
    marginRight : theme.spacing(1),
    paddingLeft : 6,
    paddingRight: 0
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
    height: '100%'
  },
  titleBack: {
    fontSize: 14
  },
  titleContainer: {
    alignItems: 'center',
    display   : 'flex',
    height    : 20
  },
  treeContainer: {
    overflowY: 'scroll'
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
    onSelectCategoryFilter,
    categoryItems = [],
    hasNextPage = false,
    filterTypes = [],
    loadMoreCategoryItems = () => {},
    listWidth,
    filterGroups = []
  }  = props

  const [ view, goToView ] = useState(Views.HOME)
  const [ filterSelected, setFilterSelected ] = useState()
  const [ filterToEdit, setFilterToEdit ] = useState()

  const addFilter = (filter) => {
    onChangeFilters([ ...filters, filter ])
  }

  const deepUpdate = (arr, { _id, ...updatedItem } ) => arr.map(item => {
    if(item._id === _id)
      return Object.assign({}, item, updatedItem)

    if(Array.isArray(item.children) && item.children.length)
      return {
        ...item,
        children: deepUpdate(item.children, { _id, ...updatedItem })
      }

    return item
  })

  const updateFilter = (filter) => {
    const updatedFilters = deepUpdate(filters, filter)
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

  const _handleChangeFilterTree = treeFilters => {
    onChangeFilters(treeFilters)
  }

  return (
    <Card className={classes.root} variant='outlined'>
      <CardHeader
        shadow
        title={(
          <div className={classes.titleContainer}>
            {
              view.index !== 0 && (
                <IconButton
                  aria-label='delete'
                  className={classes.backIcon}
                  onClick={_handleClickBack}
                  size='small'>
                  <ArrowBackIcon fontSize='inherit' />
                </IconButton>
              )
            }
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
          {
            filters.length === 0 ? HeaderHomeComponent : null
          }
          <div className={classes.treeContainer}>
            <FiltersTree
              onChange={_handleChangeFilterTree}
              onClickEdit={_handleClickEditFilter}
              treeData={filters} />
          </div>
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
            onSelectCategoryFilter={onSelectCategoryFilter} />
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
  hasNextPage           : PropTypes.bool,
  headerHomeComponent   : PropTypes.node,
  listWidth             : PropTypes.number,
  loadMoreCategoryItems : PropTypes.func,
  onChangeFilters       : PropTypes.func.isRequired,
  onFetchFilterGroups   : PropTypes.func,
  onSelectCategoryFilter: PropTypes.func,
  title                 : PropTypes.string.isRequired
}

Filters.muiName = 'KrowdyFilters'

export default withStyles(styles,{ name: 'Filters' })(Filters)
