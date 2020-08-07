import React from 'react'
import PropTypes from 'prop-types'
import XDate from 'xdate'
import useStyles from './node-content-renderer-style'
import { Typography, Tooltip, makeStyles, IconButton } from '@krowdy-ui/core'
import { Lock as LockIcon } from '@material-ui/icons'

function isDescendant(older, younger) {
  return (
    !!older.children &&
    typeof older.children !== 'function' &&
    older.children.some(
      child => child === younger || isDescendant(child, younger)
    )
  )
}

function cutValue(value, size) {
  return value.length > size ? value.slice(0, size) + '...' : value
}

const Value = ({ label, size, dots }) =>{
  const classes = useContentStyles()
  if(label.length <= size || !dots)
    return (
      <div>
        <Typography className={classes.value} variant='caption'>{label}</Typography>
      </div>
    )
  else
    return (
      <Tooltip title={label}>
        <div>
          <Typography className={classes.value} variant='caption'>{cutValue(label, size)}</Typography>
        </div>
      </Tooltip>
    )
}

const Label = ({ value, dots, size }) => {
  const classes = useContentStyles()
  if(value.length <= size || !dots)
    return <Typography className={classes.label} variant='body1'>{value}</Typography>
  else
    return (
      <Tooltip title={value}>
        <Typography className={classes.label} variant='body1'>{cutValue(value, size)}</Typography>
      </Tooltip>
    )
}

const Span = ({ value, dots, size }) => {
  const classes = useContentStyles()
  if(value.length <= size || !dots)
    return <Typography className={classes.span} variant='body1'>{value}</Typography>
  else
    return (
      <Tooltip title={value}>
        <Typography className={classes.span} variant='body1'>{cutValue(value, size)}</Typography>
      </Tooltip>
    )
}

const useContentStyles = makeStyles((theme) => ({
  label: {
    color   : theme.palette.primary[900],
    fontSize: 12
  },
  span: {
    color     : theme.palette.grey[600],
    fontSize  : 10,
    marginLeft: 4
  },
  value: {
    color     : theme.palette.grey[800],
    fontSize  : 10,
    lineHeight: '16px'
  }
}))

function FileThemeNodeContentRenderer(props) {
  const {
    connectDragPreview,
    connectDragSource,
    isDragging,
    dots,
    canDrop,
    node,
    draggedNode,
    buttons,
    className,
    didDrop
  } = props

  const classes = useStyles()

  const isDraggedDescendant = draggedNode && isDescendant(draggedNode, node)
  const isLandingPadActive = !didDrop && isDragging

  const nodeContent = (
    <div className={classes.nodeContent}>
      {
        connectDragPreview(
          <div className={classes.rowWrapper}>
            {connectDragSource(
              <div className={classes.containerCard}>
                {(node.type === 'list' && node.operator === '$nin') && (
                  <IconButton size='small'>
                    <LockIcon  className={classes.lockIcon} fontSize='small' />
                  </IconButton>
                )}
                <div
                  className={
                    classes.row +
                (isLandingPadActive ? ` ${classes.rowLandingPad}` : '') +
                (isLandingPadActive && !canDrop ? ` ${classes.rowCancelPad}` : '') +
                (className ? ` ${className}` : '')
                  }
                  style={{ opacity: isDraggedDescendant ? 0.5 : 1 }}>
                  <div
                    className={classes.rowPanelLeft}>
                    <div className={classes.rowContentTitle}>
                      <Label
                        dots={dots}
                        size={15}
                        value={node.label} />
                      <Span
                        color='info'
                        dots={dots}
                        size={20}
                        value={node.operatorLabel}
                        variant='info1' />
                    </div>
                    {
                      node.value ?
                        <div >
                          {
                            Array.isArray(node.value) ?
                              node.value.map((value, indexValue) => {
                                const label = node.type === 'date' ? new XDate(value.label || value).toString('dd/MM/yyyy') : value.label || value

                                return (
                                  <Value
                                    dots={dots}
                                    key={`chip-${1 + indexValue}`}
                                    label={label}
                                    size={10} />
                                )}) :
                              <Value
                                dots={dots}
                                label={node.type === 'date' ? new XDate(node.value).toString('dd/MM/yyyy') : node.value}
                                size={10} />
                          }
                        </div> :
                        null
                    }
                  </div>
                  <div
                    className={classes.rowPanelRight}>
                    {buttons}
                  </div>
                </div>
              </div>
            )}
          </div>
        )
      }
    </div>
  )

  return nodeContent
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
