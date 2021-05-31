import React from 'react'
import Slide from '../Slide'
import useScrollTrigger from '../useScrollTrigger'

const AlterDirection = {
  down : 'up',
  left : 'right',
  right: 'left',
  up   : 'down'
}

const HideOnScroll = ({ direction = 'down', ...props }) => {
  const { children, window } = props
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({ target: window ? window() : undefined })

  return (
    <Slide appear={false} direction={direction ? AlterDirection[direction]: undefined} in={!trigger}>
      {children}
    </Slide>
  )
}

export default HideOnScroll
