import React from 'react'
import { Profile } from '@krowdy-ui/views'
import { InsertDriveFile as InsertDriveFileIcon } from '@material-ui/icons'

const experiences = [ {
  __typename : 'Experience',
  _id        : '5f98b2df8cd8e740e0efe4e1',
  area       : 'Tecnoligía Interna',
  companyName: 'BCP',
  description: null,
  endDate    : '2018-06-27T23:52:41.000Z',
  hierarchy  : 'Practicante - pre - profesional',
  imgUrl     : null,
  jobPosition: 'Practicante Ágile',
  location   : 'Lima, Perú',
  startDate  : '2018-01-27T23:52:29.000Z',
  workHere   : false
}, {
  __typename : 'Experience',
  _id        : '5f98b2df8cd8e740e0efe4e2',
  area       : 'Dirección de Personas',
  companyName: 'Media Networks',
  description: 'Liderar equipos ágiles, coachear Product y Scrum Masters',
  endDate    : null,
  hierarchy  : 'Ejecutivo / representante',
  imgUrl     : null,
  jobPosition: 'Agile Coach',
  location   : 'Lima, Perú',
  startDate  : null,
  workHere   : true
}, {
  __typename : 'Experience',
  _id        : '5f98b2df8cd8e740e0efe4e3',
  area       : 'RRHHH',
  companyName: 'Telefónica del Perú',
  description: 'Scrum Master',
  endDate    : '2020-02-27T23:49:13.000Z',
  hierarchy  : 'Analista',
  imgUrl     : null,
  jobPosition: 'Agile Lead',
  location   : 'Lima',
  startDate  : '2018-07-27T23:48:26.000Z',
  workHere   : false
} ]

const educations = [ {
  __typename     : 'Education',
  _id            : '5fec796a8833623b637a6523',
  academicArea   : null,
  career         : 'Educación 2',
  condition      : 'Completo',
  degree         : 'Universitario',
  description    : null,
  endDate        : '2020-03-30T18:57:44.000Z',
  imgUrl         : null,
  institutionName: 'Educación 2',
  startDate      : '2020-01-30T18:57:42.000Z'
}, {
  __typename     : 'Education',
  _id            : '5fec796a8833623b637a6524',
  academicArea   : null,
  career         : 'Educación 1',
  condition      : 'Estudiando',
  degree         : 'Master',
  description    : 'Educación 1 Educación 1',
  endDate        : '2019-03-30T18:57:44.000Z',
  imgUrl         : null,
  institutionName: 'Educación 1',
  startDate      : '2018-01-30T18:57:42.000Z'
}, {
  __typename     : 'Education',
  _id            : '5fec796a8833623b637a6524',
  academicArea   : null,
  career         : 'nuevo',
  condition      : 'Estudiando',
  degree         : 'Master',
  description    : 'nuevo nuevo',
  endDate        : '2018-03-30T18:57:44.000Z',
  imgUrl         : null,
  institutionName: 'nuevo',
  startDate      : '2018-01-30T18:57:42.000Z'
} ]

export default function() {
  return (
    <div style={{ alignItems: 'baseline', display: 'flex', width: 452 }}>
      <Profile
        action={<InsertDriveFileIcon color='primary' fontSize='small' />}
        ascent={{
          count: 2,
          time : 3
        }}
        educations={educations}
        experience={2}
        experiences={experiences}
        name='Piero Rodríguez'
        rotation={{
          count: 1,
          time : 30
        }}
        salaryText={'3/10 (de mas caro a mas barato)'}
        workExperience={{
          count: 1,
          name : 'Krowdy'
        }} />
    </div>
  )
}
