import React, { useState, useMemo, useImperativeHandle, forwardRef } from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'
import AddIcon from '@material-ui/icons/Add'
import { IconButton, Divider } from '@material-ui/core'
import ArrowBackIcon from '@material-ui/icons/ArrowBackIos'
import { Button, Card, CardContent, CardHeader, TabPanel, Typography, withStyles } from '@krowdy-ui/core'
import FiltersTree from './FiltersTree'
import FilterConfig from './FilterConfig'
import FiltersList from './FiltersList'
import DividerWithText from './DividerWithText'
import { mongoObjectId } from '../utils/mongoObjectId'
import { AddToPhotos as AddToPhotosIcon, Delete as DeleteIcon, Face as FaceIcon } from '@material-ui/icons'

export const styles = (theme) => ({
  backIcon: {
    marginRight : theme.spacing(1),
    paddingLeft : theme.spacing(.75),
    paddingRight: 0
  },
  block: {
    width: 18
  },
  buttonAddContainer: {
    alignItems    : 'center',
    display       : 'flex',
    justifyContent: 'space-between',
    marginTop     : theme.spacing(1)
  },
  buttonAddGroupFilter: {
    borderStyle: 'dashed',
    margin     : theme.spacing(1.5, 0)
  },
  cardContent: {
    display       : 'flex',
    flex          : 2,
    justifyContent: 'center',
    overflowY     : 'auto'
  },
  cardTitle: {
    fontSize: 14
  },
  center: {
    alignItems   : 'center',
    display      : 'flex',
    flexDirection: 'column'
  },
  flex: {
    alignItems: 'center',
    display   : 'flex'
  },
  groupFilterContainer: {
    '&:hover': {
      backgroundColor: theme.palette.primary[50],
      border         : `1px solid ${theme.palette.primary[500]}`
    },
    backgroundColor: theme.palette.secondary[10],
    border         : `1px solid ${theme.palette.secondary[10]}`,
    borderRadius   : 2 * theme.shape.borderRadius,
    overflowX      : 'auto',
    padding        : theme.spacing(0.5)
  },
  groupFilterContainerBlock: {
    '&:hover': {
      backgroundColor: theme.palette.secondary[100],
      border         : `1px solid ${theme.palette.secondary[200]}`
    },
    backgroundColor: theme.palette.secondary[100],
    border         : `1px solid ${theme.palette.secondary[100]}`,
    borderRadius   : theme.shape.borderRadius,
    overflowX      : 'auto',
    padding        : theme.spacing(0.5)
  },
  marginTop: {
    marginTop: theme.spacing(1.5)
  },
  noPadding: {
    padding: 0
  },
  root: {
    display : 'flex',
    flexFlow: 'column',
    height  : '100%'
  },
  spaceBetween: {
    justifyContent: 'space-between',
    width         : '100%'
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
    '& *, & *::after, & *::before': {
      boxSizing: 'content-box'
    },
    overflowY: 'scroll'
  },
  viewContainer: {
    height: '100%',
    width : '100%'
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

const SuperFilters = forwardRef((props, ref) => {
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
    filterGroups = [],
    dots = false,
    uniqueFilter = false,
    totalItems,
    candidateKeyFilter = '_id',
    candidatePathFilter = '_id',
    candidateFilterType = 'list'
  }  = props

  const [ groupFilterCurrent, setGroupFilterCurrent ] = useState()
  const [ view, goToView ] = useState(Views.HOME)
  const [ filterSelected, setFilterSelected ] = useState()
  const [ filterToEdit, setFilterToEdit ] = useState()

  const addFilter = (filter) => {
    onChangeFilters(filters
      .map((groupFilter) => {
        if(groupFilter.key !== groupFilterCurrent.key) return groupFilter

        return ({
          ...groupFilter,
          children: groupFilter.children.concat(filter)
        })
      })
    )
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
    const updatedFilters = deepUpdate(groupFilterCurrent.children, filter)
    onChangeFilters(filters
      .map((groupFilter) => {
        if(groupFilter.key !== groupFilterCurrent.key) return groupFilter

        return ({
          ...groupFilter,
          children: updatedFilters
        })
      })
      .filter(({ children, type }) =>
        type === 'default' ||
        (
          ![ 'default' ].includes(type) &&
          children.length &&
          children.every(({ value }) =>value.length)
        )
      )
    )
  }

  // Aqui es cuando se agrega un filtro
  const _handleClickApplyFilters = (filter) => {
    if(filters.some(({ key }) => key === groupFilterCurrent.key ))
      if(filterToEdit) {
        // Exists, so update it
        updateFilter(filter)
        setFilterToEdit(null)
      } else {
        addFilter(filter)
      }
    else
      onChangeFilters(filters.concat({
        children: [ filter ],
        key     : mongoObjectId(),
        operator: 'none',
        type    : 'default'
      }))

    goToView(Views.HOME)
    setGroupFilterCurrent(null)
  }

  const _handleClickFilterListItem = (item) => {
    setFilterSelected(item)
    goToView(Views.FILTER_CONFIG)
  }

  const _handleClickAddFilter = (groupFilter) => () => {
    setGroupFilterCurrent(groupFilter)
    goToView(Views.FILTERS_SEARCH)
  }

  const _handleClickAddGroupFilter = () => {
    setGroupFilterCurrent({
      children: [],
      key     : mongoObjectId(),
      operator: 'none',
      type    : 'default'
    })
    goToView(Views.FILTERS_SEARCH)
  }
  const _handleClickDeleteGroupFilter = (groupFilterKey) => () => {
    onChangeFilters(filters.filter((groupFilter) => groupFilter.key !== groupFilterKey))
  }

  const _handleClickEditFilter = (groupFilter) => (appliedFilter) => {
    setGroupFilterCurrent(groupFilter)
    setFilterToEdit(appliedFilter)
    goToView(Views.FILTER_CONFIG)
  }

  const _handleClickBack = () => {
    if(view.backIndex) {
      goToView(Views[view.backIndex])
      setFilterToEdit(null)
      if(view.backIndex === 'HOME') setGroupFilterCurrent(null)
    }
  }

  const _handleChangeFilterTree = groupFilterKey => treeFilters => {
    onChangeFilters(filters
      .map((groupFilter) => {
        if(groupFilterKey !== groupFilter.key) return groupFilter

        return ({
          ...groupFilter,
          children: treeFilters
        })
      })
      .filter(({ children }) => children.length)
    )
  }

  useImperativeHandle(ref, () =>  ({
    spliceCandidateInFilters: (filters, candidate, groupFilterType) => {
      const optionIndex = Number(groupFilterType === 'exclude')

      const includeFilterType = filterTypes.find(({ type }) => type === candidateFilterType)

      const operatorLabel = includeFilterType.options[optionIndex].label
      const operator = includeFilterType.options[optionIndex].operator

      if(filters.some((groupFilter) => groupFilter.type === groupFilterType))
        return filters.map((groupFilter) => {
          if(groupFilter.type !== groupFilterType) return groupFilter

          return ({
            ...groupFilter,
            children: (groupFilter.children || []).map((filter) => {
              const { key, value } = filter
              if(key !== candidateKeyFilter || value.some(({ _id }) => _id === candidate[candidatePathFilter])) return filter

              return ({
                ...filter,
                value: value.concat({
                  _id  : candidate[candidatePathFilter],
                  count: null,
                  label: candidate.firstName || candidate.email
                })
              })
            })
          })
        })

      return filters.concat({
        children: [ {
          key  : candidateKeyFilter,
          label: 'Candidato',
          operator,
          operatorLabel,
          optionIndex,
          type : 'list',
          value: [ {
            _id  : candidate[candidatePathFilter],
            count: null,
            label: candidate.firstName || candidate.email
          } ]
        } ],
        key     : String(Math.random()),
        operator: 'none',
        type    : groupFilterType
      })
    }
  }))

  const defaultFilters = useMemo(() => filters
    .filter(({ type }) => type === 'default'), [ filters ])

  const includeFilters = useMemo(() => filters
    .filter(({ type }) => type === 'include'), [ filters ])

  const excludeFilters = useMemo(() => filters
    .filter(({ type }) => type === 'exclude'), [ filters ])

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
            filters.length === 0 ? HeaderHomeComponent : (
              <div className={clsx(classes.flex, classes.spaceBetween)}>
                <IconButton color='primary' size='small'>
                  <AddToPhotosIcon fontSize='small' onClick={_handleClickAddGroupFilter} />
                </IconButton>
                { !isNaN(totalItems) ? (
                  <div className={classes.flex}>
                    <FaceIcon color='disabled' />
                    <Typography variant='body1'>
                      {totalItems} resultado{totalItems > 1 ? 's': ''}
                    </Typography>
                  </div>
                ): null}

              </div>
            )
          }
          <div className={clsx(classes.marginTop, classes.treeContainer)}>
            {excludeFilters
              .map((groupFilter, index) => (
                <div key={`GroupFilterExclude-${index}`}>
                  <div className={classes.groupFilterContainerBlock}>
                    <FiltersTree
                      dots={dots}
                      onChange={_handleChangeFilterTree(groupFilter.key)}
                      onClickEdit={_handleClickEditFilter(groupFilter)}
                      treeData={groupFilter.children} />
                  </div>
                </div>
              ))
            }
            {Boolean(excludeFilters.length) && <Divider style={{ margin: '12px 0' }} /> }
            {includeFilters
              .map((groupFilter, index) => (
                <div key={`GroupFilterInclude-${index}`}>
                  <div className={classes.groupFilterContainer}>
                    <FiltersTree
                      dots={dots}
                      onChange={_handleChangeFilterTree(groupFilter.key)}
                      onClickEdit={_handleClickEditFilter(groupFilter)}
                      treeData={groupFilter.children} />
                  </div>
                  { index < includeFilters.length && <DividerWithText title={'or'} />}
                </div>
              ))
            }
            {defaultFilters
              .map((groupFilter, index) => (
                <div key={`GroupFilterDefault-${index}`}>
                  <div className={classes.groupFilterContainer}>
                    <FiltersTree
                      dots={dots}
                      onChange={_handleChangeFilterTree(groupFilter.key)}
                      onClickEdit={_handleClickEditFilter(groupFilter)}
                      treeData={groupFilter.children} />
                    <div className={classes.buttonAddContainer}>
                      <div className={classes.block} />
                      <Button
                        color='primary'
                        onClick={_handleClickAddFilter(groupFilter)}
                        startIcon={<AddIcon />}>
                        Filtro
                      </Button>
                      {groupFilter.children.length ? (
                        <div className={classes.block} />
                      ): (
                        <IconButton
                          color='primary'
                          onClick={_handleClickDeleteGroupFilter(groupFilter.key)}
                          size='small'>
                          <DeleteIcon fontSize='small' />
                        </IconButton>
                      )}
                    </div>
                  </div>
                  { (index + 1) < defaultFilters.length && <DividerWithText title={'or'} />}
                </div>
              ))}
          </div>
        </TabPanel>
        <TabPanel
          className={classes.viewContainer}
          index={Views.FILTERS_SEARCH.index}
          value={view.index}>
          <FiltersList
            filterGroups={filterGroups}
            filters={groupFilterCurrent ? groupFilterCurrent.children : []}
            onClickItem={_handleClickFilterListItem}
            uniqueFilter={uniqueFilter} />
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
})

SuperFilters.propTypes = {
  candidateFilterType: PropTypes.string,
  candidateKeyFilter : PropTypes.string,
  candidatePathFilter: PropTypes.string,
  categoryItems      : PropTypes.arrayOf(PropTypes.shape({
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
      _id          : PropTypes.string,
      key          : PropTypes.string.isRequired,
      label        : PropTypes.string,
      operator     : PropTypes.string.isRequired,
      operatorLabel: PropTypes.string,
      optionIndex  : PropTypes.number,
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
  title                 : PropTypes.string.isRequired,
  uniqueFilter          : PropTypes.bool
}

SuperFilters.muiName = 'KrowdySuperFilters'

export default withStyles(styles, { name: 'SuperFilters' })(SuperFilters)
