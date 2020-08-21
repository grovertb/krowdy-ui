import React, { useState } from 'react'
import clsx from 'clsx'
import { Histogram } from '@krowdy-ui/views'
import { IconButton, makeStyles, Paper, Tooltip, Typography } from '@krowdy-ui/core'
import {
  Info as InfoIcon,
  Add as AddIcon,
  Remove as RemoveIcon
} from '@material-ui/icons'

const candidates = [
  {
    firstName: 'Luis Alfredo',
    lastName : 'Sullca Huaracca',
    photo    :
    'https://krowdy.s3.amazonaws.com/assets/profile/5e375a0b71db5e002dc01323/avatar/2020-02-03T12-22-52-143Z.png',
    salary  : 2000,
    selected: false
  },
  {
    firstName: 'Luis Alfredo',
    lastName : 'Sullca Huaracca',
    photo    :
    'https://krowdy.s3.amazonaws.com/assets/profile/5e375a0b71db5e002dc01323/avatar/2020-02-03T12-22-52-143Z.png',
    salary  : 5000,
    selected: false
  }
]

const variance = 0.5
const limit = 2.5

export default function() {
  const classes = useStyles()
  const [ multiplier, setMultiplier ] = useState(1)

  const _handleAddMultiplier = () => {
    setMultiplier(multiplier => multiplier / variance)
  }

  const _handleRemoveMultiplier = () => {
    setMultiplier(multiplier => multiplier * variance)
  }

  return (
    <div style={{ width: 452 }}>
      <Paper className={classes.container} variant='outlined'>
        <div style={{ height: '100%', width: '100%' }}>
          <div className={classes.subSection}>
            <div className={clsx(classes.row, classes.title)}>
              <Typography variant='h6'>Expectativa Salarial</Typography>
              <Tooltip placement='top' title='tooltip'><span><IconButton disabled size='small'><InfoIcon fontSize='small' /></IconButton></span></Tooltip>
            </div>
            <div>
              <IconButton
                color='primary'
                disabled={multiplier <= 0.05}
                onClick={_handleRemoveMultiplier}
                size='small'>
                <RemoveIcon fontSize='small' />
              </IconButton>
              <IconButton
                color='primary'
                disabled={multiplier >= limit}
                onClick={_handleAddMultiplier}
                size='small'>
                <AddIcon fontSize='small' />
              </IconButton>
            </div>
          </div>
          <Histogram candidates={candidates} multiplier={multiplier} />
        </div>
      </Paper>
    </div>
  )
}

const useStyles = makeStyles(() => ({
  container: {
    display       : 'flex',
    height        : 400,
    justifyContent: 'space-between',
    padding       : 12,
    width         : '100%'
  },
  row: {
    display      : 'flex',
    flexDirection: 'row'
  },
  subSection: {
    alignItems    : 'center',
    display       : 'flex',
    justifyContent: 'space-between'
  },
  title: {
    alignItems: 'center'
  }
}))
