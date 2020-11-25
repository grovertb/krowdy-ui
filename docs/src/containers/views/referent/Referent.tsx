import React from 'react'
import { Referent, ReferentInput } from '@krowdy-ui/views'

export default function () {
  return (
    <div>
      <Referent
        photo='https://static1.abc.es/media/estilo/2017/02/08/cara-kwm-U202521250342CmC-620x650@abc.jpg'
        header={(
          <ReferentInput
            name='phone'
            unPadding
            placeholder='Nombre de usuario'
            size='medium'
            value='Luis Alfredo' />
        )}>
        <ReferentInput
          filled
          name='phone'
          placeholder='Teléfono'
          size='small'
          value='977862124' />
        <ReferentInput
          filled
          name='email'
          placeholder='email'
          size='small'
          value='luis.sullca.h@uni.pe' />
        <ReferentInput
          filled
          name='actualCompany'
          placeholder='Empresa actual'
          size='small'
          value='Krowdy' />
        <ReferentInput
          filled
          name='actualPosition'
          placeholder='Cargo'
          size='small'
          value='Desarrollador' />
      </Referent>
    </div>
  )
}