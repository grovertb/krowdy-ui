import React from 'react'
import { CardCandidate } from '@krowdy-ui/views'

export default function () {

    let imageAvatar = 'https://img.icons8.com/material/4ac144/256/camera.png'
    let fullName = 'nombre y apellido'
    return (
        <div style={{ alignItems: 'center', display: 'flex', justifyContent: 'center', margin: '50px' }}>
            <CardCandidate
                fullName={fullName}
                imageAvatar={imageAvatar} />
        </div>
    )
}

