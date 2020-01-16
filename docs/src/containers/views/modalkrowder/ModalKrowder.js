import React, {useState} from 'react'
import { ModalKrowder } from '@krowdy-ui/views'

export default function () {
  const [open, setOpen] = useState(null)

  const handleOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  return (
    <div>
      <button onClick={handleOpen}>open</button>
      <ModalKrowder open={Boolean(open)} />
    </div>
  )
}