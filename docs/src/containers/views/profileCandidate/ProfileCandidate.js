import React from 'react'
import { ProfileCandidate } from '@krowdy-ui/views'

const candidate = {
  candidateId: '5fc50ddb3d874f0015343703',
  curriculum : 'https://s3.amazonaws.com/test.krowdy.apps/assets/profile/5e14c062f5e607002de53d8e/cv/2020-08-04T14-43-29-470Z.pdf',
  education  : [
    {
      _id            : '5fc512ccfc0bda107ddb192e',
      career         : 'educacion 2',
      endDate        : null,
      institutionName: 'educacion 2',
      startDate      : 'Jan 2020',
      studyingHere   : true
    },
    {
      _id            : '5fc512ccfc0bda107ddb192f',
      career         : 'Ingeniería de Sistemas',
      condition      : 'Estudiando',
      degree         : 'Universitario',
      description    : 'WQE QWEQWE',
      endDate        : null,
      institutionName: 'UNI',
      startDate      : 'Mar 2016',
      studyingHere   : true
    }
  ],
  email     : 'krowdy001@gmail.com',
  experience: [
    {
      area       : 'Comisaría',
      companyName: 'Empresas varias',
      description: 'Corregir el transito',
      endDate    : null,
      hierarchy  : 'Ejecutivo / representante',
      jobPosition: 'Policía de tránsito',
      location   : 'Lima',
      startDate  : 'Feb 2020',
      workHere   : true
    },
    {
      area       : 'Calle',
      companyName: 'Congreso',
      description: 'Carterista',
      endDate    : 'Aug 2020',
      hierarchy  : 'Ejecutivo / representante',
      jobPosition: 'Ratero',
      location   : 'Lima',
      startDate  : 'Jun 2020',
      workHere   : false
    },
    {
      area       : 'TI',
      companyName: 'Krowdy',
      description: 'Creo música',
      endDate    : null,
      hierarchy  : 'Asistente',
      jobPosition: 'Trompetista',
      location   : 'Lima',
      startDate  : 'May 2020',
      workHere   : true
    }
  ],
  firstName: 'Benedict',
  fullName : 'Benedict Tubbs',
  jobId    : '5fc50cae3d874f00153436f2',
  lastName : 'Tubbs',
  linkedin : 'https://www.linkedin.com/in/BenedictTubbs/',
  nameTask : 'Invitacion',
  phone    : '923289190',
  photo    : 'https://s3.amazonaws.com/test.krowdy.apps/assets/profile/5e14c062f5e607002de53d8e/avatar/2020-08-05T18-02-36-894Z.jpg',
  website  : ''
}

export default function() {
  const _handleClickPreviewCV = () => {

  }

  return (
    <div style={{ alignItems: 'baseline', display: 'flex', width: 1000 }}>
      <div style={{
        height: 1217,
        width : 330
      }}>
        <ProfileCandidate onClickPreviewCV={_handleClickPreviewCV} />
      </div>
      <div style={{
        height: 1217,
        width : 330
      }}>
        <ProfileCandidate candidate={candidate} onClickPreviewCV={_handleClickPreviewCV} />
      </div>

      <div style={{
        height: 1217,
        width : 330
      }}>
        <ProfileCandidate candidate={candidate} disableSubHeaderTitle onClickPreviewCV={_handleClickPreviewCV} />
      </div>
    </div>
  )
}
