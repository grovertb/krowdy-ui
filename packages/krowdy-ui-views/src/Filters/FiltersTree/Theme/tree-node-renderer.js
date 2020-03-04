import React, { Children, cloneElement } from 'react'
import PropTypes from 'prop-types'
import useStyles from './tree-node-renderer-style'

function TreeNodeRenderer(props) {
  const {
    children,
    listIndex,
    swapFrom,
    swapLength,
    swapDepth,
    scaffoldBlockPxWidth,
    lowerSiblingCounts,
    connectDropTarget,
    isOver,
    draggedNode,
    canDrop
    // treeIndex
    // treeId, // Delete from otherProps
    // getPrevRow, // Delete from otherProps
    // node, // Delete from otherProps
    // path, // Delete from otherProps
    // rowDirection
    // ...otherProps
  } = props

  const classes = useStyles()
  const scaffold = []
  const scaffoldBlockCount = lowerSiblingCounts.length

  lowerSiblingCounts.forEach((lowerSiblingCount, i) => {
    let lineClass = ''
    if(lowerSiblingCount > 0)
      if(listIndex === 0) {
        // Top-left corner of the tree
        // +-----+
        // |     |
        // |  +--+
        // |  |  |
        // +--+--+
        lineClass = `${classes.lineHalfHorizontalRight} ${classes.lineHalfVerticalBottom}`
      } else if(i === scaffoldBlockCount - 1) {
        // Last scaffold block in the row, right before the row content
        // +--+--+
        // |  |  |
        // |  +--+
        // |  |  |
        // +--+--+
        lineClass = `${classes.lineHalfHorizontalRight} ${classes.lineFullVertical}`
      } else {
        // Simply connecting the line extending down to the next sibling on this level
        // +--+--+
        // |  |  |
        // |  |  |
        // |  |  |
        // +--+--+
        lineClass = classes.lineFullVertical
      }
    else if(listIndex === 0)
      // Top-left corner of the tree, but has no siblings
      // +-----+
      // |     |
      // |  +--+
      // |     |
      // +-----+
      lineClass = classes.lineHalfHorizontalRight
    else if(i === scaffoldBlockCount - 1)
      // The last or only node in this level of the tree
      // +--+--+
      // |  |  |
      // |  +--+
      // |     |
      // +-----+
      lineClass = `${classes.lineHalfVerticalTop} ${classes.lineHalfHorizontalRight}`

    scaffold.push(
      <div
        className={`${classes.lineBlock} ${lineClass}`}
        // className={('lineBlock', lineClass, rowDirectionClass)}
        key={`pre_${1 + i}`}
        style={{ width: scaffoldBlockPxWidth }} />
    )

    // if(treeIndex !== listIndex && i === swapDepth) {
    // let highlightLineClass = ''

    // if(listIndex === swapFrom + swapLength - 1)
    //   // This block is on the bottom (target) line
    //   // This block points at the target block (where the row will go when released)
    //   highlightLineClass = 'rst__highlightBottomLeftCorner'
    // else if(treeIndex === swapFrom)
    //   // This block is on the top (source) line
    //   highlightLineClass = 'rst__highlightTopLeftCorner'
    // else
    //   // This block is between the bottom and top
    //   highlightLineClass = 'rst__highlightLineVertical'

    // scaffold.push(
    //   <div
    //     className={classnames(
    //       'rst__absoluteLineBlock',
    //       highlightLineClass,
    //       rowDirectionClass
    //     )}
    //     key={i}
    //     style={style} />
    // )
    // }
  })

  return connectDropTarget(
    <div className={classes.root}>
      <div className={classes.rootScaffold}>
        {scaffold}
      </div>
      {
        Children.map(children, child =>
          cloneElement(child, {
            canDrop,
            draggedNode,
            isOver,
            listIndex,
            lowerSiblingCounts,
            swapDepth,
            swapFrom,
            swapLength
          })
        )
      }
    </div>
  )
}

TreeNodeRenderer.defaultProps = {
  canDrop    : false,
  draggedNode: null,
  swapDepth  : null,
  swapFrom   : null,
  swapLength : null
}

TreeNodeRenderer.propTypes = {
  canDrop          : PropTypes.bool,
  children         : PropTypes.node.isRequired,
  connectDropTarget: PropTypes.func.isRequired,
  draggedNode      : PropTypes.shape({}),
  getPrevRow       : PropTypes.func.isRequired,
  isOver           : PropTypes.bool.isRequired,
  listIndex        : PropTypes.number.isRequired,

  lowerSiblingCounts: PropTypes.arrayOf(PropTypes.number).isRequired,
  node              : PropTypes.shape({}).isRequired,

  // Drop target
  path: PropTypes.arrayOf(
    PropTypes.oneOfType([ PropTypes.string, PropTypes.number ])
  ).isRequired,
  rowDirection        : PropTypes.string.isRequired,
  scaffoldBlockPxWidth: PropTypes.number.isRequired,
  swapDepth           : PropTypes.number,

  // used in dndManager
  swapFrom  : PropTypes.number,
  swapLength: PropTypes.number,
  treeId    : PropTypes.string.isRequired,
  treeIndex : PropTypes.number.isRequired
}

export default TreeNodeRenderer
