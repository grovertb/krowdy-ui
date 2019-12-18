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
        detailJob={[
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
        basicEdition={[
          {
            "visible": true,
            "title": "Descripción del puesto",
            "description": "<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>\n",
            "__typename": "basicEdition"
          },
          {
              "visible": true,
              "title": "Funciones",
              "description": "<ol>\n<li>Crear aplicaciones</li>\n<li>Desarrollar aplicaciones</li>\n<li>Producir aplicaciones</li>\n</ol>\n",
              "__typename": "basicEdition"
          },
          {
              "visible": true,
              "title": "Conocimientos y Requisitos",
              "description": "<ul>\n<li>conocimiento 1</li>\n<li>react</li>\n<li>nodejs</li>\n<li>android</li>\n<li>java</li>\n<li>kotlin</li>\n</ul>\n",
              "__typename": "basicEdition"
          },
          {
              "visible": true,
              "title": "Nueva Seccion",
              "description": "<p>Sección de prueba krowdy</p>\n",
              "__typename": "basicEdition"
          }
        ]}
        benefits={[
          {
            "title": "Planilla",
            "description": "b1"
          },
          {
            "title": "EPS",
            "description": "12"
          },
          {
            "title": "Otros seguros",
            "description": "b3"
          },
          {
            "title": "Convenios",
            "description": "b4"
          },
          {
            "title": "Capacitaciones",
            "description": "b5"
          },
          {
            "title": "Otros",
            "description": "b6"
          }
        ]}
        competencies={[
          {
            "title": "Autodidacta"
          },
          {
              "title": "Capacidad de Tomar Decisiones"
          },
          {
              "title": "Comunicación"
          }
        ]}
        requirements={[
          {
            "title": "Tiempo de experiencia laboral",
            "value": "12 Años"
          },
          {
            "title": "Nivel de educación",
            "value": "Instituto - Estudiando"
          },
          {
            "title": "Carreras",
            "value": [
              "ciencias computacion",
              "ingenieria sistemas",
              "computacion informatica"
            ]
          },
          {
            "title": "Idioma",
            "value": [
              "Inglés - Básico",
              "Español - Básico"
            ]
          },
          {
            "title": "Disponibilidad para viajar",
            "value": "Si"
          }
        ]}
      />
    </Grid>
  )
}