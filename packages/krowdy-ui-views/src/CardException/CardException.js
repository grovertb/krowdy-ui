import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@krowdy-ui/styles'
import clsx from 'clsx'
import {
  Input,
  Card,
  Chip,
  // CardActions,
  InputAdornment,
  TextField,
  CardContent,
  Button,
  Typography,
  FormHelperText,
  FormControl
} from '@krowdy-ui/core'
import Autocomplete from '@material-ui/lab/Autocomplete'
import {
  Search as SearchIcon,
  Edit as EditIcon,
  Person as PersonIcon,
  Work as WorkIcon,
  Business as BusinessIcon,
  Group as GroupIcon,
  EmojiPeople as EmojiPeopleIcon
} from '@material-ui/icons'

export const styles = theme => ({
  actions: {
    display       : 'flex',
    justifyContent: 'flex-end',
    marginTop     : theme.spacing(2)
  },
  card: {
    cursor: 'pointer'
  },
  cardContent: {
    minWidth: 760
  },
  contentInputs: {
    display            : 'grid',
    gridGap            : 20,
    gridTemplateColumns: '1fr 1fr'
  },
  contentShow: {
    height : 0,
    opacity: 0
  },
  contentShowActive: {
    height : 'auto',
    opacity: 1
  },
  customChip: {
    marginRight: theme.spacing(2)
  },
  iconInput: {
    fontSize: '1rem'
  },
  inputSearch: {
    '& * input': {
      fontSize: 14,
      padding : '12px 10px !important'
    },
    '& > div': {
      padding: '0 14px 0 0 !important'
    },
    '& fieldset': {
      border      : 'none',
      borderBottom: '1px solid'
    },
    margin: '2px 0'
  },
  list: {
    display            : 'grid',
    flexDirection      : 'column',
    gridGap            : 20,
    gridTemplateColumns: '1fr 1fr',
    listStyle          : 'none',
    padding            : 0
  },
  listItem: {
    '& > svg': {
      marginRight: theme.spacing(2)
    },
    alignItems   : 'center',
    display      : 'flex',
    flexDirection: 'row',
    marginBottom : theme.spacing(1)
  },
  notShow: {
    opacity   : 0,
    transition: 'all .2s ease-in'
  },
  show: {
    opacity: 1
  },
  statusPoint: {
    borderRadius: '50%',
    display     : 'inline-block',
    height      : 8,
    marginRight : theme.spacing(1),
    width       : 8
  },
  statusPointCompleted: {
    background: theme.palette.success.main
  },
  statusPointPending: {
    background: theme.palette.warning.main
  },
  statusPointReviewed: {
    background: theme.palette.primary.main
  },
  title: {
    margin: theme.spacing(1, 0)
  },
  topBarStatus: {
    alignItems    : 'center',
    display       : 'flex',
    flexDirection : 'row',
    justifyContent: 'space-between',
    marginBottom  : theme.spacing(2)
  }
})
function CardException(props) {
  const {
    classes,
    area = {},
    candidate = {},
    company = {},
    dateTime = '',
    group = {},
    recruiter = {},
    krowder = {},
    statusException = '',
    title = '',
    type = null,
    listStyle = 'row',
    suggestion = []
  } = props

  const [ open, setOpen ] = useState(true)

  const renderStatusException = (statusException) => {
    switch (statusException) {
      case 'Completed':

        return <span><small className={
          clsx(
            classes.statusPoint,
            classes.statusPointCompleted
          )
        } /> Realizado</span>

      case 'Reviewed':

        return <span><small className={
          clsx(
            classes.statusPoint,
            classes.statusPointReviewed
          )
        } /> Revisado</span>

      default:
        return <span><small className={
          clsx(
            classes.statusPoint,
            classes.statusPointPending
          )
        } /> Pendiente</span>
    }
  }

  const _handleClickToggle = () => {
    setOpen(prevState => !prevState)
  }

  return (
    <Card>
      <CardContent
        className={classes.card}>
        <div className={classes.cardContent}>
          <div onClick={_handleClickToggle}>
            <div className={classes.topBarStatus}>
              <div className={classes.topBarStatusLeft}>
                <Chip className={classes.customChip} color='primary' label='Video EnTrevista' />
                {renderStatusException(statusException)}
              </div>
              <div className={classes.topBarStatusRight}>
                <Typography color='secondary' variant='h6'>
                  {dateTime}
                </Typography>
              </div>
            </div>

            <div className={classes.description}>
              <Typography color='secondary' variant='h6'>Excepciòn {type}</Typography>
              <Typography className={classes.title} variant='h5'>{title}</Typography>
              {
                listStyle === 'row' ?
                  <ul className={classes.list}>
                    <div>
                      {
                        recruiter.hasOwnProperty('name') ?
                          <li className={classes.listItem}>
                            <EmojiPeopleIcon color='primary' /> {recruiter.name}
                          </li> : null
                      }
                      {
                        krowder.hasOwnProperty('name') ?
                          <li className={classes.listItem}>
                            <EmojiPeopleIcon color='primary' /> {krowder.name}
                          </li> : null
                      }
                      {
                        candidate.hasOwnProperty('name') ?
                          <li className={classes.listItem}>
                            <PersonIcon color='primary' /> {candidate.name}
                          </li> : null
                      }
                      {
                        area.hasOwnProperty('name') ?
                          <li className={classes.listItem}>
                            <WorkIcon color='primary' /> {area.name}
                          </li> : null
                      }
                    </div>
                    <div className={
                      clsx(
                        classes.notShow,
                        { [classes.show]: open }
                      )
                    }>
                      {
                        company.hasOwnProperty('name') ?
                          <li className={classes.listItem}>
                            <BusinessIcon color='primary' /> {company.name}
                          </li> : null
                      }
                      {
                        group.hasOwnProperty('name') ?
                          <li className={classes.listItem}>
                            <GroupIcon color='primary' /> {group.name}
                          </li> : null
                      }
                    </div>
                  </ul> :

                  <ul className={classes.list}>
                    <li className={classes.listItem}>
                      <EmojiPeopleIcon color='primary' /> {recruiter.name}
                    </li>
                    <div className={
                      clsx(
                        classes.notShow,
                        { [classes.show]: open }
                      )
                    }>
                      {
                        recruiter.hasOwnProperty('name') ?
                          <li className={classes.listItem}>
                            <EmojiPeopleIcon color='primary' /> {recruiter.name}
                          </li> : null
                      }
                      {
                        krowder.hasOwnProperty('name') ?
                          <li className={classes.listItem}>
                            <EmojiPeopleIcon color='primary' /> {krowder.name}
                          </li> : null
                      }
                      {
                        candidate.hasOwnProperty('name') ?
                          <li className={classes.listItem}>
                            <PersonIcon color='primary' /> {candidate.name}
                          </li> : null
                      }
                      {
                        area.hasOwnProperty('name') ?
                          <li className={classes.listItem}>
                            <WorkIcon color='primary' /> {area.name}
                          </li> : null
                      }
                      {
                        company.hasOwnProperty('name') ?
                          <li className={classes.listItem}>
                            <BusinessIcon color='primary' /> {company.name}
                          </li> : null
                      }
                      {
                        group.hasOwnProperty('name') ?
                          <li className={classes.listItem}>
                            <GroupIcon color='primary' /> {group.name}
                          </li> : null
                      }
                    </div>
                  </ul>
              }
            </div>
          </div>

          <div className={clsx(
            classes.contentShow,
            {
              [classes.contentShowActive]: open
            }
          )}>
            <div className={classes.contentInputs}>
              <FormControl className={clsx(classes.margin, classes.withoutLabel, classes.textField)}>
                <Input
                  endAdornment={<EditIcon className={classes.iconInput} />} />
                <FormHelperText>Horario agendado</FormHelperText>
              </FormControl>

              <FormControl>

                <Autocomplete
                  noOptionsText='No hay coincidencias'
                  options={suggestion.map(option => option.name)}
                  popupIcon={<SearchIcon />}
                  renderInput={params => {
                    console.log('Xavi :) ===> :(: CardException -> params', params)

                    return (
                      <TextField
                        {...params}
                        className={classes.inputSearch}
                        fullWidth
                        id='input-with-icon-textfield'
                        InputLabelProps={{ shrink: false }}
                        InputProps={{
                          ...params.InputProps,
                          endAdornment: (
                            <InputAdornment position='end'>
                              {
                                params.inputProps.value ?
                                  <EditIcon className={classes.iconInput} onClick={() => {}} /> :
                                  <SearchIcon className={classes.iconInput} onClick={() => {}} />
                              }
                            </InputAdornment>
                          )
                        }}
                        placeholder='Buscar'
                        variant='outlined' />
                    )
                  }}
                  style={{ width: 400 }} />

                <FormHelperText>Buscar un Krowder o agrega un responsable</FormHelperText>
              </FormControl>
            </div>
            <div className={classes.actions}>
              <Button color='primary' variant='contained'>Resolver</Button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

CardException.propTypes = {
  classes: PropTypes.object
}

CardException.muiName = 'CardException'

export default withStyles(styles, { name: 'CardException' })(CardException)
