import React from 'react'
import { Typography, makeStyles } from '@krowdy-ui/core'
import { useAuth } from '../utils'

const urlsRef = {
  conditionsAndTerms: 'https://cdn.laborum.pe/public/laborum-condiciones-generales-de-uso.pdf?_ga=2.123654923.1496876818.1537374997-1836386932.1537374997',
  privacyPolicy     : 'https://cdn.laborum.pe/public/laborum-politica-de-proteccion-de-datos-y-privacidad.pdf'
}

const Footer = ({
  typeView
}) => {
  const classes = useStyles()
  const { allowAds, onAllowAds } = useAuth()

  return (
    <div className={classes.containerFooter}>
      <Typography className={classes.content} >
Recuerda que al usar Krowdy aceptas los {' '}
        <a
          className={classes.textRef}
          href={urlsRef['conditionsAndTerms']}
          rel='noreferrer' target='_blank'>
     Términos y condiciones
        </a>
        {' '}y su{' '}
        <a
          className={classes.textRef}
          href={urlsRef['privacyPolicy']}
          rel='noreferrer' target='_blank'>
        Política de privacidad.
        </a>
        {
          typeView === 'main' && allowAds ? (
            <>
              {' '}
               Asimismo, si no deseas que usemos tus datos con fines publicitarios,
              {' '}
              <Typography

                className={classes.textNoPermission}
                onClick={onAllowAds}>
            ingresa aquí.
              </Typography>.
            </>
          ) : null
        }
        {
          typeView === 'main' && !allowAds ? (
            <>
              {' '}
             Asimismo, no estás aceptando nuestras políticas de publicidad.
            </>
          ) : null
        }
      </Typography>
      <img
        alt='powered-krowdy'
        className={classes.footerImage}
        src='//cdn.krowdy.com/auth/powered_by_krowdy.png' />
    </div>
  )
}

const useStyles = makeStyles(({ palette, spacing }) => ({
  containerFooter: {
    alignItems    : 'center',
    color         : palette.grey[600],
    display       : 'flex',
    flexDirection : 'column',
    fontSize      : 12,
    justifyContent: 'center'
  },
  content: {
    fontSize : 12,
    textAlign: 'center'
  },
  footerImage: {
    marginTop: spacing(6)
  },
  textNoPermission: {
    color         : palette.grey[600],
    cursor        : 'pointer',
    fontWeight    : 'bold',
    textDecoration: 'underline'
  },
  textRef: {
    color     : palette.grey[600],
    fontWeight: 'bold'
  }
}), { name: 'Footer' })

export default React.memo(Footer)
