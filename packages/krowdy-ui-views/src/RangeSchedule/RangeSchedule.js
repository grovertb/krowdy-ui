import React, { useState } from 'react'
import clsx from 'clsx'
import DayJsUtils from '@date-io/dayjs'
import esLocale from 'dayjs/locale/es'
import dayjs from 'dayjs'
import PropTypes from 'prop-types'
import { MuiPickersUtilsProvider, DatePicker } from '@ghondar/pickers'
import { Button, FormControlLabel, IconButton, Menu, MenuItem, Popover, TextField, Typography } from '@krowdy-ui/core'
import { makeStyles } from '@krowdy-ui/styles'
import { ArrowDropDown as ArrowDropDownIcon, Event as EventIcon } from '@material-ui/icons'

const getCorrectMomentDate = (date) => {
  if(date) {
    const dateJs = new Date(date)

    return dateJs.toString() === 'Invalid Date' ? dayjs(Number(date)) : dayjs(date)
  }

  return dayjs()
}

const format = 'DD/MM/YYYY'
const formatInternal='MM/DD/YYYY'

const correctDate = (date, formatCustom) => getCorrectMomentDate(date).format(formatCustom || format)

const JobRangePickers = ({
  onSchedule = () => {},
  IconToOpen = <ArrowDropDownIcon />,
  onPublishSchedule = () => {},
  initialRange = { maxDate: null, minDate: null },
  onCancelSchedule = () => {},
  showInput
}) => {
  const classes = useStyles()
  const [ anchorElRangePicker, setAnchorElRangePicker ] = useState(false)
  const [ rangeDateValue, setRangeValue ] = useState(initialRange || { maxDate: null, minDate: null })
  const [ openMenu, setOpenMenu ] = useState(null)

  const _handleChangeDate = (date) => {
    setRangeValue(prev => {
      const parseDate = correctDate(date, formatInternal)
      if(parseDate === correctDate(prev.minDate, formatInternal) )
        return { maxDate: null, minDate: null }
      else if(new Date(parseDate) < new Date(prev.minDate))
        return { maxDate: null, minDate: parseDate }
      else
        return prev.minDate ?
          { maxDate: parseDate, minDate: prev.minDate } :
          { maxDate: null, minDate: parseDate }
    })
  }

  const _handleToggleRangePicker = ({ currentTarget }) => {
    setAnchorElRangePicker(prev => prev ? null : currentTarget)
  }

  const _handleSchedule = () => {
    onSchedule(rangeDateValue)
    setAnchorElRangePicker(null)
  }

  const _handlePublishSchedule = () => {
    onPublishSchedule(rangeDateValue)
    setOpenMenu(null)
    setAnchorElRangePicker(null)
  }

  const _handleCancelSchedule = () => {
    setRangeValue(initialRange)
    onCancelSchedule()
    setOpenMenu(null)
    setAnchorElRangePicker(null)
  }

  const _handleOpenMenu = ({ currentTarget }) => {
    setOpenMenu(prev => prev ? null : currentTarget)
  }

  const renderDay = (day, _, dayInCurrentMonth) => {
    const { minDate, maxDate } = rangeDateValue || {}
    const isBackground = new Date(minDate) < new Date(day) &&
  new Date(maxDate) > new Date(day)

    const isBackgroundLeft = !(new Date(minDate) < new Date(day) || new Date(minDate) > new Date(day))
    const isBackgroundRight = !(new Date(maxDate) > new Date(day) || new Date(maxDate) < new Date(day))

    return (<button
      className={clsx(classes.sizePickers, classes.buttonHidden,
        {
          [classes.disabled]           : new Date(day) < new Date(),
          [classes.dayBackground]      : isBackground,
          [classes.selectedRadiusLeft] : maxDate && isBackgroundLeft,
          [classes.selectedRadiusRight]: isBackgroundRight
        })
      } disabled={new Date(day) < new Date()}>
      <span
        className={clsx(classes.buttonHidden, {
          [classes.isAnotherMonth]: !dayInCurrentMonth,
          [classes.disabled]      : new Date(day) < new Date(),
          [classes.selectedDate]  : isBackgroundLeft || isBackgroundRight
        })
        }>
        {new Date(day).getDate()}
      </span>
    </button>)
  }

  return (
    <>
      {
        showInput ?
          <TextField
            InputProps={{
              endAdornment: <EventIcon className={classes.adorment} color='inherit' fontSize='small' />
            }}
            inputProps={{
              className: classes.inputClass
            }}
            label='Aviso programado'
            onClick={_handleToggleRangePicker}
            value={`${correctDate(rangeDateValue.minDate)} - ${correctDate(rangeDateValue.maxDate)}`} /> :
          null
      }
      <IconButton
        onClick={_handleToggleRangePicker} size='small' square>
        {IconToOpen}
      </IconButton>
      <MuiPickersUtilsProvider locale={esLocale} utils={DayJsUtils} >
        <Popover
          anchorEl={anchorElRangePicker}
          anchorOrigin={{
            horizontal: 'center',
            vertical  : 'bottom'
          }}
          classes={{
            paper: classes.rangeDateContainer
          }}
          onClose={_handleToggleRangePicker}
          open={Boolean(anchorElRangePicker)}
          transformOrigin={{
            horizontal: 'center',
            vertical  : 'top'
          }}>
          <DatePicker
            disableToolbar={true}
            format={format}
            onChange={_handleChangeDate}
            openTo='date'
            orientation='landscape'
            renderDay={renderDay}
            value={correctDate(rangeDateValue.minDate, formatInternal)}
            variant='static' >
          </DatePicker>
          <div className={classes.detailContainer}>
            <div className={classes.inputsContainer}>
              <Typography variant='h6'>Programar publicación</Typography>
              <FormControlLabel
                classes={{
                  label              : classes.label,
                  labelPlacementStart: classes.labelPlacement
                }}
                control={<TextField
                  InputProps={{
                    classes: {
                      input: classes.textField
                    }
                  }}
                  value={rangeDateValue.minDate ?
                    correctDate(rangeDateValue.minDate) : ''}
                  variant='outlined' />} label={
                  <Typography color='secondary'>Desde :</Typography>
                } labelPlacement='start' />
              <FormControlLabel
                classes={{
                  label              : classes.label,
                  labelPlacementStart: classes.labelPlacement
                }}
                control={<TextField
                  InputProps={{
                    classes: {
                      input: classes.textField
                    }
                  }}
                  value={rangeDateValue.maxDate ?
                    correctDate(rangeDateValue.maxDate) : ''}
                  variant='outlined' />} label={
                  <Typography color='secondary'>Hasta :</Typography>} labelPlacement='start' />
            </div>
            <div className={classes.actionsContainer}>
              <Button
                className={classes.scheduleButton} color='primary'
                onClick={_handleSchedule}
                variant='contained'>Programar</Button>
              <Button
                className={classes.selectButton}
                color='primary'
                onClick={_handleOpenMenu}
                variant='contained'>
                <ArrowDropDownIcon className={classes.arrowIcon} />
              </Button>
              <Menu
                anchorEl={openMenu}
                anchorOrigin={{
                  horizontal: 'center',
                  vertical  : 'bottom'
                }}
                onClose={_handleOpenMenu}
                open={Boolean(openMenu)}
                transformOrigin={{
                  horizontal: 'center',
                  vertical  : 'top'
                }} >
                <MenuItem
                  ListItemClasses={{ button: classes.listItem }}
                  onClick={_handlePublishSchedule}>Publicar ahora</MenuItem>
                <MenuItem
                  ListItemClasses={{
                    button: classes.listItem
                  }}
                  onClick={_handleCancelSchedule}>
                    Cancelar programación
                </MenuItem>
              </Menu>
            </div>
          </div>
        </Popover>
      </MuiPickersUtilsProvider>
    </>
  )
}

const useStyles = makeStyles((theme) => ({
  actionsContainer: {
    display: 'flex',
    width  : '100%'
  },
  adorment: {
    margin: theme.spacing(0, 1.5, 0, 2)
  },
  arrowIcon: {
    color: 'white'
  },
  buttonHidden: {
    background: 'none',
    border    : 'hidden',
    outline   : 'inherit'
  },
  dayBackground: {
    background  : theme.palette.primary[50],
    borderRadius: 0
  },
  detailContainer: {
    background    : theme.palette.secondary[10],
    display       : 'flex',
    flexDirection : 'column',
    justifyContent: 'space-between',
    padding       : theme.spacing(1.5)
  },
  disabled: {
    color        : theme.palette.grey[500],
    cursor       : 'not-allowed !important',
    pointerEvents: 'inherit !important'
  },
  inputClass: {
    fontSize: 14,
    minWidth: 160
  },
  inputsContainer: {
    display      : 'flex',
    flexDirection: 'column'
  },
  isAnotherMonth: {
    color: theme.palette.grey[500]
  },
  label: {
    marginRight: theme.spacing(1)
  },
  labelPlacement: {
    margin: theme.spacing(1, 0)
  },
  listItem: {
    '&:hover': {
      backgroundColor: theme.palette.primary[10]
    }
  },
  rangeDateContainer: {
    display: 'flex'
  },
  scheduleButton: {
    borderRadius: theme.spacing(.5, 0, 0, .5),
    width       : '100%'
  },
  selectButton: {
    borderRadius: theme.spacing(0, .5, .5, 0),
    marginLeft  : theme.spacing(.25),
    minWidth    : 20,
    padding     : theme.spacing(.75)
  },
  selectedDate: {
    alignItems    : 'center',
    background    : theme.palette.primary.main,
    borderRadius  : '50%',
    color         : 'white',
    display       : 'flex',
    height        : '100%',
    justifyContent: 'center',
    padding       : theme.spacing(2.5),
    width         : '100%',
    zIndex        : 1
  },
  selectedRadiusLeft: {
    background  : theme.palette.primary[50],
    borderRadius: '50% 0 0 50%'
  },
  selectedRadiusRight: {
    background  : theme.palette.primary[50],
    borderRadius: '0 50% 50% 0'
  },
  sizePickers: {
    alignItems    : 'center',
    cursor        : 'pointer',
    display       : 'flex',
    height        : 28,
    justifyContent: 'center',
    margin        : theme.spacing(.25, 0),
    width         : 40
  },
  textField: {
    background: 'white',
    color     : theme.palette.grey[600],
    padding   : theme.spacing(1),
    width     : 120
  }
}), { name: 'JobRangePickers' })

JobRangePickers.propTypes = {
  IconToOpen  : PropTypes.node,
  initialRange: PropTypes.shape({
    maxDate: PropTypes.any,
    minDate: PropTypes.any
  }),
  onCancelSchedule : PropTypes.func,
  onPublishSchedule: PropTypes.func,
  onSchedule       : PropTypes.func,
  showInput        : PropTypes.bool
}

export default React.memo(JobRangePickers)
