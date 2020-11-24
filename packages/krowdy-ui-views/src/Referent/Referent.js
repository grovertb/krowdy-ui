import React from 'react'
import { withStyles, Card, CardContent, Avatar } from '@material-ui/core'
import { Person as PersonIcon } from '@material-ui/icons'
import InputCustomized from './InputCustomized'

export const styles = (theme) => ({
  inputGrid: {
    display            : 'grid',
    gap                : '4px',
    gridTemplateColumns: '1fr 1fr',
    marginTop          : 4
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
      paddingBottom: 8
    },
    display: 'flex',
    padding: 8
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

// import React, { useMemo } from 'react'
// import { Typography, CardContent, Card } from '@krowdy-ui/core'
// import { Person as PersonIcon } from '@material-ui/icons'

// import { useDebouncedCallback } from 'use-debounce'

// import { mongoObjectId, validateEmail } from 'utils'

// import InputCustomized from './InputCustomized'
// // import AutoComplete from './AutoComplete'

// import { useStyles } from './styles'

// const Referent = ({ referent, onChange,disabled,setError, error }) => {
//   const classes = useStyles()

//   const referentTemp = useMemo(() => ({
//     _id           : referent ? referent._id : mongoObjectId(),
//     actualCompany : referent ? referent.actualCompany : '',
//     actualPosition: referent ? referent.actualPosition : '',
//     email         : referent ? referent.email : '',
//     fullName      : referent ? referent.fullName : '',
//     phone         : referent ? referent.phone : ''
//   }),[ referent ])

//   const [ validFields ] = useDebouncedCallback((value,name) => {
//     switch (name) {
//       case 'email': {
//         const errorText = value && value !== '' && validateEmail(value) ? '' : value === '' ?  '' : 'Email incorrecto'
//         setError(state => ({ ...state, referent: { ...state.referent ,[name]: errorText } }))
//         break
//       }
//       case 'phone': {
//         break
//       }
//       default: {
//         break
//       }
//     }
//   },250)
//   const _handleChange = ({ target: { value, name } }) => {
//     /*  else {
//       setError(state => ({ ...state, referent: { ...state.referent ,[name]: value ? '' : 'Campo requerido' } }))
//     } */
//     validFields(value,name)
//     onChange(({ referent: { ...referentTemp , [name]: value } }))
//   }
//   // const _handleChangeAutoComplete = (value,name) => {
//   //   onChange(({ referent: { ...referentTemp , [name]: value } }))
//   // }

//   return (
//     <div>
//       <Typography className={classes.subtitle} variant='h6'>Contacto de un referente:</Typography>

//     </div>
//   )
// }

// export default Referent
