import React, { useState } from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'
import { Card, makeStyles, Popper } from '@krowdy-ui/core'

const arrowGenerator = (spacing) => ({
  '&[x-placement*="bottom"] $arrow': {
    left       : 0,
    marginLeft : spacing(1.5),
    marginRight: spacing(1.5),
    marginTop  : spacing(-1),
    top        : 0
  },
  '&[x-placement*="left"] $arrow': {
    marginBottom: spacing(1.5),
    marginRight : spacing(-1),
    marginTop   : spacing(1.5),
    right       : 0
  },
  '&[x-placement*="right"] $arrow': {
    left        : 0,
    marginBottom: spacing(1.5),
    marginLeft  : spacing(-1),
    marginTop   : spacing(1.5)
  },
  '&[x-placement*="top"] $arrow': {
    bottom      : 0,
    left        : 0,
    marginBottom: spacing(-1),
    marginLeft  : spacing(1.5),
    marginRight : spacing(1.5)
  }
})

const useStyles = makeStyles(({ palette, spacing }) => ({
  arrow: {
    background: ({ background }) =>
      background && palette[background] && palette[background].main ?
        palette[background].main :
        palette.primary.main,
    height   : 20,
    position : 'absolute',
    transform: 'rotate(45deg)',
    width    : 20
  },
  backgroundCard: {
    background: ({ background }) =>
      background && palette[background] && palette[background].main ?
        palette[background].main :
        palette.primary.main
  },
  poperArrow: arrowGenerator(spacing),
  textColor : {
    color: palette.secondary[10]
  },
  'tooltipPlacement-bottom': {
    marginTop      : spacing(3),
    transformOrigin: 'center top'
  },
  'tooltipPlacement-left': {
    marginRight    : spacing(3),
    transformOrigin: 'right center'
  },
  'tooltipPlacement-right': {
    marginLeft     : spacing(3),
    transformOrigin: 'left center'
  },
  'tooltipPlacement-top': {
    marginBottom   : spacing(3),
    transformOrigin: 'center bottom'
  }
}), { name: 'BackgroundAlert' })

const BackgroundAlert = ({
  children,
  color = 'primary',
  anchorEl,
  placement = 'bottom',
  arrow = false
}) =>{
  const classes = useStyles({ background: color })
  const [ arrowRef, setArrowRef ] = useState(null)

  return (
    <Popper
      anchorEl={anchorEl}
      className={clsx(
        classes.poperArrow,
        classes[`tooltipPlacement-${placement.split('-')[0]}`],
      )}
      open={Boolean(anchorEl)}
      placement={placement}
      popperOptions={{
        modifiers: {
          arrow: {
            element: arrowRef,
            enabled: Boolean(arrowRef)
          }
        }
      }}>
      <Card className={clsx(
        classes.backgroundCard,
        classes.textColor
      )}>
        {
          arrow ?
            <span className={classes.arrow} ref={setArrowRef} ></span>:
            null
        }
        {children}
      </Card>
    </Popper >
  )
}

BackgroundAlert.propTypes = {
  anchorEl: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.any,
    PropTypes.func
  ]),
  arrow    : PropTypes.bool,
  color    : PropTypes.oneOf([ 'default', 'inherit', 'primary', 'secondary', 'krowdy', 'error' ]),
  placement: PropTypes.string
}

export default BackgroundAlert
