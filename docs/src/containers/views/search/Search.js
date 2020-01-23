import React, { useState } from 'react'
import { Search } from '@krowdy-ui/views'
import SearchIcon from '@material-ui/icons/Search'

export default function () {
  const [ search, setSearch ] = useState('')

  const type = 'border-bottom'
  const placeholder = 'Buscar candidatos'
  const searchIcon = <SearchIcon />
  const onChange = event => {
    setSearch(event.target.value)
  }
  const onKeyDown = e => {
    if(e.key === 'Enter')
      e.preventDefault()
  }

  return (
    <div style={{
      alignItems    : 'center',
      display       : 'flex',
      flexDirection : 'column',
      height        : 400,
      justifyContent: 'space-evenly',
      margin        : '50px',
      width         : 'auto'
    }}>
      <Search
        onChange={onChange}
        onKeyDown={onKeyDown}
        placeholder={placeholder}
        searchIcon={searchIcon}
        type={type}
        value={search} />

      <Search
        placeholder={placeholder}
        searchIcon={searchIcon} />
    </div>
  )
}
