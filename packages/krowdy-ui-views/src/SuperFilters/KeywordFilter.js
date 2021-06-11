import React, { useState, useEffect, useMemo } from 'react'
import clsx from 'clsx'
import { Dialog, DialogContent, makeStyles, DialogTitle, Typography, IconButton, Button, DialogActions } from '@krowdy-ui/core'
import { Close as CloseIcon } from '@material-ui/icons'
import InputChip from './InputChip'
import PropTypes from 'prop-types'
import { generateRandomId } from '../utils'

const transform = (Interval1, Interval2, x) =>
  Math.round((x - Interval1.min) / (Interval1.max - Interval1.min) * ( Interval2.max - Interval2.min ) + Interval2.min)

const KeywordFilter = ({
  onResetCategoryItems = () => {},
  loadMore = () => {},
  items = [],
  PaperProps = {},
  filter = {},
  edit,
  onClickApply,
  isOpen,
  onClose
}) => {
  const classes = useStyles()

  const [ selectedItems, setSelectedItems ] = useState(filter.value || [])

  const _handleClose = () => {
    setSelectedItems([])
    onClose()
  }

  useEffect(() => {
    if(isOpen) {
      const { key, value } = filter

      if(value)
        setSelectedItems(value)

      onResetCategoryItems(key)
      loadMore(key)
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ isOpen ])

  const tags = useMemo(() => {
    const max = items.reduce((r, a) => Math.max(r, a.count), 1)
    const min = items.reduce((r, a) => Math.min(r, a.count), Infinity)
    const rangeDataSource = { max, min }

    return [
      ...items.map((element) => ({
        _id  : element._id,
        count: transform(rangeDataSource, { max: 35, min: 12 }, element.count),
        value: element.label
      }))
    ].sort ((a, b) => b.count - a.count)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ items ])

  const _handleClickTag = (tag) => {
    const existsValue = selectedItems.includes(tag.value)
    // Don't add if value already exists
    if(!existsValue)
      setSelectedItems(selectedItems.concat(tag.value))
  }

  const _handleChangeInput = (items) => {
    setSelectedItems(items)
  }

  const _handleClickApply = () => {
    const configValue = selectedItems
    const _id = edit ? filter._id : generateRandomId()

    onClickApply({
      _id,
      key          : filter.key,
      label        : filter.label,
      operator     : '$regex',
      operatorLabel: 'Contiene exactamente',
      optionIndex  : filter.optionIndex,
      queryBase    : filter.queryBase,
      reference    : filter.reference,
      type         : filter.type,
      value        : configValue
    })

    setSelectedItems([])
  }

  return (
    <Dialog
      fullWidth
      onClose={_handleClose}
      open={isOpen}
      PaperProps={PaperProps}>
      <DialogTitle className={classes.dialogTitleContainer} disableTypography>
        <Typography variant='h6'>Nube de palabras</Typography>
        <IconButton
          aria-label='close'
          className={classes.closeButton}
          onClick={_handleClose}
          size='small'>
          <CloseIcon fontSize='small' />
        </IconButton>
      </DialogTitle>
      <DialogContent className={classes.tagCloudWordsContainer}>
        <InputChip onChange={_handleChangeInput} values={selectedItems} />
        <div className={classes.tagsContainer}>
          {tags.map((tag) => (
            <CloudTag
              key={tag._id}
              onClick={_handleClickTag}
              selectedTags={selectedItems}
              tag={tag} />
          ))}
        </div>
      </DialogContent>
      <DialogActions className={classes.dialogActionsContainer}>
        <Button
          className={classes.applyButton}
          color='primary'
          onClick={_handleClickApply}
          size='large'
          variant='outlined'>Aplicar filtro</Button>
      </DialogActions>
    </Dialog>
  )
}

const CloudTag = ({ tag, onClick, selectedTags }) => {
  const { count, value } = tag
  const classes = useStyles({ count })

  const selected = useMemo(() => selectedTags.includes(tag.value), [ selectedTags, tag.value ])

  return (
    <span
      className={clsx(classes.cloudTag, {
        [classes.selected]: selected
      })}
      onClick={() => onClick(tag)}>
      {value}
    </span>
  )
}

const useStyles = makeStyles((theme) => ({
  applyButton: {
    marginTop: 20
  },
  button: {
    marginTop: 12
  },
  closeButton: {
    color   : theme.palette.grey[500],
    position: 'absolute',
    right   : theme.spacing(1),
    top     : theme.spacing(1)
  },
  cloudTag: {
    color     : theme.palette.secondary[500],
    cursor    : 'pointer',
    display   : 'inline-block',
    fontSize  : ({ count }) => count,
    // color   : ({ color }) => color,
    fontWeight: 300,
    margin    : theme.spacing(0, .5)
  },
  dialogActionsContainer: {
    justifyContent: 'center'
  },
  dialogTitleContainer: {
    margin : 0,
    padding: theme.spacing(2)
  },
  selected: {
    color     : theme.palette.primary.main,
    fontWeight: 500
  },
  tagCloudWordsContainer: {
    height   : 420,
    textAlign: 'center'
  },
  tagsContainer: {
    marginTop: 12
  }
}))

KeywordFilter.propTypes = {
  PaperProps: PropTypes.object,
  edit      : PropTypes.bool,
  filter    : PropTypes.shape({
    _id  : PropTypes.string.isRequired,
    key  : PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    type : PropTypes.string.isRequired
  }),
  items: PropTypes.arrayOf(PropTypes.shape({
    _id  : PropTypes.string.isRequired,
    count: PropTypes.number.isRequired,
    label: PropTypes.string
  })).isRequired,
  loadMore            : PropTypes.func.isRequired,
  onClickApply        : PropTypes.func.isRequired,
  onResetCategoryItems: PropTypes.func.isRequired
}

export default KeywordFilter
