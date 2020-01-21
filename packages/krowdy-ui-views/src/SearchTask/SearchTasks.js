import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@krowdy-ui/styles'
import { Input, Divider, List, ListItem } from '@krowdy-ui/core'
import clsx from 'clsx'

export const styles = theme => ({
  buttonSelected: {
    backgroundColor: `${theme.palette.primary[50]} !important`,
    borderRadius: 4,
    color: theme.palette.primary[400]
  },
  container: {
    border: `1px solid ${theme.palette.grey[200]}`,
    borderRadius: 8,
    height: 'auto',
    padding: 16
  },
  divider: {
    margin: '1px 0'
  },
  list: {
    listStyle: 'none',
    margin: 'auto',
  },
  listItem: {
    '&:hover': {
      backgroundColor: 'transparent',
      color: theme.palette.primary[400],
    },
    padding: 14,
  },
  search: {
    '&:hover': {
      borderBottom: `1px solid ${theme.palette.primary[400]}`,
    },
    borderBottom: `1px solid ${theme.palette.grey[400]}`,
    color: theme.palette.grey[700],
  },

})


const SearchTasks = props => {

  const {
    classes,
    firtsList = [],
    iconOnSeeker,
    secondList = [],
    onClickInItem = () => { },
    propsInput,
    propsLists,
    propsListItemsToFirstList,
    propsListItemsToSecondList,
    selected
  } = props

  return (
    <div className={classes.container}>
      <Input
        className={classes.search}
        color='secondary'
        placeholder='Buscar tarea'
        endAdornment={iconOnSeeker}
        disableUnderline
        fullWidth
        {...propsInput}
      />
      <List className={classes.list} key='firtsList' {...propsLists}>
        {
          firtsList.map((element, index) => {
            const value = (selected === element._id)
            return <ListItem button
              selected={value}
              key={`firts-${index}`}
              className={clsx(classes.listItem, { [classes.buttonSelected]: value })}
              onClick={() => onClickInItem(element._id)}
              {...propsListItemsToFirstList}
            >{element.taskName}</ListItem>
          })
        }
      </List>
      <Divider className={classes.divider} />
      <List className={classes.list} key='secondList' {...propsLists}>
        {
          secondList.map((element, index) => {
            const value = (selected === element._id)
            return <ListItem button
              key={`second-${index}`}
              className={clsx(classes.listItem, { [classes.buttonSelected]: value })}
              selected={(selected === element._id)}
              onClick={() => onClickInItem(element._id)}
              {...propsListItemsToSecondList}
            >{element.taskName}</ListItem>
          })
        }
      </List>
    </div>
  )
}

SearchTasks.propTypes = {
  classes: PropTypes.object,
  firtsList: PropTypes.array,
  iconOnSeeker: PropTypes.node,
  onClickInItem: PropTypes.func,
  propsInput: PropTypes.object,
  propsListItemsToFirstList: PropTypes.object,
  propsListItemsToSecondList: PropTypes.object,
  propsLists: PropTypes.object,
  secondList: PropTypes.array,
  selected: PropTypes.string,
}

SearchTasks.muiName = 'SearchTasks'

export default withStyles(styles, { name: 'KrowdySearchTasks' })(SearchTasks)