import React from 'react'
import { CardException } from '@krowdy-ui/views'

const data = [
  {
    area: {
      id  : 1,
      name: 'Administrador de Contratos Legales'
    },
    candidate: {
      _id : 1,
      name: 'Jheyson Pedro Portocarrero Alfaro'
    },
    company: {
      id  : 1,
      name: 'Nestle Corp.'
    },
    dateTime: 'Ene. 12, 2019 - 2:00 PM',
    group   : {
      id  : 1,
      name: 'Grupo en Carta'
    },
    statusException: 'Pending',
    title          : 'Tarea sin asignar, ejecución en 1 hora',
    type           : 1
  },
  {
    area: {
      id  : 1,
      name: 'Administrador de Contratos Legales'
    },
    candidate: {
      _id : 1,
      name: 'Jheyson Pedro Portocarrero Alfaro'
    },
    company: {
      id  : 1,
      name: 'Krowdy'
    },
    dateTime: 'Ene. 12, 2019 - 2:00 PM',
    group   : {
      id  : 1,
      name: 'Grupo en Carta'
    },
    krowder: {
      id  : 1,
      name: 'Krowder: Piero Rodriguez'
    },
    statusException: 'Pending',
    title          : 'Ausencia de Krowder, ejecución en 15 minutos',
    type           : 2
  },
  {
    area: {
      id  : 1,
      name: 'Administrador de Contratos Legales'
    },
    candidate: {
      _id : 1,
      name: 'Jheyson Pedro Portocarrero Alfaro'
    },
    company: {
      id  : 1,
      name: 'Krowdy'
    },
    dateTime: 'Ene. 12, 2019 - 2:00 PM',
    group   : {
      id  : 1,
      name: 'Panal Candidatos / Postulantes'
    },
    statusException: 'Completed',
    title          : 'Sin revisión, por revisar hace 3 horas',
    type           : 3
  },
  {
    area: {
      id  : 1,
      name: 'Administrador de Contratos Legales'
    },
    candidate: {
      _id : 1,
      name: 'Jheyson Pedro Portocarrero Alfaro'
    },
    company: {
      id  : 1,
      name: 'Laborum'
    },
    dateTime: 'Ene. 12, 2019 - 2:00 PM',
    group   : {
      id  : 1,
      name: 'Mi encarta'
    },
    recruiter: {
      id  : 1,
      name: 'Reclutador: Walther Ayala (Solicitante)'
    },
    statusException: 'Reviewed',
    title          : 'Solicitud, volver a revisar tarea',
    type           : 4
  },
  {
    area: {
      id  : 1,
      name: 'Administrador de Contratos Legales'
    },
    candidate: {
      _id : 1,
      name: 'Jheyson Pedro Portocarrero Alfaro'
    },
    company: {
      id  : 1,
      name: 'Krowdy'
    },
    dateTime: 'Ene. 12, 2019 - 2:00 PM',
    group   : {
      id  : 1,
      name: 'Mi encarta'
    },
    recruiter: {
      id  : 1,
      name: 'Reclutador: Walther Ayala (Solicitante)'
    },
    statusException: 'Reviewed',
    title          : 'Solicitud, volver a entrevistar candidato',
    type           : 5
  },
  {
    area: {
      id  : 1,
      name: 'Administrador de Contratos Legales'
    },
    candidate: {
      _id : 1,
      name: 'Jheyson Pedro Portocarrero Alfaro'
    },
    company: {
      id  : 1,
      name: 'Krowdy'
    },
    dateTime: 'Ene. 12, 2019 - 2:00 PM',
    group   : {
      id  : 1,
      name: 'Grupo en carta'
    },
    recruiter: {
      id  : 1,
      name: 'Reclutador: Walther Ayala (Solicitante)'
    },
    statusException: 'Pending',
    title          : 'Solicitud, tarea con errores',
    type           : 6
  },
  {
    area: {
      id  : 1,
      name: 'Administrador de Contratos Legales'
    },
    candidate: {
      _id : 1,
      name: 'Jheyson Pedro Portocarrero Alfaro'
    },
    company: {
      id  : 1,
      name: 'Telefónica del Perú'
    },
    dateTime: 'Ene. 12, 2019 - 2:00 PM',
    group   : {
      id  : 1,
      name: 'Grupo en carta'
    },
    recruiter: {
      id  : 1,
      name: 'Reclutador: Walther Ayala (Solicitante)'
    },
    statusException: 'Completed',
    title          : 'Solicitud, volver a realizar tarea',
    type           : 7
  },
  {
    area: {
      id  : 1,
      name: 'Administrador de Contratos Legales'
    },
    candidate: {
      _id : 1,
      name: 'Jheyson Pedro Portocarrero Alfaro'
    },
    company: {
      id  : 1,
      name: 'Nestle Corp.'
    },
    dateTime: 'Ene. 12, 2019 - 2:00 PM',
    group   : {
      id  : 1,
      name: 'Grupo en carta'
    },
    statusException: 'Completed',
    title          : 'Sin revisión, por asignar hace 3 horas',
    type           : 8
  },
  {
    area: {
      id  : 1,
      name: 'Administrador de Contratos Legales'
    },
    candidate: {
      _id : 1,
      name: 'Jheyson Pedro Portocarrero Alfaro'
    },
    company: {
      id  : 1,
      name: 'Apple Company'
    },
    dateTime: 'Ene. 12, 2019 - 2:00 PM',
    group   : {
      id  : 1,
      name: 'Grupo en carta'
    },
    statusException: 'Completed',
    title          : 'Pendiente, por revisar hace 2 horas',
    type           : 9
  },
  {
    area: {
      id  : 1,
      name: 'Administrador de Contratos Legales'
    },
    candidate: {
      _id : 1,
      name: 'Jheyson Pedro Portocarrero Alfaro'
    },
    company: {
      id  : 1,
      name: 'Krowdy'
    },
    dateTime: 'Ene. 12, 2019 - 2:00 PM',
    group   : {
      id  : 1,
      name: 'Grupo en carta'
    },
    recruiter: {
      id  : 1,
      name: 'Reclutador: Walther Ayala (Solicitante)'
    },
    statusException: 'Reviewed',
    title          : 'Solicitud, volver a revisar tarea',
    type           : 10
  },
  {
    area: {
      id  : 1,
      name: 'Administrador de Contratos Legales'
    },
    candidate: {
      _id : 1,
      name: 'Jheyson Pedro Portocarrero Alfaro'
    },
    company: {
      id  : 1,
      name: 'Krowdy'
    },
    dateTime: 'Ene. 12, 2019 - 2:00 PM',
    group   : {
      id  : 1,
      name: 'Grupo en carta'
    },
    recruiter: {
      id  : 1,
      name: 'Krowder: Piero Rodriguez (Solicitante)'
    },
    statusException: 'Reviewed',
    title          : 'Solicitud, tarea con errores',
    type           : 11
  }
]

export default function () {
  return (
    <div>
      {
        data.map((item, index) => (
          <CardException key={index} {...item} />
        ))
      }
    </div>
  )
}
