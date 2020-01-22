import React from 'react'
import { CardException } from '@krowdy-ui/views'

const data = [
  {
    area           : 'Administrador de Contratos Legales',
    candidate      : 'Jheyson Pedro Portocarrero Alfaro',
    company        : 'Nestle Corp.',
    dateTime       : 'Ene. 12, 2019 - 2:00 PM',
    group          : 'Grupo en Carta',
    statusException: 'Pending',
    title          : 'Tarea sin asignar, ejecución en 1 hora',
    type           : 1
  },
  {
    area           : 'Administrador de Contratos Legales',
    candidate      : 'Jheyson Pedro Portocarrero Alfaro',
    company        : 'Krowdy',
    dateTime       : 'Ene. 12, 2019 - 2:00 PM',
    group          : 'Grupo en Carta',
    krowder        : 'Krowder: Piero Rodriguez',
    statusException: 'Pending',
    title          : 'Ausencia de Krowder, ejecución en 15 minutos',
    type           : 2
  },
  {
    area           : 'Administrador de Contratos Legales',
    candidate      : 'Jheyson Pedro Portocarrero Alfaro',
    company        : 'Krowdy',
    dateTime       : 'Ene. 12, 2019 - 2:00 PM',
    group          : 'Panal Candidatos / Postulantes',
    statusException: 'Completed',
    title          : 'Sin revisión, por revisar hace 3 horas',
    type           : 3
  },
  {
    area           : 'Administrador de Contratos Legales',
    candidate      : 'Jheyson Pedro Portocarrero Alfaro',
    company        : 'Laborum',
    dateTime       : 'Ene. 12, 2019 - 2:00 PM',
    group          : 'Mi encarta',
    recruiter      : 'Reclutador: Walther Ayala (Solicitante)',
    statusException: 'Reviewed',
    title          : 'Solicitud, volver a revisar tarea',
    type           : 4
  },
  {
    area           : 'Administrador de Contratos Legales',
    candidate      : 'Jheyson Pedro Portocarrero Alfaro',
    company        : 'Krowdy',
    dateTime       : 'Ene. 12, 2019 - 2:00 PM',
    group          : 'Mi encarta',
    recruiter      : 'Reclutador: Walther Ayala (Solicitante)',
    statusException: 'Reviewed',
    title          : 'Solicitud, volver a entrevistar candidato',
    type           : 5
  },
  {
    area           : 'Administrador de Contratos Legales',
    candidate      : 'Jheyson Pedro Portocarrero Alfaro',
    company        : 'Krowdy',
    dateTime       : 'Ene. 12, 2019 - 2:00 PM',
    group          : 'Grupo en carta',
    recruiter      : 'Reclutador: Walther Ayala (Solicitante)',
    statusException: 'Pending',
    title          : 'Solicitud, tarea con errores',
    type           : 6
  },
  {
    area           : 'Administrador de Contratos Legales',
    candidate      : 'Jheyson Pedro Portocarrero Alfaro',
    company        : 'Telefónica del Perú',
    dateTime       : 'Ene. 12, 2019 - 2:00 PM',
    group          : 'Grupo en carta',
    recruiter      : 'Reclutador: Walther Ayala (Solicitante)',
    statusException: 'Completed',
    title          : 'Solicitud, volver a realizar tarea',
    type           : 7
  },
  {
    area           : 'Administrador de Contratos Legales',
    candidate      : 'Jheyson Pedro Portocarrero Alfaro',
    company        : 'Nestle Corp.',
    dateTime       : 'Ene. 12, 2019 - 2:00 PM',
    group          : 'Grupo en carta',
    statusException: 'Completed',
    title          : 'Sin revisión, por asignar hace 3 horas',
    type           : 8
  },
  {
    area           : 'Administrador de Contratos Legales',
    candidate      : 'Jheyson Pedro Portocarrero Alfaro',
    company        : 'Apple Company',
    dateTime       : 'Ene. 12, 2019 - 2:00 PM',
    group          : 'Grupo en carta',
    statusException: 'Completed',
    title          : 'Pendiente, por revisar hace 2 horas',
    type           : 9
  },
  {
    area           : 'Administrador de Contratos Legales',
    candidate      : 'Jheyson Pedro Portocarrero Alfaro',
    company        : 'Krowdy',
    dateTime       : 'Ene. 12, 2019 - 2:00 PM',
    group          : 'Grupo en carta',
    recruiter      : 'Reclutador: Walther Ayala (Solicitante)',
    statusException: 'Reviewed',
    title          : 'Solicitud, volver a revisar tarea',
    type           : 10
  },
  {
    area           : 'Administrador de Contratos Legales',
    candidate      : 'Jheyson Pedro Portocarrero Alfaro',
    company        : 'Krowdy',
    dateTime       : 'Ene. 12, 2019 - 2:00 PM',
    group          : 'Grupo en carta',
    recruiter      : 'Krowder: Piero Rodriguez (Solicitante)',
    statusException: 'Reviewed',
    title          : 'Solicitud, tarea con errores',
    type           : 11
  }
]

const krowders = [
  {
    name: 'kroder 1'
  },
  {
    name: 'kroder 2'
  },
  {
    name: 'kroder 3'
  },
  {
    name: 'kroder 4'
  },
  {
    name: 'kroder 5'
  },
  {
    name: 'kroder 6'
  },
  {
    name: 'kroder 7'
  },
  {
    name: 'kroder 8'
  }
]

const dataResolved = {
  area           : 'Administrador de Contratos Legales',
  candidate      : 'Jheyson Pedro Portocarrero Alfaro',
  company        : 'Nestle Corp.',
  dateTime       : 'Ene. 12, 2019 - 2:00 PM',
  group          : 'Grupo en Carta',
  resolved       : 'Mario Fishman',
  statusException: 'Pending',
  title          : 'Tarea sin asignar, ejecución en 1 hora',
  type           : 1
}

export default function () {
  const _handleClickResolved = (res) => {
    console.log(res, 'resolved')
  }

  const _handleClickArchived = (res) => {
    console.log(res, 'archived')
  }

  const _handleClickSendPull = (res) => {
    console.log(res, 'send pull')
  }

  const _handleClickUnlockTask = (res) => {
    console.log(res, 'unlock task')
  }

  return (
    <div>
      <CardException
        key='2' {...dataResolved} actions={false}
        listStyle='column' />
      {
        data.map((item, index) => (
          <li
            key={index}
            style={{
              marginTop: 20
            }}>
            <CardException
              onArchived={_handleClickArchived}
              onResolved={_handleClickResolved}
              onSendPull={_handleClickSendPull}
              onUnlockTask={_handleClickUnlockTask}
              suggestion={krowders} {...item} />
          </li>
        ))
      }
    </div>
  )
}

// listStyle='row | column'
