import React, { useState } from 'react'
import clsx from 'clsx'
import moment from 'moment'
import DayJsUtils from '@date-io/dayjs'
import esLocale from 'dayjs/locale/es'
import { MuiPickersUtilsProvider, DatePicker } from '@ghondar/pickers'
import { Button, FormControlLabel, IconButton, Popover, TextField, Typography } from '@krowdy-ui/core'
import { makeStyles } from '@krowdy-ui/styles'
import { ArrowDropDown as ArrowDropDownIcon } from '@material-ui/icons'

const getCorrectMomentDate = (date) => {
  if(date) {
    const dateJs = new Date(date)

    return moment(dateJs.toString() === 'Invalid Date' ? Number(date) : dateJs.getTime())
  }

  return moment()
}

const format = 'DD/MM/YY'

const JobRangePickers = ({
  onChangeRangeDate = () => {},
  onSchedule = () => {},
  IconToOpen = <ArrowDropDownIcon />
}) => {
  const classes = useStyles()
  // const [ updateJobField ] = useMutation(UPDATE_JOB)
  const [ anchorElRangePicker, setAnchorElRangePicker ] = useState(false)
  const [ rangeDateValue, setRangeValue ] = useState({ maxDate: null, minDate: null } || {})

  const _handleChangeDate = (date) => {
    setRangeValue(prev => {
      let result = {}
      const parseDate = getCorrectMomentDate(date).format('MM/DD/YYYY').toString()
      if(new Date(parseDate) < new Date(prev.minDate))
        result = { maxDate: null, minDate: parseDate }
      else
        result = prev.minDate ?
          { maxDate: parseDate, minDate: prev.minDate } :
          { maxDate: null, minDate: parseDate }
      onChangeRangeDate(result)

      return result
    })
  }

  const _handleToggleRangePicker = ({ currentTarget }) => {
    setAnchorElRangePicker(prev => prev ? null : currentTarget)
  }

  const _handleSchedule = () => {
    onSchedule()
    setAnchorElRangePicker(null)
  }

  return (
    <MuiPickersUtilsProvider locale={esLocale} utils={DayJsUtils}>
      <div>
        <IconButton onClick={_handleToggleRangePicker} size='small' square>
          {IconToOpen}
        </IconButton>
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
            renderDay={(day, selectedDate, dayInCurrentMonth) => {
              const isBackground = new Date(rangeDateValue?.minDate) < new Date(day) &&
              new Date(rangeDateValue?.maxDate) > new Date(day)

              const isBackgroundLeft = !(new Date(rangeDateValue?.minDate) < new Date(day) || new Date(rangeDateValue?.minDate) > new Date(day))
              const isBackgroundRight = !(new Date(rangeDateValue?.maxDate) > new Date(day) || new Date(rangeDateValue?.maxDate) < new Date(day))

              return (<span className={clsx(classes.sizePickers,
                {
                  [classes.isAnotherMonth]     : !dayInCurrentMonth,
                  [classes.backgroundDay]      : isBackground,
                  [classes.selectedRadiusLeft] : rangeDateValue?.maxDate && isBackgroundLeft,
                  [classes.selectedRadiusRight]: isBackgroundRight
                })
              }><span
                  className={clsx({
                    [classes.selectedDate]: isBackgroundLeft || isBackgroundRight })
                  }>{day.$D}</span>
              </span>)
            }}
            showTodayButton
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
                    getCorrectMomentDate(rangeDateValue.minDate).format(format).toString() : ''}
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
                    getCorrectMomentDate(rangeDateValue.maxDate).format(format) : ''}
                  variant='outlined' />} label={
                  <Typography color='secondary'>Hasta :</Typography>} labelPlacement='start' />
            </div>
            <div className={classes.actionsContainer}>
              <Button color='primary' onClick={_handleToggleRangePicker} >Cancelar</Button>
              <Button color='primary' onClick={_handleSchedule} variant='contained'>Programar</Button>
            </div>
          </div>
        </Popover>
      </div>
    </MuiPickersUtilsProvider>
  )
}

const useStyles = makeStyles((theme) => ({
  actionsContainer: {
    display       : 'flex',
    justifyContent: 'space-between'
  },
  backgroundDay: {
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
  rangeDateContainer: {
    display: 'flex'
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
    width         : '100%'
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
    height        : 40,
    justifyContent: 'center',
    padding       : theme.spacing(1.5),
    width         : 40
  },
  textField: {
    background: 'white',
    color     : theme.palette.grey[600],
    padding   : theme.spacing(1),
    width     : 120
  }
}))
export default React.memo(JobRangePickers)
