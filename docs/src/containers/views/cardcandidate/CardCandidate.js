import React, { useState } from 'react'
import { CardCandidate } from '@krowdy-ui/views'

export default function () {

    let imageAvatar = 'https://img.icons8.com/material/4ac144/256/camera.png'
    let imageAvatar2 = null
    let firstName = 'Nombres'
    let lastName = 'Apellido'
    const [checked, setChecked] = useState(false)
    const _handleChange = (event) => {
        setChecked(event.target.checked)
    }

    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            height: 400,
            justifyContent: 'space-evenly',
            margin: '50px',
            width: 'auto'
        }}>
            <CardCandidate
                checked={checked}
                onChangeCheckbox={_handleChange}
                firstName={firstName}
                lastName={lastName}
                imageAvatar={imageAvatar} />
            <CardCandidate
                checked={checked}
                onChangeCheckbox={_handleChange}
                firstName={firstName}
                lastName={lastName}
                imageAvatar={imageAvatar2} />
        </div>
    )
}

