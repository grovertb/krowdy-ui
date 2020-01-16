import React from 'react'
import { Grid } from '@krowdy-ui/core'
import { CardTask } from '@krowdy-ui/views/Cards'

export default function () {

  return (
    <Grid container justify='center' >
      <Grid item xs={4} >
        <CardTask
          title='Card User'
          avatarProps={{
            src: 'https://instaperfil.com/images/instaperfilseguidores.png',
            variant: 'square',
          }}
          content={<div>Define cuáles de los campos del perfil del candidato deben ser
             obligatorios y cuáles no deberían aparecer. cuáles no deberían aparecer</div>}
        /* focused  */
        />
      </Grid >
    </Grid >
  )
}

