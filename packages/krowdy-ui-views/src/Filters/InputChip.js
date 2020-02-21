import React, { useEffect, useState } from 'react'
import { PropTypes } from 'prop-types'
import TextField from '@material-ui/core/TextField'
import Autocomplete from '@material-ui/lab/Autocomplete'

const InputChip = (props) => {
  const {
    onChange,
    values: commingValues = []
  } = props

  const [ inputValue, setInputValue ] = useState('')
  const [ values, setValues ] = useState(() => commingValues.map(item => ({ title: item })))

  const existsTitle = title => values.some(value => value.title === title)

  useEffect(() => {
    onChange(values.map(({ title }) => title))
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ values ])

  const _handleKeyDown = event => {
    if(event.keyCode === 13 && inputValue) {
      const existsValue = existsTitle(inputValue)
      // Don't add if value already exists
      if(!existsValue)
        setValues(prev => [ ...prev, { title: inputValue } ])

      setInputValue('')
    }
  }

  const _handleInputChange = (_, text) => setInputValue(text)
  const _handleChange = (_, values) => setValues(values)

  return (
    <Autocomplete
      ChipProps={{
        color  : 'primary',
        variant: 'outlined'
      }}
      forcePopupIcon={false}
      getOptionLabel={option => option.title}
      inputValue={inputValue}
      multiple
      onChange={_handleChange}
      onInputChange={_handleInputChange}
      onKeyDown={_handleKeyDown}
      open={false}
      options={[]}
      popupIcon={null}
      renderInput={params => (
        <TextField
          {...params}
          fullWidth
          placeholder='Valor'
          size='small' />
      )}
      size='small'
      value={values} />
  )
}

InputChip.propTypes = {
  onChange: PropTypes.func.isRequired,
  values  : PropTypes.arrayOf(PropTypes.string).isRequired
}

export default InputChip
