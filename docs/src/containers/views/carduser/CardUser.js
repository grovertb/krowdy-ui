import React from 'react'
import { CardUser } from '@krowdy-ui/views/Cards'
import { Grid } from '@krowdy-ui/core'
import { MoreVert, Videocam, Assignment, NavigateNext } from '@material-ui/icons'
import { Rating } from '@material-ui/lab'

export default function () {

  return (
    <>
      <Grid container justify='center'>
        <CardUser
          title='Card User'
          items={[
            {
              icon: <Assignment />,
              rating: <Rating value={1.5} name='rating1' size='small' precision={0.5} />,
              text: 'Formulario',
            },
            {
              icon: <Videocam />,
              rating: <Rating value={1.5} name='rating2' size='small' precision={0.5} />,
              text: 'Video Cuestionario',
            },
            {
              icon: <Videocam />,
              rating: <Rating value={1.5} name='rating3' size='small' precision={0.5} />,
              text: 'Video Entrevista',
            },
          ]}
          borderColor='error'
          iconRight={<MoreVert />}
          nextIcon={<NavigateNext />}
        />

      </Grid >
    </>
  )
}

