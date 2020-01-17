import React, { useState } from 'react'
import { CardCandidate } from '@krowdy-ui/views'

export default function () {

    let imageAvatar = 'https://img.icons8.com/material/4ac144/256/camera.png'
    let firstName = 'Nombres'
    let lastName = 'Apellido'
    const [checked, setChecked] = useState(false)
    const _handleChange = (event) => {
        setChecked(event.target.checked)
    }

    return (
        <div style={{ alignItems: 'center', display: 'flex', justifyContent: 'center', margin: '50px' }}>
            <CardCandidate
                // id={id}
                checked={checked}
                onChangeCheckbox={_handleChange}
                firstName={firstName}
                lastName={lastName}
                imageAvatar={imageAvatar} />
        </div>
    )
}

