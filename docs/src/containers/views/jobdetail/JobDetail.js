import React from 'react'
import { Grid } from '@krowdy-ui/core'
import { JobDetail } from '@krowdy-ui/views'
import { 
  Schedule as ScheduleIcon,
  Home as HomeIcon,
  AttachMoney as AttachMoneyIcon,
  Work as WorkIcon,
  Business as BusinessIcon
} from '@krowdy-ui/icons'

export default function () {
  return (
    <Grid container>
      <JobDetail 
        title='Analista UI Designer Senior' 
        description='Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry`s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
        detailOptions={[
          {
            icon: <ScheduleIcon />,
            text: 'Full Time'
          },
          {
            icon: <BusinessIcon />,
            text: 'Tecnología'
          },
          {
            icon: <HomeIcon />,
            text: 'Lima, Perú'
          },
          {
            icon: <AttachMoneyIcon />,
            text: '2.000'
          },
          {
            icon: <WorkIcon />,
            text: 'Gerente'
          }
        ]}
        basicInformation={[
          {
            "visible": true,
            "title": "Descripción del puesto",
            "description": `<ul>
            <li>Colaborar con el Product Owner y otras partes interesadas dentro de los departamentos de Ingeniería (Frontend, UX, Backend, etc.) la gestión y el mantenimiento de los productos desarrollados para lograr un alto nivel de calidad en un entorno altamente iterativo y acelerado.<br><br></li>
            <li>Defender las mejoras en la calidad del producto, la seguridad y el rendimiento.<br><br></li>
            <li>Aportar ideas para resolver problemas de alcance y complejidad moderada en el detalle de los requerimientos.</li>
            </ul>`
          },
          {
            "visible": true,
            "title": "Funciones",
            "description": "",
          },
          {
            "visible": true,
            "title": "Conocimientos y Requisito",
            "description": "",
          }
        ]}
        competencies={[
          {
              "title": "Capacidad de Tomar Decisiones"
          },
          {
              "title": "Capacidad de Planificación"
          },
          {
              "title": "Cierre de Acuerdos"
          },
          {
              "title": "Comunicación"
          },
          {
              "title": "Mercenario"
          }
        ]}
      />
    </Grid>
  )
}