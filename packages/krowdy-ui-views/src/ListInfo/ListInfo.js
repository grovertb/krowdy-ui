import React from 'react'
import PropTypes from 'prop-types'
import {
  Card,
  List,
  Divider,
  withStyles
} from '@krowdy-ui/core'
import { ListInfoItem } from '@krowdy-ui/views'

const styles = (theme) => ({
  container: {
    padding: theme.spacing(1.5),
    width  : 298
  },
  header: {
    alignItems    : 'center',
    display       : 'flex',
    justifyContent: 'center',
    margin        : theme.spacing(1.625)
  }
})

const ListInfo = ({ classes, header, list, hover, onChange, selectedId }) => (
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
            {list.map(({ icon, src, title, subtitle, _id }) => (
              <ListInfoItem
                _id={_id}
                hover={hover}
                icon={icon}
                key={_id}
                onChange={onChange}
                selected={selectedId === _id}
                src={src}
                subtitle={subtitle}
                title={title} />
            ))}
          </List>
        ) : null
      }
    </div>
  </Card>
)

ListInfo.propTypes = {
  classes: PropTypes.object,
  header : PropTypes.element,
  hover  : PropTypes.bool,
  list   : PropTypes.arrayOf(PropTypes.shape({
    _id     : PropTypes.string.isRequired,
    icon    : PropTypes.element,
    src     : PropTypes.string,
    subtitle: PropTypes.string,
    title   : PropTypes.string
  })),
  onChange  : PropTypes.func,
  selectedId: PropTypes.string
}

export default withStyles(styles, { name: 'ListInfo' })(ListInfo)
