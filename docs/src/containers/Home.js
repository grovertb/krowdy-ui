import React from 'react'
import GitHubButton from 'react-github-btn'
import { makeStyles, Typography, Container, Button } from '@krowdy-ui/core'
import { t } from 'components/MarkDowns/utils'
import Steps from 'components/Home/Steps'

const useStyles = makeStyles(theme => ({
  button: {
    marginTop: theme.spacing(4),
  },
  content: {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
    paddingBottom: theme.spacing(8),
    paddingTop: theme.spacing(4),
    textAlign: 'center',
    [theme.breakpoints.up('md')]: {
      alignItems: 'flex-start',
      flexDirection: 'row',
      paddingBottom: theme.spacing(16),
      paddingTop: theme.spacing(16),
      textAlign: 'left',
    },
  },
  hero: {
    // paddingTop: 64,
    color: theme.palette.grey[600],
  },
  logo: {
    flexShrink: 0,
    height: 120,
    marginBottom: theme.spacing(2),
    width: 120,
    [theme.breakpoints.up('md')]: {
      height: 200,
      marginRight: theme.spacing(8),
      width: 220,
    },
  },
  social: {
    '& a': {
      color: theme.palette.background.paper,
    },
    '& span': {
      display: 'flex',
      marginRight: theme.spacing(1),
    },
    alignItems: 'center',
    boxSizing: 'content-box',
    display: 'flex',
    justifyContent: 'center',
    minHeight: 21,
    padding: theme.spacing(2, 0),
  },
  title: {
    fontWeight: theme.typography.fontWeightLight,
    letterSpacing: '.7rem',
    marginLeft: -12,
    textIndent: '.7rem',
    whiteSpace: 'nowrap',
    [theme.breakpoints.only('xs')]: {
      fontSize: 28,
    },
  }
}), { name: 'Home' })

function Home() {
  const classes = useStyles()

  return (
    <div>
      <div className={classes.hero}>
        <Container maxWidth='md' className={classes.content}>
          <img 
            className={classes.logo}
            alt='Krowdy UI' 
            src='https://s3.amazonaws.com/cdn.krowdy.com/media/images/krowdy-home.svg' />
          <div>
            <Typography
              variant='display2'
              component='h1'
              gutterBottom
              className={classes.title}
              >
              KROWDY-UI
            </Typography>
            <Typography variant='h4' style={{ fontWeight: 400 }} component='h2' color='inherit'>
              {t('strapline')}
            </Typography>
            <Button
              // component={
              //   <Link href="/getting-started/installation" naked prefetch/>
              // }
              className={classes.button}
              variant='outlined'
              color='primary'
            >
              {t('getStarted')}
            </Button>
          </div>
        </Container>
      </div>
      <div className={classes.social}>
        <GitHubButton 
          href='https://github.com/grovertb/krowdy-ui' 
          data-icon='octicon-star' 
          data-show-count='true'
          aria-label='Star grovertb/krowdy-ui on GitHub'>
          Star
        </GitHubButton>
      </div>
      <Steps />
    </div>
  )
}

export default Home