// export { default } from '@material-ui/core/Icon'
import React from 'react'
import * as Icons from '@material-ui/icons'

const Icon = ({ icon }) => {
  const Resolved = Icons[icon]

  return Resolved ? <Resolved /> : <span>{icon}</span>
}

export default Icon

// const Icon = ({icon}) => {
//   try{
//     const resolved = require(`@material-ui/icons/${icon}`).default

//     return React.createElement(resolved)
//   }catch(err) {
//     return <span>{icon}</span>
//   }
// }

// export default Icon
