import React from 'react'

const AppliedFilters = ({ filters  = [] }) => (
  <div>
    {
      filters.map((filter, index) => (
        <div
          key={index} style={{
            border: '1px solid red'
          }}>
          <p>{filter.label}</p>
          {
            Array.isArray(filter.value) ?
              <ul>
                {
                  filter.value.map((filterValue, valIndex) => <li
                    key={valIndex} style={{
                      border    : '1px solid blue',
                      marginLeft: 20
                    }}>{filterValue}</li>)
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

export default AppliedFilters
