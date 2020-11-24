import React from 'react'
import { Referent } from '@krowdy-ui/views'
import { makeStyles } from '@krowdy-ui/core'

export default function () {
  const classes = useStyles()
  console.log('classes', classes)

  return (
    <div>
      <Referent
        items={[ {
          name       : 'phone',
          placeholder: 'Teléfono',
          value      : '977862124'
        }, {
          name       : 'email',
          placeholder: 'email',
          value      : 'luis.sullca.h@uni.pe'
        }, {
          name       : 'actualCompany',
          placeholder: 'Empresa actual',
          value      : 'Krowdy'
        }, {
          name       : 'actualPosition',
          placeholder: 'Cargo',
          value      : 'Desarrollador'
        } ]}
        photo='https://static1.abc.es/media/estilo/2017/02/08/cara-kwm-U202521250342CmC-620x650@abc.jpg'
        placeholderTitle='Nombre de usuario'
        title='Luis Alfredo' />
    </div>
  )
}

const useStyles = makeStyles({
  cardCandidateRanking: {
    marginBottom: 8
  }
})
