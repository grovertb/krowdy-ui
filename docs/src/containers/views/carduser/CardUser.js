import React from 'react'
import { CardUser } from '@krowdy-ui/views/Cards'
import { Grid } from '@krowdy-ui/core'
/* import { MoreVert } from '@krowdy-ui/icons'
 */
export default function () {

  return (
    <>
      <Grid container justify='center'>
        <CardUser
          title='Card User'
          items={[
            {
              rating: 1.5,
              text: 'Formulario',
              type: 'assignment',
            },
            {
              rating: 2.5,
              text: 'Video Cuestionario',
              type: 'video',
            },
            {
              rating: 4,
              text: 'Video Entrevista',
              type: 'video',
            },
          ]}
          borderColor='error'
/*           iconRight={<MoreVert type='morev' />}
 */          withDivider
          withAvatar
          lessShadow
        />

      </Grid >
    </>
  )
}

