import React from 'react'
import SortableTree from 'react-sortable-tree'
import Theme from './Theme'

function FiltersTree(props) {
  const {
    treeData
  } = props

  console.log('Grover: FiltersTree -> props', props)
  console.log('Grover: FiltersTree -> treeData', treeData)

  const _handleUpdateTreeData = () => {

  }

  return (
    <SortableTree
      isVirtualized={false}
      onChange={_handleUpdateTreeData}
      theme={Theme}
      treeData={treeData} />
  )
}

export default FiltersTree
