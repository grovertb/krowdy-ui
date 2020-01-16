import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@krowdy-ui/styles'
import { Input, Divider, List, ListItem } from '@krowdy-ui/core'
import clsx from 'clsx'

export const styles = theme => ({
  buttonSelected: {
    backgroundColor: theme.palette.primary[50],
    color: theme.palette.primary[400]
  },
  container: {
    border: `${1} solid ${theme.palette.grey[200]}`,
    borderRadius: 8,
    height: 'auto',
    minWidth: 312,
  },
  list: {
    listStyle: 'none',
    margin: 'auto',
    width: '88%'
  },
  listItem: {
    '&:hover': {
      backgroundColor: theme.palette.primary[50],
      color: theme.palette.primary[400]
    }
  },
  search: {
    margin: theme.spacing(2),
    width: '88%',
  }
})


const SearchTasks = props => {
  const [selected, setSelected] = React.useState('')

  const {
    classes,
    firtsList = [],
    iconOnSeeker,
    secondList = [],
    propsInput,
    propsLists,
    propsListItemsToFirstList,
    propsListItemsToSecondList,
  } = props

  return (
    <div className={classes.container}>
      <Input
        className={classes.search}
        color='secondary'
        placeholder='Buscar Tarea'
        endAdornment={iconOnSeeker}
        {...propsInput}
      />
      <List className={classes.list} key='firtsList' {...propsLists}>
        {
          (firtsList && firtsList.length > 0)
            ? firtsList.map((element, index) => {
              const value = (selected === element._id)
              return <ListItem button
                selected={value}
                key={`firts-${index}`}
                className={clsx(classes.listItem, { [classes.buttonSelected]: value })}
                onClick={() => setSelected(element._id)}
                {...propsListItemsToFirstList}
              >{element.taskName}</ListItem>
            })
            : null
        }
        <Divider variant='middle' />
        {
          (secondList && secondList.length > 0)
            ? secondList.map((element, index) => {
              const value = (selected === element._id)
              return <ListItem button
                key={`second-${index}`}
                className={clsx(classes.listItem, { [classes.buttonSelected]: value })}
                selected={(selected === element._id)}
                onClick={() => setSelected(element._id)}
                {...propsListItemsToSecondList}
              >{element.taskName}</ListItem>
            })
            : null
        }
      </List>
    </div>
  )
}

SearchTasks.propTypes = {
  classes: PropTypes.object,
  firtsList: PropTypes.array,
  iconOnSeeker: PropTypes.node,
  propsInput: PropTypes.object,
  propsListItemsToFirstList: PropTypes.object,
  propsLists: PropTypes.object,
}

SearchTasks.muiName = 'SearchTasks'

export default withStyles(styles, { name: 'KrowdySearchTasks' })(SearchTasks)