import React from 'react'
import { IconButton } from '@krowdy-ui/core'
import DeleteIcon from '@material-ui/icons/Delete'
import EditIcon from '@material-ui/icons/Edit'

const AppliedFilters = ({ filters  = [], onClickEdit = () => {}, onDeleteFilter = () => {} }) => {
  const _handleClick = (item) =>  () => {
    onClickEdit(item)
  }

  const _handleClickDelete = (item) => () => {
    onDeleteFilter(item)
  }

  return (
    <div>
      {
        filters.map((filter, index) => (
          <div
            key={index} style={{
              border: '1px solid red'
            }}>
            <p>{filter.label}</p>
            <IconButton onClick={_handleClick(filter)}><EditIcon /></IconButton>
            <IconButton onClick={_handleClickDelete(filter)} ><DeleteIcon /></IconButton>
            {
              Array.isArray(filter.value) ?
                <ul>
                  {
                    filter.value.map((filterValue, valIndex) => <li
                      key={valIndex} style={{
                        border    : '1px solid blue',
                        marginLeft: 20
                      }}>{filter.typeFilter === 'category' ? filterValue.label : filterValue}</li>)
                  }
                </ul>                :
                <p style={{
                  border    : '1px solid blue',
                  marginLeft: 20
                }}>{filter.value}</p>
            }
          </div>
        ))
      }
    </div>

  )
}

export default AppliedFilters
