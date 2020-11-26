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
  Done as DoneIcon,
  Domain as DomainIcon
} from '@material-ui/icons'
import { Divider } from '../../../krowdy-ui/src/index'

const styles = (theme) => ({
  avatar: {
    backgroundColor: theme.palette.secondary[10],
    color          : theme.palette.secondary[200]
  },
  button: {
    '&:hover': {
      backgroundColor: theme.palette.primary[10]
    }
  },
  container: {
    padding: theme.spacing(1.5),
    width  : 298
  },
  gutters: {
    paddingLeft : theme.spacing(1),
    paddingRight: theme.spacing(1)
  },
  header: {
    alignItems    : 'center',
    display       : 'flex',
    justifyContent: 'center',
    margin        : theme.spacing(1.625)
  },
  image: {
    color: theme.palette.secondary[200]
  },
  secondary: {
    fontSize: 12
  }
})

const ListInfo = ({ classes, header, list, onChange }) => (
  <Card className={classes.container}>
    {
      header ? (
        <>
          <div className={classes.header}>
            { header }
          </div>
          <Divider />
        </>
      ) : null
    }

    <div>
      {
        list.length ? (
          <List>
            {list.map(({ icon: Icon, src, title, subtitle, selected, _id }) => (
              <ListItem
                button
                classes={{
                  button : classes.button,
                  gutters: classes.gutters
                }}
                key={_id}
                onClick={onChange ? onChange(_id) : undefined}>
                <ListItemAvatar>
                  <Avatar
                    alt={title}
                    className={classes.avatar}
                    src={src}
                    variant='rounded' >
                    {Icon ? <Icon className={classes.image} /> : <DomainIcon className={classes.image} />}
                  </Avatar>
                </ListItemAvatar>
                <ListItemText
                  classes={{
                    secondary: classes.secondary
                  }}
                  primary={title}
                  secondary={subtitle} />
                {selected ? <DoneIcon color='primary' /> : null}
              </ListItem>
            ))}
          </List>
        ) : null
      }
    </div>
  </Card>
)

export default withStyles(styles, { name: 'ListInfo' })(ListInfo)
