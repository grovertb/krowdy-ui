import React from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'
import Typography from '../Typography'
import TextField from '../TextField'
import withStyles from '../styles/withStyles'
import { InputAdornment } from '..'

const styles = ({ spacing }) => ({
  action: {
    '& > *': {
      '&:not(:last-child)': {
        marginRight: spacing(.5)
      }
    }
  },
  inputSearch: {
    '& * input': {
      fontSize: 14,
      padding : spacing(1.5, 1)
    },
    '& > div': {
      paddingRight: spacing(2)
    },
    minWidth: 300
  },
  root: {
    alignItems    : 'center',
    display       : 'flex',
    justifyContent: 'space-between',
    padding       : spacing(2)
  },
  /* Styles applied to the action element. */
  searchIcon: {
    '&:hover': {
      cursor: 'pointer'
    }
  }
})

function TableToolbar(props) {
  const inputSearch = React.useRef()
  const {
    action,
    component: Component = 'div',
    classes,
    searchIcon: SearchIcon,
    className,
    onHandleSearch = () => {},
    title,
    titleProps,
    withSearch
  } = props

  const _handleChangeSearch = (ev) => {
    const { value } = ev.target
    if(ev.keyCode === 13) onHandleSearch(value)
  }

  return (
    title || withSearch ?
      <Component className={clsx(classes.root, className)}>
        {
          title ? (
            <Typography variant='h6' {...titleProps}>{title}</Typography>
          ) : null
        }
        {
          withSearch ? (
            <TextField
              className={classes.inputSearch}
              InputProps={
                SearchIcon ? {
                  endAdornment: (
                    <InputAdornment position='end'>
                      <SearchIcon className={classes.searchIcon} onClick={() => onHandleSearch(inputSearch.current.value)} />
                    </InputAdornment>
                  )
                }: undefined
              }
              inputRef={inputSearch}
              onKeyUp={_handleChangeSearch}
              placeholder='Buscar'
              variant='outlined' />
          ) : null
        }
        {action && <div className={classes.action}>{action}</div>}
      </Component> : null
  )
}

TableToolbar.propTypes = {
  action        : PropTypes.node,
  /**
   * @ignore
   */
  className     : PropTypes.string,
  /**
   * The component used for the root node.
   * Either a string to use a DOM element or a component.
   */
  component     : PropTypes.elementType,
  onHandleSearch: PropTypes.func,
  searchIcon    : PropTypes.elementType,
  title         : PropTypes.string,
  titleProps    : PropTypes.object,
  withSearch    : PropTypes.bool
}

export default withStyles(styles, { name: 'TableToolbar' })(TableToolbar)
