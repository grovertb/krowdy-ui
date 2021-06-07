import React, { useCallback, useMemo, useState } from 'react'
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
import { generateRandomId } from '../utils'
import KeywordFilter from './KeywordFilter'

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
  littleMarginLeft: {
    marginLeft: theme.spacing(.5)
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

const CandidateGroupFilterType = {
  Excluded: 'excluded',
  Included: 'included'
}

const SuperFilters = (props) => {
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
    onChangeFilterCandidate = () => {},
    excludedCandidates = [],
    childProps = {},
    includedCandidates = [],
    viewDefault
  }  = props

  const { PaperProps, AddFiltersButtonProps } = childProps

  const [ groupFilterCurrent, setGroupFilterCurrent ] = useState(null)
  const [ view, goToView ] = useState(Views[viewDefault] || Views.HOME)
  const [ filterSelected, setFilterSelected ] = useState()
  const [ filterToEdit, setFilterToEdit ] = useState()
  const [ isKeywordFilter, setIsKeywordFilter ] = useState(false)

  const { groupFilterCurrentKey, groupFilterCurrentChildren } = useMemo(() => ({
    groupFilterCurrentChildren: groupFilterCurrent ? groupFilterCurrent.children: null,
    groupFilterCurrentKey     : groupFilterCurrent ? groupFilterCurrent.key: null
  }), [ groupFilterCurrent ])

  const addFilter = useCallback((filter) => {
    onChangeFilters(filters
      .map((groupFilter) => {
        if(groupFilter.key !== groupFilterCurrentKey) return groupFilter

        return ({
          ...groupFilter,
          children: groupFilter.children.concat(filter)
        })
      })
    )
  }, [ filters, groupFilterCurrentKey, onChangeFilters ])

  const deepUpdate = useCallback((arr, { _id, ...updatedItem } ) => arr.map(item => {
    if(item._id === _id)
      return Object.assign({}, item, updatedItem)

    if(Array.isArray(item.children) && item.children.length)
      return {
        ...item,
        children: deepUpdate(item.children, { _id, ...updatedItem })
      }

    return item
  }), [])

  const updateFilter = useCallback((filter) => {
    const updatedFilters = deepUpdate(groupFilterCurrentChildren, filter)
    onChangeFilters(filters
      .map((groupFilter) => {
        if(groupFilter.key !== groupFilterCurrentKey) return groupFilter

        return ({
          ...groupFilter,
          children: updatedFilters
        })
      })
    )
  }, [ deepUpdate, filters, groupFilterCurrentChildren, groupFilterCurrentKey, onChangeFilters ])

  // Aqui es cuando se agrega un filtro

  const _handleClickApplyFilters = useCallback((filter) => {
    if(Object.values(CandidateGroupFilterType).includes(groupFilterCurrentKey))
      onChangeFilterCandidate(groupFilterCurrentKey, filter.value)
    else if(filters.some(({ key }) => key === groupFilterCurrentKey ))
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
    setIsKeywordFilter(false)
  }, [ addFilter, filterToEdit, filters, groupFilterCurrentKey, onChangeFilterCandidate, onChangeFilters, updateFilter ])

  const _handleClickFilterListItem = useCallback((item) => {
    setFilterSelected(item)
    if(item.type === 'keyword')
      setIsKeywordFilter(true)
    else
      goToView(Views.FILTER_CONFIG)
  }, [])

  const _handleClickAddFilter = useCallback((groupFilter) => () => {
    setGroupFilterCurrent(groupFilter)
    goToView(Views.FILTERS_SEARCH)
  }, [])

  const _handleClickAddGroupFilter = useCallback(() => {
    setGroupFilterCurrent({
      children: [],
      key     : mongoObjectId(),
      operator: 'none',
      type    : 'default'
    })
    goToView(Views.FILTERS_SEARCH)
  }, [])

  const _handleClickDeleteGroupFilter = useCallback((groupFilterKey) => () => {
    onChangeFilters(filters.filter((groupFilter) => groupFilter.key !== groupFilterKey))
  }, [ filters, onChangeFilters ])

  const _handleClickBack = useCallback(() => {
    if([ CandidateGroupFilterType.Included, CandidateGroupFilterType.Excluded ].includes(groupFilterCurrentKey)) {
      goToView(Views.HOME)
      setFilterToEdit(null)
      setGroupFilterCurrent(null)

      return
    }

    goToView(Views[view.backIndex])
    setFilterToEdit(null)
    if(view.backIndex === 'HOME') setGroupFilterCurrent(null)
  }, [ groupFilterCurrentKey, view.backIndex ])

  const _handleChangeFilterTree = useCallback(groupFilterKey => treeFilters => {
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
  }, [ filters, onChangeFilters ])

  const _handleClickEditFilter = useCallback((groupFilter) => (appliedFilter) => {
    setGroupFilterCurrent(groupFilter)
    setFilterToEdit(appliedFilter)

    if(appliedFilter.type === 'keyword')
      setIsKeywordFilter(true)
    else
      goToView(Views.FILTER_CONFIG)
  }, [])

  const _handleChangeFilterCandidates = useCallback((candidateGroupFilterType) => () => {
    onChangeFilterCandidate(candidateGroupFilterType, [])
  }, [ onChangeFilterCandidate ])

  const _handleClickEditFilterCandidates = useCallback((candidateGroupFilterType) => (treeFilters) => {
    setGroupFilterCurrent({
      key: candidateGroupFilterType
    })
    setFilterToEdit(treeFilters)
    goToView(Views.FILTER_CONFIG)
  }, [])

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
          { !filters.length && !includedCandidates.length && !excludedCandidates.length ? (
            <Button
              color='primary'
              fullWidth
              onClick={_handleClickAddGroupFilter}
              startIcon={<AddIcon />}>
              Añadir Filtro
            </Button>
          ): (
            <div className={clsx(classes.flex, classes.spaceBetween)}>
              <IconButton color='primary' size='small'>
                <AddToPhotosIcon fontSize='small' onClick={_handleClickAddGroupFilter} />
              </IconButton>
              { !isNaN(totalItems) ? (
                <div className={classes.flex}>
                  <FaceIcon color='disabled' />
                  <Typography className={classes.littleMarginLeft} variant='body1'>
                    {totalItems} resultado{totalItems > 1 ? 's': ''}
                  </Typography>
                </div>
              ): null}
            </div>
          ) }
          <div className={clsx(classes.marginTop, classes.treeContainer)}>
            {excludedCandidates.length ? (
              <>
                <div className={classes.groupFilterContainerBlock}>
                  <FiltersTree
                    dots={dots}
                    onChange={_handleChangeFilterCandidates(CandidateGroupFilterType.Excluded)}
                    onClickEdit={_handleClickEditFilterCandidates(CandidateGroupFilterType.Excluded)}
                    treeData={[ {
                      _id          : generateRandomId(),
                      key          : '_id',
                      label        : 'Candidato',
                      operator     : '$nin',
                      operatorLabel: 'no es',
                      optionIndex  : 1,
                      reference    : null,
                      type         : 'list',
                      value        : excludedCandidates
                    } ]} />
                </div>
                { includedCandidates.length || filters.length ? <Divider className={classes.marginTop} />: null}
              </>
            ): null}
            {includedCandidates.length ? (
              <>
                <div className={clsx(classes.marginTop, classes.groupFilterContainer)}>
                  <FiltersTree
                    dots={dots}
                    onChange={_handleChangeFilterCandidates(CandidateGroupFilterType.Included)}
                    onClickEdit={_handleClickEditFilterCandidates(CandidateGroupFilterType.Included)}
                    treeData={[ {
                      _id          : generateRandomId(),
                      key          : '_id',
                      label        : 'Candidato',
                      operator     : '$in',
                      operatorLabel: 'es',
                      optionIndex  : 0,
                      reference    : null,
                      type         : 'list',
                      value        : includedCandidates
                    } ]} />
                </div>
                { filters.length ? <DividerWithText title={'or'} />: null}
              </>
            ): null}
            {filters
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
                  { (index + 1) < filters.length && <DividerWithText title={'or'} />}
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
            AddFiltersButtonProps={AddFiltersButtonProps}
            categoryItems={categoryItems}
            edit={filterToEdit ? true : false}
            filter={filterToEdit || filterSelected}
            filterTypes={filterTypes}
            hasNextPage={hasNextPage}
            listWidth={listWidth}
            loadMoreCategoryItems={loadMoreCategoryItems}
            onClickApply={_handleClickApplyFilters}
            onSelectCategoryFilter={onSelectCategoryFilter}
            PaperProps={PaperProps} />
        </TabPanel>
        {isKeywordFilter ? <KeywordFilter
          edit={!!filterToEdit}
          filter={filterToEdit || filterSelected}
          items={categoryItems}
          loadMore={loadMoreCategoryItems}
          onClickApply={_handleClickApplyFilters}
          onResetCategoryItems={onSelectCategoryFilter}
          PaperProps={PaperProps} /> : null}
      </CardContent>
    </Card>
  )
}

SuperFilters.propTypes = {
  categoryItems: PropTypes.arrayOf(PropTypes.shape({
    _id  : PropTypes.string.isRequired,
    label: PropTypes.string.isRequired
  })).isRequired,
  childProps        : PropTypes.object,
  classes           : PropTypes.object,
  excludedCandidates: PropTypes.arrayOf(PropTypes.shape({
    _id: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number
    ]).isRequired,
    label: PropTypes.string
  })),
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
  hasNextPage        : PropTypes.bool,
  headerHomeComponent: PropTypes.node,
  includedCandidates : PropTypes.arrayOf(PropTypes.shape({
    _id: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number
    ]).isRequired,
    label: PropTypes.string
  })),
  listWidth              : PropTypes.number,
  loadMoreCategoryItems  : PropTypes.func,
  onChangeFilterCandidate: PropTypes.func,
  onChangeFilters        : PropTypes.func.isRequired,
  onFetchFilterGroups    : PropTypes.func,
  onSelectCategoryFilter : PropTypes.func,
  title                  : PropTypes.string.isRequired,
  uniqueFilter           : PropTypes.bool,
  viewDefault            : PropTypes.oneOf([ 'HOME', 'FILTERS_SEARCH', 'FILTER_CONFIG' ])
}

export default withStyles(styles, { name: 'SuperFilters' })(SuperFilters)
