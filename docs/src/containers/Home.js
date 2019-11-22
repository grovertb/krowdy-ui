import React from 'react'
import GitHubButton from 'react-github-btn'
import { makeStyles, Typography, Container, Button } from '@krowdy-ui/core'
import { t } from 'components/MarkDowns/utils'
import Steps from 'components/Home/Steps'

const useStyles = makeStyles(theme => ({
  content: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(8),
    [theme.breakpoints.up('md')]: {
      paddingTop: theme.spacing(20),
      paddingBottom: theme.spacing(20),
      flexDirection: 'row',
      alignItems: 'flex-start',
      textAlign: 'left',
    },
  },
  logo: {
    flexShrink: 0,
    width: 120,
    height: 120,
    marginBottom: theme.spacing(2),
    [theme.breakpoints.up('md')]: {
      marginRight: theme.spacing(8),
      width: 220,
      height: 200,
    },
  },
  title: {
    marginLeft: -12,
    whiteSpace: 'nowrap',
    letterSpacing: '.7rem',
    textIndent: '.7rem',
    fontWeight: theme.typography.fontWeightLight,
    [theme.breakpoints.only('xs')]: {
      fontSize: 28,
    },
  },
  hero: {
    // paddingTop: 64,
    color: theme.palette.grey[600],
  },
  button: {
    marginTop: theme.spacing(4),
  },
  social: {
    padding: theme.spacing(2, 0),
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: 21,
    boxSizing: 'content-box',
    '& span': {
      display: 'flex',
      marginRight: theme.spacing(1),
    },
    '& a': {
      color: theme.palette.background.paper,
    },
  }
}))

function Home() {
  const classes = useStyles()

  return (
    <div>
      <div className={classes.hero}>
        <Container maxWidth="md" className={classes.content}>
          <img 
            className={classes.logo}
            alt='Krowdy UI' 
            src='https://s3.amazonaws.com/cdn.krowdy.com/media/images/krowdy-home.svg' />
          <div>
            <Typography
              variant="h3"
              component="h1"
              color="inherit"
              gutterBottom
              className={classes.title}
              >
              KROWDY-UI
            </Typography>
            <Typography variant="h5" component="h2" color="inherit">
              {t('strapline')}
            </Typography>
            <Button
              // component={
              //   <Link href="/getting-started/installation" naked prefetch/>
              // }
              className={classes.button}
              variant="outlined"
              color="primary"
            >
              {t('getStarted')}
            </Button>
          </div>
        </Container>
      </div>
      <div className={classes.social}>
        <GitHubButton 
          href="https://github.com/grovertb/krowdy-ui" 
          data-icon="octicon-star" 
          data-show-count="true" 
          aria-label="Star grovertb/krowdy-ui on GitHub">
          Star
        </GitHubButton>
      </div>
      <Steps />
    </div>
  )
}

export default Home