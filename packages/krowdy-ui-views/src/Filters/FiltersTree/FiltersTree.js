import React from 'react'
import PropTypes from 'prop-types'
import SortableTree, { removeNodeAtPath } from 'react-sortable-tree'
import Theme from './Theme'
import { IconButton } from '@krowdy-ui/core'
import {
  Close as CloseIcon,
  Edit as EdiIcon
} from '@material-ui/icons'

function FiltersTree(props) {
  const {
    treeData: treeDataProps,
    onChange = () => {},
    onClickEdit = () => {}
  } = props

  const [ treeData, setTreeData ] = React.useState([])

  React.useEffect(() => {
    setTreeData(treeDataProps)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ treeDataProps ])

  const _handleUpdateTreeData = data => {
    setTreeData(data)
    onChange(data)
  }

  const _handleClickDelete = rowInfo => () => {
    const newTree = removeNodeAtPath({
      getNodeKey: ({ treeIndex }) => treeIndex,
      path      : rowInfo.path,
      treeData
    })
    _handleUpdateTreeData(newTree)
  }

  const _handleClickEdit = rowInfo => () => {
    console.log('Grover: FiltersTree -> rowInfo', rowInfo)
    onClickEdit(rowInfo.node)
  }

  return (
    <SortableTree
      generateNodeProps={rowInfo => ({
        buttons: [
          <React.Fragment key={rowInfo.node._id}>
            <IconButton onClick={_handleClickDelete(rowInfo)} size='small'>
              <CloseIcon fontSize='small' />
            </IconButton>
            <IconButton onClick={_handleClickEdit(rowInfo)} size='small'>
              <EdiIcon  fontSize='small' />
            </IconButton>
          </React.Fragment>
        ]
      })}
      isVirtualized={false}
      onChange={_handleUpdateTreeData}
      theme={Theme}
      treeData={treeData} />
  )
}

FiltersTree.propTypes = {
  onChange: PropTypes.func,
  treeData: PropTypes.array
}

export default FiltersTree
