import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@krowdy-ui/styles'
import { Input, Divider, List, ListItem } from '@krowdy-ui/core'

export const styles = theme => ({
  buttonSelected: {
    '&:active': {
      backgroundColor: theme.palette.primary['50'],
      borderRadius: '4px',
      color: theme.palette.primary['400'],
    }
  },
  content: {
    border: `1px solid ${theme.palette.grey['200']}`,
    borderRadius: '8px',
    height: '450px',
    width: '312px',
  },
  list: {
    listStyle: 'none',
    margin: 'auto',
    width: '88%'
  },
  search: {
    margin: theme.spacing(2),
    width: '88%',
  }
})

function _handleClickOnSecondsTasks(callback) {
  return callback
}

function _handleClickOnFirtsTasks(callback) {
  return callback
}
const SearchTasks = props => {
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
    <div className={classes.content}>
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
            ? firtsList.map((element, index) => <ListItem button key={`firts-${index}`}
              className={classes.buttonSelected}
              onClick={(element.action) ? _handleClickOnFirtsTasks(element.action) : null}
              {...propsListItemsToFirstList}
            >{element.taskName}</ListItem>)
            : null
        }
      </List>
      <Divider variant='middle' />
      <List className={classes.list} key='secondList' {...propsLists}>
        {
          (secondList && secondList.length > 0)
            ? secondList.map((element, index) => <ListItem button
              key={`second-${index}`}
              className={classes.buttonSelected}
              onClick={(element.action) ? _handleClickOnSecondsTasks(element.action) : null}
              {...propsListItemsToSecondList}
            >{element.taskName}</ListItem>)
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
  propsListItemsToSecondList: PropTypes.object,
  propsLists: PropTypes.object,
  secondList: PropTypes.array,
}

SearchTasks.muiName = 'SearchTasks'

export default withStyles(styles, { name: 'KrowdySearchTasks' })(SearchTasks)