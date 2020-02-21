import React from 'react'
import PropTypes from 'prop-types'
import SortableTree from 'react-sortable-tree'
import Theme from './Theme'

function FiltersTree(props) {
  const {
    treeData: treeDataProps,
    onChange = () => {}
  } = props

  const [ treeData, setTreeData ] = React.useState([])

  React.useEffect(() => {
    setTreeData(treeDataProps)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const _handleUpdateTreeData = data => {
    setTreeData(data)
    onChange(data)
  }

  return (
    <SortableTree
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
