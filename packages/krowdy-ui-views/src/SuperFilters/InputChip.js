import React, { useState } from 'react'
import PropTypes from 'prop-types'
import TextField from '@material-ui/core/TextField'
import Autocomplete from '@material-ui/lab/Autocomplete'

const InputChip = (props) => {
  const {
    onChange,
    values
  } = props

  const [ inputValue, setInputValue ] = useState('')

  const _handleKeyDown = event => {
    if(event.keyCode === 13 && inputValue) {
      const existsValue =values.includes(inputValue)
      // Don't add if value already exists
      if(!existsValue)
        onChange(values.concat(inputValue))

      setInputValue('')
    }
  }

  const _handleInputChange = (_, text) => setInputValue(text)
  const _handleChange = (_, values) => onChange(values)

  return (
    <Autocomplete
      ChipProps={{
        color  : 'primary',
        variant: 'outlined'
      }}
      forcePopupIcon={false}
      getOptionLabel={option => option}
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
