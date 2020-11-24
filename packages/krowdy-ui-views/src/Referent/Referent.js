import React from 'react'
import { withStyles, Card, CardContent, Avatar } from '@material-ui/core'
import { Person as PersonIcon } from '@material-ui/icons'
import InputCustomized from './InputCustomized'

export const styles = (theme) => ({
  inputGrid: {
    display            : 'grid',
    gap                : '4px',
    gridTemplateColumns: '1fr 1fr',
    marginTop          : theme.spacing(.5)
  },
  personIcon: {
    fontSize: 13
  },
  refAvatarContainer: {
    alignItems    : 'center',
    border        : `1px solid ${theme.palette.grey[400]}`,
    borderRadius  : '50%',
    display       : 'flex',
    height        : 28,
    justifyContent: 'center',
    width         : 28
  },
  refContent: {
    '&:last-child': {
      paddingBottom: theme.spacing(1)
    },
    display: 'flex',
    padding: theme.spacing(1)
  },
  refInfoContent: {
    flex      : 1,
    marginLeft: theme.spacing(1)
  },
  subtitle: {
    fontWeight: 500,
    margin    : theme.spacing(1, 0)
  }
})

const Referent = ({
  classes,
  disabled,
  onChange = () => {},
  items = [],
  title,
  placeholderTitle,
  photo
}) => {
  const _handleChange = ({ target: { value, name } }) => {
    onChange(name, value)
  }

  return (
    <Card variant='outlined'>
      <CardContent className={classes.refContent}>
        <Avatar className={classes.refAvatarContainer} src={photo}>
          <PersonIcon className={classes.personIcon} />
        </Avatar>
        {/* <div className={classes.refAvatarContainer}>
          <PersonIcon className={classes.personIcon} />
        </div> */}
        <div className={classes.refInfoContent}>
          <InputCustomized
            disabled={disabled}
            // error={error.referent.fullName}
            fullWidth
            name='title'
            onChange={_handleChange}
            placeholder={placeholderTitle}
            size='medium'
            unPadding
            value={title} />
          <div className={classes.inputGrid}>
            {items.map(({ placeholder, name, value, ...props }, index) => (
              <InputCustomized
                disabled={disabled}
                filled
                key={`InputCustomized-${name}-${index}`}
                name={name}
                onChange={_handleChange}
                placeholder={placeholder}
                size='small'
                value={value}
                {...props} />
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
Referent.propTypes = {
}

export default withStyles(styles, { name: 'Referent' })(Referent)
