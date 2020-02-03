import React from 'react'
import { Pagination } from '@krowdy-ui/views'

export default function () {
  const limits = [ 20, 50, 100 ]
  const [ valueInputPages, setValue ] = React.useState(6)
  const totalPages = 10
  const onChange = (event) => {
    setValue(event)
  }

  return (
    <div style={{
      alignItems    : 'center',
      display       : 'flex',
      flexDirection : 'column',
      height        : 400,
      justifyContent: 'space-evenly',
      margin        : 50,
      width         : 'auto'
    }}>
      <Pagination
        limits={limits}
        onChangePage={onChange}
        page={valueInputPages}
        totalPages={totalPages} />
    </div>
  )
}
