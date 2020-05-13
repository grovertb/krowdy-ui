import { makeStyles } from '@material-ui/styles'

export default makeStyles(({ palette }) => ({
  lineBlock: {
    display : 'inline-block',
    height  : '100%',
    position: 'relative'
  },
  lineFullVertical: {
  },
  lineHalfHorizontalRight: {
  },
  lineHalfVerticalBottom: {
  },
  lineHalfVerticalTop: {
  },
  root: {
    '& $lineFullVertical::after, & $lineHalfVerticalBottom::after, & $lineHalfVerticalTop::after': {
      height: '100%',
      left  : '50%',
      top   : 0,
      width : 1
    },
    '& $lineHalfHorizontalRight::before': {
      height: 1,
      right : 0,
      top   : '50%',
      width : '50%'
    },
    '& $lineHalfHorizontalRight::before, & $lineFullVertical::after, & $lineHalfVerticalTop::after, & $lineHalfVerticalBottom::after': {
      backgroundColor: palette.primary[400],
      content        : '""',
      position       : 'absolute'
    },
    '& $lineHalfVerticalBottom::after, $lineHalfVerticalTop::after': {
      height: '50%',
      top   : 0
    },
    // eslint-disable-next-line sort-keys-fix/sort-keys-fix
    '& $lineHalfVerticalBottom::after': {
      bottom: 0,
      top   : 'auto'
    },
    display : 'flex',
    minWidth: '100%',
    position: 'relative'
  },
  rootScaffold: {
    display   : 'flex',
    marginLeft: -25
  }
}), { name: 'FiltersTreeTreeNode' })
