import React from 'react'
import { Grid } from '@krowdy-ui/core'
import { JobDetail } from '@krowdy-ui/views'
import {
  Schedule as ScheduleIcon,
  Home as HomeIcon,
  AttachMoney as AttachMoneyIcon,
  Work as WorkIcon,
  Business as BusinessIcon
} from '@material-ui/icons'

export default function () {
  //   const job = {
  //     "basicEdition": [
  //         {
  //             "description": "<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>",
  //             "title": "Descripción del puesto",
  //             "visible": true
  //         },
  //         {
  //             "description": "<ol>\n<li>Crear aplicaciones</li>\n<li>Desarrollar aplicaciones</li>\n<li>Producir aplicaciones</li>\n</ol>",
  //             "title": "Funciones",
  //             "visible": true
  //         },
  //         {
  //             "description": "<ul>\n<li>conocimiento 1</li>\n<li>react</li>\n<li>nodejs</li>\n<li>android</li>\n<li>java</li>\n<li>kotlin</li>\n</ul>",
  //             "title": "Conocimientos y Requisitos",
  //             "visible": true
  //         },
  //         {
  //             "description": "<p>Sección de prueba krowdy</p>",
  //             "title": "Nueva Seccion",
  //             "visible": true
  //         }
  //     ],
  //     "benefits": [
  //         {
  //             "description": "b1",
  //             "title": "Planilla"
  //         },
  //         {
  //             "description": "12",
  //             "title": "EPS"
  //         },
  //         {
  //             "description": "b3",
  //             "title": "Otros seguros"
  //         },
  //         {
  //             "description": "b4",
  //             "title": "Convenios"
  //         },
  //         {
  //             "description": "b5",
  //             "title": "Capacitaciones"
  //         },
  //         {
  //             "description": "b6",
  //             "title": "Otros"
  //         }
  //     ],
  //     "competencies": [
  //         {
  //             "_id": "58765a80cd6c4730bbeb1420",
  //             "description": "Genuina curiosidad que impulsa a investigar y aprender acerca de nuevas técnicas y conceptos de manera que le permita implementar y compartir en su trabajo diario y mejorar su organización.",
  //             "title": "Autodidacta"
  //         },
  //         {
  //             "_id": "58765a80cd6c4730bbeb1450",
  //             "description": "Es la capacidad de tomar decisiones para el logro de los objetivos de forma ágil y proactiva, apoyada en la información relevante para facilitar la elección de la mejor alternativa (mediante la consulta a las fuentes más adecuadas, contratándola e integrándola) y evaluando la asunción de ciertos riesgos controlados cuando existe incertidumbre.",
  //             "title": "Capacidad de Tomar Decisiones"
  //         },
  //         {
  //             "_id": "58765a80cd6c4730bbeb1435",
  //             "description": "Capacidad para escuchar y entender al otro, para transmitir en forma clara y oportuna la información requerida por los demás a fin de alcanzar los objetivos organizacionales y para mantener canales de comunicación abiertos y redes de contacto formales e informales que abarquen los diferentes niveles de la organización. Sabe cuándo y a quién preguntar. Sabe transmitir el sentimiento de los estratos inferiores hacia arriba con el fin de sensibilizar a los líderes a tomar acción y sabe utilizar las redes informales y formales para transmitir las directrices y estrategias de la organización hacia abajo con el fin de guiar a los colaboradores en una sola dirección.",
  //             "title": "Comunicación"
  //         }
  //     ],

  //     "detailJob": [
  //         {
  //             "title": "Lugar",
  //             "value": "Lima, Peru"
  //         },
  //         {
  //             "title": "Salario",
  //             "value": "S/. 10000 - S/. 15000"
  //         },
  //         {
  //             "title": "Horario",
  //             "value": "Freelance"
  //         },
  //         {
  //             "title": "Jerarquia",
  //             "value": "Analista"
  //         },
  //         {
  //             "title": "Tipo de contrato",
  //             "value": "Recibo por honorarios"
  //         },
  //         {
  //             "title": "Area",
  //             "value": [
  //                 {
  //                     "area": "Informatica"
  //                 }
  //             ]
  //         }
  //     ],
  //     "expirationDate": "2020-01-31T21:48:39.679Z",
  //     "job_id": "5df94c803e5ee30034fe184f",
  //     "publishDate": "2019-12-19T14:50:15.661Z",
  //     "requirements": [
  //         {
  //             "title": "Carreras",
  //             "value": [
  //                 {
  //                     "career": "ciencias computacion"
  //                 },
  //                 {
  //                     "career": "ingenieria sistemas"
  //                 },
  //                 {
  //                     "career": "computacion informatica"
  //                 }
  //             ]
  //         },
  //         {
  //             "title": "Nivel de educacion",
  //             "value": "Instituto - Estudiando"
  //         },
  //         {
  //             "title": "Idioma",
  //             "value": [
  //                 "Inglés - Básico",
  //                 "Español - Básico"
  //             ]
  //         }
  //     ],
  //     "status": "READY",
  //     "title": "Desarrollador Android",
  //     "visibleInformation": false,
  //     "error": null,
  //     "disability": {
  //         "accepted": true,
  //         "visible": false
  //     }
  // }

  return (
    <Grid container>
      <JobDetail
        jobId='564c66sd54es545d4584545'
        title='Analista UI Designer Senior'
        userInJob={false}
        company={{
          company_id: '5df94c923e5ee30034fe1859',
          //"company_logo": "https://s3.amazonaws.com/test.krowdy.apps/company/5df94c923e5ee30034fe1859/2019-12-17T16-53-22-199Z71a50283e8ab9334ccf054d2caa3760a_%281%29.jpeg",
          company_logo: 'https://s3.amazonaws.com/www.laborum.pe/',
          company_name: 'Krowdy Sac Perú'
        }}
        onViewCompany={() => {
          console.log('Detalle de compania')
        }}
        onClickPostulation={() => {
          console.log('POSTULAR')
        }}
        // description='Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry`s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
        description='· Grado académico mínimo de Bachiller en Contabilidad o fines· Manejo de Excel Intermedio -avanzado y dominio del entorno de Windows Office.· Conocimientos de ERP o sistemas contables· Contar con experiencia mínima de un año como asistente contable· Organizado y ordenado en su ambiente de trabajo· Tener actitud crítica, reflexiva y creativa· Habilidades comunicativas, capacidad de trabajo en equipo y espíritu proactivo· Participar de manera activa en actividades y labores de la empresa· Carecer de Antecedentes Policiales y Penales· Disponibilidad para laborar en el Distrito de la Perla Callao<br><b><br>CONOCIMIENTOS</b>Cursos o especialización en finanzas.Excel Intermedio - AvanzadoConocimiento y aplicación en Tributación y liquidación de impuestosManejo de CostosDeclaración DJ (Jurídica y Natural)Manejo de Flujo de CajaManejo de ERP (Libro de Contabilidad y Caja)<span>Contabilidad General<br><br></span><b>FUNCIONES PRINCIPALES</b>· Registros y egresos bancarios· Declaración de Libros Electrónicos y TXT.· Llenado y presentación mensual del PDT 621 y PLAME· Presentación y pago mensual de AFP Net· Verificación de planilla, gratificación, vacaciones y cts. Mensualmente· Análisis de Asientos Contables· Conciliación Bancaria· Registro de las Rendiciones· Registro de documentos a los sistemas· Elaboración de estados Financieros· Elaboración y presentación de impuestos mensuales· Seguimiento y cuadre de IGV teniendo en cuenta los registros de compras, ventas y libro mayor· Realizar las conciliaciones bancarias diariamente de todas las cuentas bancarias y actualizar el tipo de cambio de cierre de cada mes las cuentas en M.E· Efectuar el control y registrar mensual la provisión de alquileres· Realizar a fin de mes el asiento contable de Retenciones y Percepciones para aplicación como crédito fiscal.· Analizar y presentar las declaraciones de los libros electrónicos (Registro de ventas, registro compras).· Otras funciones asignadas por el Jefe Inmediato<span><br><br></span><br>'
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
            description: '<ol>\n<li>Crear aplicaciones</li>\n<li>Desarrollar aplicaciones</li>\n<li>Producir aplicaciones</li>\n</ol>\n',
            title: 'Funciones',
            visible: true,
          },
          {
            description: '<ul>\n<li>conocimiento 1</li>\n<li>react</li>\n<li>nodejs</li>\n<li>android</li>\n<li>java</li>\n<li>kotlin</li>\n</ul>\n',
            title: 'Conocimientos y Requisitos',
            visible: true,
          },
          {
            description: '<p>Sección de prueba krowdy</p>\n',
            title: 'Nueva Seccion',
            visible: true,
          }
        ]}
        benefits={[
          {
            description: 'b1',
            title: 'Planilla'
          },
          {
            description: '12',
            title: 'EPS'
          },
          {
            description: 'b3',
            title: 'Otros seguros'
          },
          {
            description: 'b4',
            title: 'Convenios'
          },
          {
            description: 'b5',
            title: 'Capacitaciones'
          },
          {
            description: 'b6',
            title: 'Otros'
          }
        ]}
        competencies={[
          {
            title: 'Autodidacta'
          },
          {
            title: 'Capacidad de Tomar Decisiones'
          },
          {
            title: 'Comunicación'
          }
        ]}
        requirements={[
          {
            title: 'Tiempo de experiencia laboral',
            value: '12 Años'
          },
          {
            title: 'Nivel de educación',
            value: 'Instituto - Estudiando'
          },
          {
            title: 'Carreras',
            value: [
              'ciencias computacion',
              'ingenieria sistemas',
              'computacion informatica',
            ]
          },
          {
            title: 'Idioma',
            value: [
              'Inglés - Básico',
              'Español - Básico'
            ]
          },
          {
            title: 'Disponibilidad para viajar',
            value: 'Si'
          }
        ]}
        disabledPerson={{
          accepted: true,
          visible: true
        }}
        expirationDate='2020-01-04T05:00:00.000Z'
        visibleInformation={true}
      />
    </Grid>
  )
}