import React, { useState } from 'react'
import { Search } from '@krowdy-ui/views'
import SearchIcon from '@material-ui/icons/Search'

export default function () {
  const [search, setSearch] = useState('')

  const placeholder = 'Buscar candidatos'
  const searchIcon = <SearchIcon />
  const onChange = event => {
    setSearch(event.target.value)
  }
  const onKeyDown = e => {
    if (e.key === 'Enter')
      e.preventDefault()
  }

  return (
    <div style={{ alignItems: 'center', display: 'flex', justifyContent: 'center', margin: '50px' }}>
      <Search
        value={search}
        onChange={onChange}
        onKeyDown={onKeyDown}
        placeholder={placeholder}
        searchIcon={searchIcon} />
    </div>
  )
}