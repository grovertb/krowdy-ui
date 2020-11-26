import React from 'react'
import {
  Card,
  List,
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
  withStyles
} from '@krowdy-ui/core'
import {
  Image as ImageIcon,
  Done as DoneIcon
} from '@material-ui/icons'

const styles = (/* theme */) => ({
  container: {
    width: 298
  }
})

const ListInfo = ({ classes }) => (
  <Card className={classes.container}>
    <List>
      <ListItem button>
        <ListItemAvatar>
          <Avatar>
            <ImageIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary='Photos' secondary='Jan 9, 2014' />
        <DoneIcon color='primary' />
      </ListItem>
    </List>
  </Card>
)

export default withStyles(styles, { name: 'ListInfo' })(ListInfo)
