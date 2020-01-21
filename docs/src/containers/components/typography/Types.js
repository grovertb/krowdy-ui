import React from 'react'
import { Typography } from '@krowdy-ui/core'
import { makeStyles } from '@krowdy-ui/styles'

const useStyles = makeStyles({
  root: {
    width: '100%'
  }
}, { name: 'Types' })

export default function Types() {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <Typography gutterBottom variant='display1'>
        Display1 / Regular Roboto 53px
      </Typography>
      <Typography gutterBottom variant='display2'>
        Display2 / Regular Roboto 53px
      </Typography>
      <Typography component='h1' gutterBottom variant='h1'>
        h1 / Regular Roboto 44px
      </Typography>
      <Typography gutterBottom variant='h2'>
        h2 / Regular Roboto 36px
      </Typography>
      <Typography gutterBottom variant='h3'>
        h3 / Regular Roboto 29px
      </Typography>
      <Typography gutterBottom variant='h4'>
        h4 / Regular Roboto 23px
      </Typography>
      <Typography gutterBottom variant='h5'>
        h5 / Regular Roboto 18px
      </Typography>
      <Typography gutterBottom variant='h6'>
        h6 / Regular Roboto 14px
      </Typography>
      <Typography color='body' gutterBottom variant='body1'>
        Body1 / Paragraph • Size: 12px • Line height: 18px • Color: #595959
      </Typography>
      <Typography color='body' gutterBottom variant='body2'>
        Body2 / Paragraph • Size: 14px • Line height: 18 • Color: #595959
      </Typography>
      <Typography color='body' gutterBottom variant='body3'>
        Body3 / Paragraph • Size: 16px • Line height: 22px • Color: #595959
      </Typography>
      <Typography color='info' gutterBottom variant='info1'>
        Info1 / Help • Size: 12px • Line height: 18px • Color: #8C8C8C
      </Typography>
      <Typography color='info' gutterBottom variant='info2'>
        Info2 / Help • Size: 14px • Line height: 20px • Color: #8C8C8C
      </Typography>
      <Typography gutterBottom variant='subtitle1'>
        subtitle1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur
      </Typography>
      <Typography gutterBottom variant='subtitle2'>
        subtitle2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur
      </Typography>
      <Typography display='block' gutterBottom variant='button'>
        button text
      </Typography>
      <Typography display='block' gutterBottom variant='caption'>
        caption text
      </Typography>
      <Typography display='block' gutterBottom variant='overline'>
        overline text
      </Typography>
    </div>
  )
}
