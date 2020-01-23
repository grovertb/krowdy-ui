import React from 'react'
import { makeStyles } from '@krowdy-ui/styles'
import { Grid, FormLabel, FormControlLabel, RadioGroup, Radio, Paper } from '@krowdy-ui/core'

const useStyles = makeStyles(theme => ({
  control: {
    padding: theme.spacing(2)
  },
  paper: {
    height: 140,
    width : 120
  },
  root: {
    flexGrow: 1
  }
}))

export default function SpacingGrid() {
  const [ spacing, setSpacing ] = React.useState(2)
  const classes = useStyles()

  const handleChange = event => {
    setSpacing(Number(event.target.value))
  }

  return (
    <Grid className={classes.root} container spacing={2}>
      <Grid item xs={12}>
        <Grid container justify='center' spacing={spacing}>
          {[ 0, 1, 2 ].map(value => (
            <Grid item key={value}>
              <Paper className={classes.paper} />
            </Grid>
          ))}
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <Paper className={classes.control}>
          <Grid container>
            <Grid item>
              <FormLabel>spacing</FormLabel>
              <RadioGroup
                aria-label='spacing'
                name='spacing'
                onChange={handleChange}
                row
                value={spacing.toString()}>
                {[ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ].map(value => (
                  <FormControlLabel
                    control={<Radio />}
                    key={value}
                    label={value.toString()}
                    value={value.toString()} />
                ))}
              </RadioGroup>
            </Grid>
          </Grid>
        </Paper>
      </Grid>
    </Grid>
  )
}
