import React from 'react'
import Slide from '../Slide'
import useScrollTrigger from '../useScrollTrigger'

const AlterDirection = {
  down : 'up',
  left : 'right',
  right: 'left',
  up   : 'down'
}

const HideOnScroll = React.forwardRef(({ direction = 'down', ...props }, ref) => {
  const { children, window } = props
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({ target: window ? window() : undefined })

  return (
    <Slide
      appear={false}
      direction={direction ? AlterDirection[direction]: undefined}
      in={!trigger}
      ref={ref}>
      {children}
    </Slide>
  )
})

export default HideOnScroll
