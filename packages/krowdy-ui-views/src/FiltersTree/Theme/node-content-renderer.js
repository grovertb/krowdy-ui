import React from 'react'
import PropTypes from 'prop-types'
import DragIndicatorIcon from '@material-ui/icons/DragIndicator'
import useStyles from './node-content-renderer-style'

function isDescendant(older, younger) {
  return (
    !!older.children &&
    typeof older.children !== 'function' &&
    older.children.some(
      child => child === younger || isDescendant(child, younger)
    )
  )
}

function FileThemeNodeContentRenderer(props) {
  const {
    scaffoldBlockPxWidth,
    // toggleChildrenVisibility,
    connectDragPreview,
    connectDragSource,
    isDragging,
    canDrop,
    canDrag,
    node,
    label,
    draggedNode,
    path,
    treeIndex,
    isSearchMatch,
    isSearchFocus,
    buttons,
    className,
    style,
    didDrop,
    lowerSiblingCounts,
    listIndex,
    swapFrom,
    swapLength,
    swapDepth
    // treeId // Not needed, but preserved for other renderers
    // isOver, // Not needed, but preserved for other renderers
    // parentNode, // Needed for dndManager
    // rowDirection
  } = props

  const classes = useStyles()

  const nodeTitle = label || node.label

  const isDraggedDescendant = draggedNode && isDescendant(draggedNode, node)
  const isLandingPadActive = !didDrop && isDragging

  // Construct the scaffold representing the structure of the tree
  const scaffold = []

  lowerSiblingCounts.forEach((lowerSiblingCount, i) => {
    if(i > 0) {
      scaffold.push(
        <div
          className={classes.lineBlock}
          key={`pre_${1 + i}`}
          style={{ width: scaffoldBlockPxWidth }} />
      )

      if(treeIndex !== listIndex && i === swapDepth) {
      // This row has been shifted, and is at the depth of
      // the line pointing to the new destination
        let highlightLineClass = ''

        if(listIndex === swapFrom + swapLength - 1)
        // This block is on the bottom (target) line
        // This block points at the target block (where the row will go when released)
          highlightLineClass = classes.highlightBottomLeftCorner
        else if(treeIndex === swapFrom)
        // This block is on the top (source) line
          highlightLineClass = classes.highlightTopLeftCorner
        else
        // This block is between the bottom and top
          highlightLineClass = classes.highlightLineVertical

        scaffold.push(
          <div
            className={`${classes.absoluteLineBlock} ${highlightLineClass}`}
            key={`highlight_${1 + i}`}
            style={{
              left : scaffoldBlockPxWidth * i,
              width: scaffoldBlockPxWidth
            }} />
        )
      }
    }
  })

  const nodeContent = (
    <div className={classes.nodeContent}>
      <div className={classes.rowWrapper + (!canDrag ? ` ${classes.rowWrapperDragDisabled}` : '')}>
        {/* {scaffold} */}
        {
          connectDragPreview(
            <div
              className={
                classes.row +
                (isLandingPadActive ? ` ${classes.rowLandingPad}` : '') +
                (isLandingPadActive && !canDrop ? ` ${classes.rowCancelPad}` : '') +
                (isSearchMatch && !isSearchFocus ? ` ${classes.rowSearchMatch}` : '') +
                (isSearchFocus ? ` ${classes.rowSearchFocus}` : '') +
                (className ? ` ${className}` : '')
              }
              style={{
                opacity: isDraggedDescendant ? 0.5 : 1,
                ...style
              }}>
              <div className={classes.rowContents + (!canDrag ? ` ${classes.rowContentsDragDisabled}` : '')}>
                {
                  connectDragSource(
                    <div style={{ display: 'flex' }}>
                      <DragIndicatorIcon />
                    </div>
                  )
                }
                <div className={classes.rowLabel}>
                  {
                    typeof nodeTitle === 'string' ?
                      <span className={classes.rowTitle}>{nodeTitle}</span>  :
                      typeof nodeTitle === 'function' ?
                        nodeTitle({
                          node,
                          path,
                          treeIndex
                        }) :
                        nodeTitle
                  }
                </div>
                <div className={classes.rowToolbar}>
                  {buttons}
                </div>
              </div>
            </div>
          )
        }

      </div>
    </div>
  )

  // return canDrag ?
  //   connectDragSource(nodeContent, { dropEffect: 'copy' }) :
  //   nodeContent

  return nodeContent
}

FileThemeNodeContentRenderer.defaultProps = {
  buttons                 : null,
  canDrag                 : false,
  canDrop                 : false,
  className               : '',
  draggedNode             : null,
  isSearchFocus           : false,
  isSearchMatch           : false,
  label                   : null,
  parentNode              : null,
  style                   : {},
  swapDepth               : null,
  swapFrom                : null,
  swapLength              : null,
  toggleChildrenVisibility: null
}

FileThemeNodeContentRenderer.propTypes = {
  buttons           : PropTypes.node,
  canDrag           : PropTypes.bool,
  canDrop           : PropTypes.bool,
  className         : PropTypes.string,
  connectDragPreview: PropTypes.func.isRequired,
  connectDragSource : PropTypes.func.isRequired,
  didDrop           : PropTypes.bool.isRequired,
  draggedNode       : PropTypes.shape({}),
  isDragging        : PropTypes.bool.isRequired,
  isOver            : PropTypes.bool.isRequired,
  isSearchFocus     : PropTypes.bool,
  isSearchMatch     : PropTypes.bool,
  label             : PropTypes.oneOfType([ PropTypes.func, PropTypes.node ]),
  listIndex         : PropTypes.number.isRequired,
  lowerSiblingCounts: PropTypes.arrayOf(PropTypes.number).isRequired,
  node              : PropTypes.shape({}).isRequired,
  parentNode        : PropTypes.shape({}),
  path              : PropTypes.arrayOf(
    PropTypes.oneOfType([ PropTypes.string, PropTypes.number ])
  ).isRequired,
  rowDirection: PropTypes.string.isRequired,

  // Drag and drop API functions
  // Drag source
  scaffoldBlockPxWidth    : PropTypes.number.isRequired,
  style                   : PropTypes.shape({}),
  swapDepth               : PropTypes.number,
  swapFrom                : PropTypes.number,
  swapLength              : PropTypes.number,
  toggleChildrenVisibility: PropTypes.func, // Needed for dndManager
  // Drop target
  treeId                  : PropTypes.string.isRequired,
  treeIndex               : PropTypes.number.isRequired
}

export default FileThemeNodeContentRenderer
