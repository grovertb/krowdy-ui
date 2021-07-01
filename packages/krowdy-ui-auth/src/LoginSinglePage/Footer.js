import React from 'react'
import { Typography, makeStyles } from '@krowdy-ui/core'

const Footer = ({
  typeView
}) => {
  const classes = useStyles()

  return (
    <div className={classes.containerFooter}>
      <Typography className={classes.content} >
Recuerda que al usar Krowdy aceptas los {' '}
        <a className={classes.textRef} href='https://'>
     Términos y condiciones
        </a>
        {' '}y su{' '}
        <a className={classes.textRef} href='https://'>
        Política de privacidad.
        </a>
        {
          typeView === 'main' ? (
            <>
              {' '}
               Asimismo, si no deseas que usemos tus datos con fines publicitarios,
              {' '}
              <a className={classes.textRef} href='https://'>
            ingresa aquí.
              </a>.
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
  textRef: {
    color     : palette.grey[600],
    fontWeight: 'bold'
  }
}), { name: 'Footer' })

export default React.memo(Footer)
