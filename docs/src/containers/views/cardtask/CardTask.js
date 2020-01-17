import React from 'react'
import { Grid, Avatar } from '@krowdy-ui/core'
import { CardContainer } from '@krowdy-ui/views/Cards'
import { Close } from '@material-ui/icons'

export default function () {

  return (
    <Grid container justify='center' >
      <Grid item xs={4} >
        <CardContainer
          title='Tasks'
          avatarProps={{
            src: 'https://instaperfil.com/images/instaperfilseguidores.png',
            variant: 'square',
          }}
          content={<div>Define cuáles de los campos del perfil del candidato deben ser
             obligatorios y cuáles no deberían aparecer. cuáles no deberían aparecer</div>}
/*           avatar={<Avatar />}
 */          disabledHover
          rightElement={<Close />
          }
        />
      </Grid >
      <Grid item xs={1}></Grid>
      <Grid item xs={4} >
        <CardContainer
          title='Tasks'
          avatarProps={{
            src: 'https://instaperfil.com/images/instaperfilseguidores.png',
            variant: 'square',
          }}
          content={<div>Define cuáles de los campos del perfil del candidato deben ser
             obligatorios y cuáles no deberían aparecer. cuáles no deberían aparecer</div>}
          avatar={<Avatar />}
        />
      </Grid >
    </Grid >
  )
}

