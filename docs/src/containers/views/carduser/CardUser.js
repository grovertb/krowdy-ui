import React from 'react'
import { UserCard } from '@krowdy-ui/views/Cards'
import { Grid } from '@krowdy-ui/core'
import { Videocam, Assignment, NavigateNext } from '@material-ui/icons'
import { Rating } from '@material-ui/lab'

export default function () {
  return (
    <>
      <Grid container justify='center'>
        <UserCard
          borderColor='error'
          items={[
            {
              icon  : <Assignment />,
              rating: <Rating
                name='rating1' precision={0.5} size='small'
                value={1.5} />,
              text: 'Formulario'
            },
            {
              icon  : <Videocam />,
              rating: <Rating
                name='rating2' precision={0.5} size='small'
                value={1.5} />,
              text: 'Video Cuestionario'
            },
            {
              icon  : <Videocam />,
              rating: <Rating
                name='rating3' precision={0.5} size='small'
                value={1.5} />,
              text: 'Video Entrevista'
            }
          ]}
          nextIcon={<NavigateNext />}
          /*           iconRight={<MoreVert />}
 */          title='Card User' />

      </Grid >
    </>
  )
}
