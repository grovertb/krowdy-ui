import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@krowdy-ui/styles'
import {
  KeyboardArrowLeft as ArrowLeftIcon,
  KeyboardArrowRight as ArrowRightIcon
} from '@material-ui/icons'
import { Box, Typography, InputBase, Select, MenuItem, Input, IconButton } from '@krowdy-ui/core'
import clsx from 'clsx'

export const styles = () => ({

})

const Pagination = props => {
  const {
    classes,
    onChangeLimitSelect,
    valueLimitSelect,
    backPage,
    onChangeInput,
    onKeyDownInput,
    pageInput,
    totalPages,
    nextPage
  } = props

  const limits = [ 20, 50, 100 ]

  return (
    <div  >
      <Box alignItems='center' display='flex'>

        <Typography>Mostrar</Typography>
        <Select
          input={<InputBase />}
          onChange={onChangeLimitSelect}
          value={valueLimitSelect}>
          {limits.map((limit, index) => (
            <MenuItem key={index} value={limit}>{limit}</MenuItem>
          ))}
        </Select>
        <Box alignItems='center' display='flex'>
          <IconButton>
            <ArrowLeftIcon
              className={classes.icon}
              onClick={backPage} />
          </IconButton>
          <Input
            classes={{
              input: clsx(classes.input, classes.color),
              root : classes.rootTextfield
            }}
            disableUnderline
            onChange={onChangeInput}
            onKeyDown={onKeyDownInput}
            value={pageInput} />
          <Typography className={classes.slash}>/</Typography>
          <Typography>{totalPages > 0 ? totalPages : 1}</Typography>
          <IconButton>
            <ArrowRightIcon
              className={classes.icon}
              onClick={nextPage} />
          </IconButton>
        </Box>
      </Box>
    </div >

  )
}

Pagination.propTypes = {
  classes: PropTypes.object
}

Pagination.muiName = 'Pagination'

export default withStyles(styles, { name: 'KrowdyPagination' })(Pagination)
