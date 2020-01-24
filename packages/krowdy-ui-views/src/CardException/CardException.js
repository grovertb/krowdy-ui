import React, { useState, useRef } from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@krowdy-ui/styles'
import clsx from 'clsx'
import {
  Input,
  Card,
  Chip,
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
  EmojiPeople as EmojiPeopleIcon,
  CheckCircle as CheckCircleIcon
} from '@material-ui/icons'

export const styles = theme => ({
  actions: {
    '& > button': {
      marginRight: theme.spacing(2)
    },
    '& > button:last-child': {
      marginRight: 0
    },
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
  iconAdornment: {
    height  : 20,
    position: 'absolute',
    right   : 0,
    width   : 20
  },
  iconInput: {
    cursor  : 'pointer',
    fontSize: '1rem'
  },
  inputSearch: {
    '& * input': {
      fontSize: 14,
      padding : '6px 0 7px !important'
    },
    '& > div': {
      height : 32,
      padding: '0 2px 0 0 !important'
    },
    '& fieldset': {
      border      : 'none',
      borderBottom: `1px solid ${theme.palette.grey[600]}`,
      borderRadius: 0
    },
    '&:hover': {
      '& fieldset': {
        borderWidth: 2
      }
    },
    margin: '0'
  },
  list: {
    display            : 'grid',
    flexDirection      : 'column',
    gridGap            : 20,
    gridTemplateColumns: '1fr 1fr',
    listStyle          : 'none',
    padding            : 0
  },
  listColumn: {
    gridGap            : 0,
    gridTemplateColumns: '1fr'
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
    height    : 0,
    opacity   : 0,
    overflow  : 'hidden',
    transition: 'all .2s ease-in'
  },
  show: {
    height : 'auto',
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
    area = '',
    candidate = '',
    company = '',
    dateTime = '',
    group = '',
    recruiter = '',
    krowder = '',
    actions = true,
    statusException = '',
    resolved = '',
    title = '',
    type = null,
    listStyle = 'row',
    krowderSelected = '',
    suggestion = [],
    onArchived,
    onResolved,
    onSendPull,
    onUnlockTask
  } = props

  const [ open, setOpen ] = useState(false)
  const [ krowderSelectedState, setKrowderSelectedState ] = useState(krowderSelected)
  const inputRef = useRef(null)
  const autoCompleteRef = useRef(null)

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

  const renderBottons = (type) => {
    switch (type) {
      case 1:
      case 2:
        return <div className={classes.actions}>
          {
            onArchived ?
              <Button color='primary' onClick={() => onArchived(props)} variant='text'>Archivar</Button> : null
          }
          {
            onResolved ?
              <Button
                color='primary' disabled={krowderSelected === krowderSelectedState ? true : false} onClick={() => onResolved({
                  ...props,
                  krowderSelected: inputRef.current.value
                })}
                variant='contained'>Resolver</Button> : null
          }
        </div>

      case 3:
      case 4:
      case 8:
      case 9:
      case 10:
        return <div className={classes.actions}>
          {
            onArchived ?
              <Button color='primary' onClick={() => onArchived(props)} variant='text'>Archivar</Button> : null
          }
          {
            onSendPull ?
              <Button color='primary' onClick={onSendPull} variant='outlined'>Enviar al Pool</Button> : null
          }
          {
            onResolved ?
              <Button
                color='primary' disabled={krowderSelected === krowderSelectedState ? true : false} onClick={() => onResolved({
                  ...props,
                  krowderSelected: inputRef.current.value
                })}
                variant='contained'>Resolver</Button> : null
          }
        </div>

      case 5:
      case 6:
        return <div className={classes.actions}>
          {
            onArchived ?
              <Button color='primary' onClick={() => onArchived(props)} variant='text'>Archivar</Button> : null
          }
          {
            onUnlockTask ?
              <Button color='primary' onClick={() => onUnlockTask(props)} variant='outlined'>Desbloquear tarea</Button> : null
          }
          {
            onResolved ?
              <Button
                color='primary' disabled={krowderSelected === krowderSelectedState ? true : false} onClick={() => onResolved({
                  ...props,
                  krowderSelected: inputRef.current.value
                })}
                variant='contained'>Resolver</Button> : null
          }
        </div>

      case 7:
      case 11:
        return <div className={classes.actions}>
          {
            onArchived ?
              <Button color='primary' onClick={() => onArchived(props)} variant='text'>Archivar</Button> : null
          }
          {
            onUnlockTask ?
              <Button color='primary' onClick={() => onUnlockTask(props)} variant='contained'>Desbloquear tarea</Button> : null
          }
        </div>

      default:
        return null
    }
  }

  const renderInputs = type => {
    switch (type) {
      case 1:
      case 2:
      case 5:
      case 6:

        return <>
          <FormControl className={clsx(classes.margin, classes.withoutLabel, classes.textField)}>
            <Input
              endAdornment={<EditIcon className={classes.iconInput} />} />
            <FormHelperText>Horario agendado</FormHelperText>
          </FormControl>

          <FormControl>

            <Autocomplete
              noOptionsText='No hay coincidencias'
              onInputChange={(ev, value) => {
                inputRef.current.blur()
                setKrowderSelectedState(value)
              }}
              options={suggestion.map(option => option.name)}
              ref={autoCompleteRef}
              renderInput={params =>
                (
                  <TextField
                    {...params}
                    className={classes.inputSearch}
                    fullWidth
                    InputLabelProps={{ shrink: false }}
                    InputProps={{
                      ...params.InputProps,
                      endAdornment: (
                        <InputAdornment className={classes.iconAdornment} position='end'>
                          {
                            params.inputProps.value ?
                              <EditIcon className={classes.iconInput} onClick={() => autoCompleteRef.current.click()} /> :
                              <SearchIcon className={classes.iconInput} onClick={() => autoCompleteRef.current.click()} />
                          }
                        </InputAdornment>
                      )
                    }}
                    inputRef={inputRef}
                    placeholder='Buscar'
                    variant='outlined' />
                )
              }
              value={krowderSelectedState} />

            <FormHelperText>Buscar un Krowder o agrega un responsable</FormHelperText>
          </FormControl>
        </>

      case 3:
      case 4:
      case 8:
      case 9:
      case 10:

        return <>
          <FormControl>

            <Autocomplete
              noOptionsText='No hay coincidencias'
              onInputChange={(ev, value) => {
                inputRef.current.blur()
                setKrowderSelectedState(value)
              }}
              options={suggestion.map(option => option.name)}
              ref={autoCompleteRef}
              renderInput={params =>
                (
                  <TextField
                    {...params}
                    className={classes.inputSearch}
                    fullWidth
                    InputLabelProps={{ shrink: false }}
                    InputProps={{
                      ...params.InputProps,
                      endAdornment: (
                        <InputAdornment className={classes.iconAdornment} position='end'>
                          {
                            params.inputProps.value ?
                              <EditIcon className={classes.iconInput} onClick={() => autoCompleteRef.current.click()} /> :
                              <SearchIcon className={classes.iconInput} onClick={() => autoCompleteRef.current.click()} />
                          }
                        </InputAdornment>
                      )
                    }}
                    inputRef={inputRef}
                    placeholder='Buscar'
                    variant='outlined' />
                )
              }
              value={krowderSelectedState} />

            <FormHelperText>Buscar un Krowder o agrega un responsable</FormHelperText>
          </FormControl>
        </>

      default:
        return null
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
                        recruiter ?
                          <li className={classes.listItem}>
                            <EmojiPeopleIcon color='primary' /> {recruiter}
                          </li> : null
                      }
                      {
                        krowder ?
                          <li className={classes.listItem}>
                            <EmojiPeopleIcon color='primary' /> {krowder}
                          </li> : null
                      }
                      {
                        candidate ?
                          <li className={classes.listItem}>
                            <PersonIcon color='primary' /> {candidate}
                          </li> : null
                      }
                      {
                        area ?
                          <li className={classes.listItem}>
                            <WorkIcon color='primary' /> {area}
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
                        company ?
                          <li className={classes.listItem}>
                            <BusinessIcon color='primary' /> {company}
                          </li> : null
                      }
                      {
                        group ?
                          <li className={classes.listItem}>
                            <GroupIcon color='primary' /> {group}
                          </li> : null
                      }
                    </div>
                  </ul> :
                  <ul className={clsx(
                    classes.list,
                    {
                      [classes.listColumn]: listStyle === 'column'
                    }
                  )}>
                    <li className={classes.listItem}>
                      <CheckCircleIcon color='primary' />Resuelto por: {resolved}
                    </li>
                    <div className={
                      clsx(
                        classes.notShow,
                        { [classes.show]: open }
                      )
                    }>
                      {
                        recruiter ?
                          <li className={classes.listItem}>
                            <EmojiPeopleIcon color='primary' /> {recruiter}
                          </li> : null
                      }
                      {
                        krowder ?
                          <li className={classes.listItem}>
                            <EmojiPeopleIcon color='primary' /> {krowder}
                          </li> : null
                      }
                      {
                        candidate ?
                          <li className={classes.listItem}>
                            <PersonIcon color='primary' /> {candidate}
                          </li> : null
                      }
                      {
                        area ?
                          <li className={classes.listItem}>
                            <WorkIcon color='primary' /> {area}
                          </li> : null
                      }
                      {
                        company ?
                          <li className={classes.listItem}>
                            <BusinessIcon color='primary' /> {company}
                          </li> : null
                      }
                      {
                        group ?
                          <li className={classes.listItem}>
                            <GroupIcon color='primary' /> {group}
                          </li> : null
                      }
                    </div>
                  </ul>
              }
            </div>
          </div>

          {
            actions ?
              <div className={clsx(
                classes.contentShow,
                {
                  [classes.contentShowActive]: open
                }
              )}>
                <div className={classes.contentInputs}>
                  {renderInputs(type)}
                </div>
                {renderBottons(type)}
              </div> : null
          }

        </div>
      </CardContent>
    </Card>
  )
}

CardException.propTypes = {
  actions        : PropTypes.bool,
  area           : PropTypes.string,
  candidate      : PropTypes.string,
  classes        : PropTypes.object,
  company        : PropTypes.string,
  dateTime       : PropTypes.string,
  group          : PropTypes.string,
  krowder        : PropTypes.string,
  krowderSelected: PropTypes.string,
  listStyle      : PropTypes.string,
  onArchived     : PropTypes.func,
  onResolved     : PropTypes.func,
  onSendPull     : PropTypes.func,
  onUnlockTask   : PropTypes.func,
  recruiter      : PropTypes.string,
  resolved       : PropTypes.string,
  statusException: PropTypes.string,
  suggestion     : PropTypes.arrayOf(
    PropTypes.shape({
      id  : PropTypes.number.isRequired,
      name: PropTypes.string.isRequired
    })
  ),
  title: PropTypes.string,
  type : PropTypes.number
}

CardException.muiName = 'CardException'

export default withStyles(styles, { name: 'CardException' })(CardException)
