import React from 'react'
import { Grid } from '@krowdy-ui/core'
import { CardTask } from '@krowdy-ui/views/Cards'

export default function () {

  return (
    <>
      <Grid container justify='center'>
        <CardTask
          title='Card User'
          borderColor='light'
          lessShadow
          avatarProps={{
            src: 'https://instaperfil.com/images/instaperfilseguidores.png',
            variant: 'square'
          }}
          content={<div>Define cuáles de los campos del perfil del candidato deben ser
             obligatorios y cuáles no deberían aparecer.</div>}
        />

      </Grid >

      {/*       <Grid container justify='center'>
        <Card borderColor='dark' lessShadow>
          <CardHeader title='Card 2'
            rightElement={<IconKrowdy type='close' color='error' />}
          />
          <CardContent variant='narrow'>
            <IconKrowdy type='prueba' color='error' />
          </CardContent>
        </Card>
      </Grid> */}
    </>
  )
}

