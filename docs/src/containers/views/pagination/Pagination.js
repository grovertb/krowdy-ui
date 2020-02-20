import React from 'react'
import { Pagination } from '@krowdy-ui/views'

export default function () {
  const limits = [ 20, 50, 100 ]
  const [ valueInputPages, setValue ] = React.useState(1)
  const totalPages = 10
  const onChange = (event) => {
    console.log('===> XAVI <===: onChange -> event', event)
    setValue(event)
  }

  const onChangeSelect = value => {
    console.log('===> XAVI <===: value', value)
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
        onChangeSelect={onChangeSelect}
        page={valueInputPages}
        totalPages={totalPages}
        valueSelect={20} />
    </div>
  )
}
