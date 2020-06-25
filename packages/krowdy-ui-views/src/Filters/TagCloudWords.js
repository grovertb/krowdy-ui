import React, { useState, useEffect, useMemo } from 'react'
import { Dialog, DialogContent, makeStyles, Button, DialogTitle as MuiDialogTitle, withStyles, Typography, IconButton } from '@krowdy-ui/core'
import InputChip from './InputChip'
import { Close as CloseIcon } from '@material-ui/icons'

const useStyles = makeStyles((theme) => ({
  button: {
    marginTop: 12
  },
  cloudTag: {
    color   : ({ color }) => color,
    cursor  : 'pointer',
    display : 'inline-block',
    fontSize: ({ count }) => count,
    margin  : theme.spacing(0,1)
  },
  tagCloudWordsContainer: {
    height   : 420,
    textAlign: 'center'
  },
  tagsContainer: {
    marginTop: 12
  }
}))

const styles = (theme) => ({
  closeButton: {
    color   : theme.palette.grey[500],
    position: 'absolute',
    right   : theme.spacing(1),
    top     : theme.spacing(1)
  },
  root: {
    margin : 0,
    padding: theme.spacing(2)
  }
})

const transform = (A,B,x) =>
  Math.round((x - A.min) / (A.max - A.min) * ( B.max - B.min ) + B.min)

const shuffle = (array) => [].concat(array).sort (() => 0.5 - Math.random ())

function getColor() {
  return `hsla(${~~(360 * Math.random())},70%,75%,1)`
}

const rangeDataDestination = { max: 35,min: 12 }

const TagCloudWords = ({ onChangeSelected, onResetCategoryItems, loadMore,categoryKey,selectedItems,items }) => {
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
    const max = items.reduce((r,a) => Math.max(r,a.count),1)
    const min = items.reduce((r,a) => Math.min(r,a.count),Infinity)
    const rangeDataSource =({ max,min })

    return shuffle(items.map((element) => ({
      _id  : element._id,
      color: getColor(),
      count: transform(rangeDataSource,rangeDataDestination,element.count),
      value: element.label
    })))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[ items ])

  const _handleClickTag = (tag) => {
    const existsValue = selectedItems.includes(tag.value)
    // Don't add if value already exists
    if(!existsValue)
      onChangeSelected(selectedItems.concat(tag.value))
  }

  return (
    <div>
      <Dialog fullWidth onClose={_handleClose} open={open}>
        <DialogTitle>Nube de palabras</DialogTitle>
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

const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props

  return (
    <MuiDialogTitle className={classes.root} disableTypography {...other}>
      <Typography variant='h6'>{children}</Typography>
      {onClose ? (
        <IconButton aria-label='close' className={classes.closeButton} onClick={onClose}>
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  )
})

const CloudTag = ({ tag, onClick }) => {
  const { color, count, value } = tag
  const classes = useStyles({ color, count })

  return (
    <span className={classes.cloudTag} onClick={() => onClick(tag)}>
      {value}
    </span>
  )
}

export default TagCloudWords
