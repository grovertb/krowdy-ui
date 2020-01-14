import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@krowdy-ui/styles'
import { Input, Divider, List, ListItem } from '@krowdy-ui/core'

export const styles = theme => ({
  buttonSelected: {
    '&:hover': {
      backgroundColor: '#E6F7FF',
      borderRadius: '4px',
      color: '#40A9FF',
    }
  },
  content: {
    border: '1px solid #EAEAEA',
    borderRadius: '8px',
    height: '400px',
    width: '312px',
  },
  list: {
    listStyle: 'none',
    margin: theme.spacing(0, 1.5),
    width: '90%'
  },
  search: {
    margin: theme.spacing(2, 1.5, 0.5, 1.5),
    width: '90%',
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
      <div>
        <Input
          className={classes.search}
          color='secondary'
          placeholder='Buscar Tarea'
          endAdornment={iconOnSeeker}
          {...propsInput}
        />
      </div>
      <List className={classes.list} key='firtsList' {...propsLists}>
        {
          (firtsList && firtsList.length > 0)
            ? firtsList.map((element, index) => <ListItem button key={`firts-${index}`}
              className={classes.buttonSelected}
              onClick={_handleClickOnFirtsTasks(element.action)}
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
              onClick={_handleClickOnSecondsTasks(element.action)}
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