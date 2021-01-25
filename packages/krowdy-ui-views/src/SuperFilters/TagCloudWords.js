import React, { useState, useEffect, useMemo } from 'react'
import { Dialog, DialogContent, makeStyles, Button, DialogTitle, Typography, IconButton } from '@krowdy-ui/core'
import InputChip from './InputChip'
import { Close as CloseIcon } from '@material-ui/icons'
import PropTypes from 'prop-types'

const useStyles = makeStyles((theme) => ({
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
    // color   : ({ color }) => color,
    color   : theme.palette.secondary[500],
    cursor  : 'pointer',
    display : 'inline-block',
    fontSize: ({ count }) => count,
    margin  : theme.spacing(0, .5)
  },
  dialogTitleContainer: {
    margin : 0,
    padding: theme.spacing(2)
  },
  tagCloudWordsContainer: {
    height   : 420,
    textAlign: 'center'
  },
  tagsContainer: {
    marginTop: 12
  }
}))

// Transforma un valor de un intervalo1 a un intervalo2
const transform = (Interval1, Interval2, x) =>
  Math.round((x - Interval1.min) / (Interval1.max - Interval1.min) * ( Interval2.max - Interval2.min ) + Interval2.min)

// function getColor() {
//   return `hsla(${~~(360 * Math.random())},70%,75%,1)`
// }

const TagCloudWords = ({
  onChangeSelected = () => {},
  onResetCategoryItems = () => {},
  loadMore = () => {},
  categoryKey,
  selectedItems = [],
  items = [],
  PaperProps = {}
}) => {
  const [ open, setOpen ] = useState(false)
  const classes = useStyles()
  const _handleClose = () => {
    setOpen(false)
  }
  const _handleOpen = () => {
    setOpen(true)
  }

  useEffect(() => {
    onResetCategoryItems(categoryKey)
    loadMore()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

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
    ].sort (() => 0.5 - Math.random ())
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ items ])

  const _handleClickTag = (tag) => {
    const existsValue = selectedItems.includes(tag.value)
    // Don't add if value already exists
    if(!existsValue)
      onChangeSelected(selectedItems.concat(tag.value))
  }

  return (
    <div>
      <Dialog
        fullWidth onClose={_handleClose} open={open}
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
          <InputChip onChange={onChangeSelected} values={selectedItems} />
          <div className={classes.tagsContainer}>
            {tags.map((tag) => (
              <CloudTag key={tag._id} onClick={_handleClickTag} tag={tag} />
            ))}
          </div>
        </DialogContent>
      </Dialog>
      <InputChip onChange={onChangeSelected} values={selectedItems} />
      <Button
        className={classes.button}
        fullWidth
        onClick={_handleOpen}
        variant='outlined'>Palabras</Button>
    </div>
  )
}

const CloudTag = ({ tag, onClick }) => {
  const { count, value } = tag
  const classes = useStyles({ count })

  return (
    <span className={classes.cloudTag} onClick={() => onClick(tag)}>
      {value}
    </span>
  )
}

TagCloudWords.propTypes = {
  PaperProps : PropTypes.object,
  categoryKey: PropTypes.string,
  hasNextPage: PropTypes.bool.isRequired,
  items      : PropTypes.arrayOf(PropTypes.shape({
    _id  : PropTypes.string.isRequired,
    count: PropTypes.number.isRequired,
    label: PropTypes.string
  })).isRequired,
  loadMore            : PropTypes.func.isRequired,
  onChangeSelected    : PropTypes.func.isRequired,
  onResetCategoryItems: PropTypes.func.isRequired,
  selectedItems       : PropTypes.arrayOf(PropTypes.string).isRequired
}

export default TagCloudWords
