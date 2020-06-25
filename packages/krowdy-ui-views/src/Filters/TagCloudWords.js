import React, { useState, useEffect } from 'react'
import { Dialog, DialogContent, Chip, makeStyles } from '@krowdy-ui/core'
import { TagCloud } from 'react-tagcloud'
// import TagCloud from 'react-tag-cloud'

const transform = (A,B,x) =>
  Math.round((x - A.min) / (A.max - A.min) * ( B.max - B.min ) + B.min)

const TagCloudWords = ({ onChange, values, onResetCategoryItems, loadMore,categoryKey,selectedItems,items }) => {
  const [ open, setOpen ] = useState(false)
  const _handleClose = () => {
    setOpen(false)
  }
  const _handleOpen = () => {
    setOpen(true)
  }

  console.log('TagCloudWords -> selectedItems', selectedItems)
  console.log('items',items)

  useEffect(() => {
    onResetCategoryItems(categoryKey)
    loadMore()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const max = items.reduce((r,a) => Math.max(r,a.count),1)
  const min = items.reduce((r,a) => Math.min(r,a.count),Infinity)
  const rangeDataSource = { max,min }
  const rangeDataDestination = { max: 35,min: 12 }
  const tags = items.map((element) => ({ count: transform(rangeDataSource,rangeDataDestination,element.count),value: element.label }))

  return (
    <div>
      <Dialog fullWidth onClose={_handleClose} open={open}>
        <DialogContent style={{ height: 420 }}>
          <TagCloud
            maxSize={rangeDataDestination.max}
            minSize={rangeDataDestination.min}
            onClick={tag => console.log(tag)}
            renderer={customRenderer}
            shuffle={true}
            style={{ textAlign: 'center' }}
            tags={tags} />
        </DialogContent>
      </Dialog>
      <div onClick={_handleOpen}>
        <Chip />
      </div>
    </div>
  )
}

const customRenderer = (tag,size,color) => (
  <span
    key={tag.value}
    style={{
      // animation     : 'blinker 3s linear infinite',
      // animationDelay: `${Math.random() * 2}s`,
      // border  : `2px solid ${color}`,
      color,
      cursor  : 'pointer',
      display : 'inline-block',
      fontSize: size
    }}>
    {tag.value}
  </span>
)

// const useStyles = makeStyles(() => ({
//   cloudItem: {
//     color   : ({ color }) => color || 'black',
//     fontSize: ({ fontSize }) => fontSize || 12
//   }
// }))

export default TagCloudWords
