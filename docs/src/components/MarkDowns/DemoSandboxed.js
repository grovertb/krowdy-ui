import React from 'react'

export default function DemoSandboxed(props) {
  const { component: Component/*, iframe, name, ...other*/ } = props;
  
  return (
    <Component />
  )
}