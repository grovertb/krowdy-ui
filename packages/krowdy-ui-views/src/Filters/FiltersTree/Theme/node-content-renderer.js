import React from 'react'
import PropTypes from 'prop-types'
import {
  DragIndicator as DragIndicatorIcon,
  Close as CloseIcon,
  Edit as EdiIcon
} from '@material-ui/icons'
import useStyles from './node-content-renderer-style'
import { IconButton, Chip, Typography } from '@krowdy-ui/core'

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
    connectDragPreview,
    connectDragSource,
    isDragging,
    canDrop,
    // canDrag,
    node,
    // title,
    draggedNode,
    // path,
    // treeIndex,
    // buttons,
    className,
    didDrop
    // treeId // Not needed, but preserved for other renderers
    // isOver, // Not needed, but preserved for other renderers
    // parentNode, // Needed for dndManager
    // rowDirection
  } = props

  const classes = useStyles()

  // const nodeTitle = title || node.title

  const isDraggedDescendant = draggedNode && isDescendant(draggedNode, node)
  const isLandingPadActive = !didDrop && isDragging

  const nodeContent = (
    <div className={classes.nodeContent}>
      {
        connectDragPreview(
          <div className={classes.rowWrapper}>
            {
              connectDragSource(
                <div className={classes.contentDrag}>
                  <DragIndicatorIcon />
                </div>
              )
            }
            <div
              className={
                classes.row +
                (isLandingPadActive ? ` ${classes.rowLandingPad}` : '') +
                (isLandingPadActive && !canDrop ? ` ${classes.rowCancelPad}` : '') +
                (className ? ` ${className}` : '')
              }
              style={{ opacity: isDraggedDescendant ? 0.5 : 1 }}>
              {/* <div className={classes.rowContent}> */}
              <div
              // className={classes.rowLabel}
                className={classes.rowPanelLeft}>
                <div className={classes.rowContentTitle}>
                  {/* {
                    typeof nodeTitle === 'string' ?
                      <span className={classes.rowTitle}>{nodeTitle}</span>  :
                      typeof nodeTitle === 'function' ?
                        nodeTitle({
                          node,
                          path,
                          treeIndex
                        }) :
                        nodeTitle
                  } */}
                  <Typography color='body' variant='body2'>{node.label}</Typography>
                  <Typography color='info' variant='info1'>{node.operatorLabel}</Typography>
                </div>
                {
                  node.value ?
                    <div className={classes.rowContentChips}>
                      {
                        Array.isArray(node.value) ?
                          node.value.map((value, indexValue) => (
                            <div key={`chip-${1 + indexValue}`}>
                              <Chip
                                color='primary'
                                label={value.label || value}
                                size='small'
                                variant='outlined' />
                            </div>
                          )) :
                          <div>
                            <Chip
                              color='primary'
                              label={node.value}
                              size='small'
                              variant='outlined' />
                          </div>
                      }
                    </div> :
                    null
                }
              </div>
              <div
              // className={classes.rowToolbar}
                className={classes.rowPanelRight}>
                <IconButton size='small'>
                  <CloseIcon fontSize='small' />
                </IconButton>
                <IconButton size='small'>
                  <EdiIcon  fontSize='small' />
                </IconButton>
              </div>
              {/* </div> */}
            </div>
          </div>
        )
      }
    </div>
  )

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
