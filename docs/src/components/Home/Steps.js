import React from 'react'
import clsx from 'clsx'
import { Grid, Typography, Link } from '@krowdy-ui/core'
import { makeStyles } from '@krowdy-ui/styles'
import BuildIcon from '@material-ui/icons/Build'
import { t } from '../MarkDowns/utils'
import { FileDownload as FileDownloadIcon } from '../Icons'
import MarkdownElement from '../MarkDowns/MarkdownElement'

const useStyles = makeStyles(theme => ({
  divider: {
    marginBottom: theme.spacing(2),
    marginTop   : theme.spacing(4)
  },
  img: {
    height  : 'auto',
    maxWidth: 500,
    width   : '100%'
  },
  leftStep: {
    borderBottomWidth           : 0,
    [theme.breakpoints.up('md')]: {
      borderBottomWidth: 12,
      borderRightWidth : 0
    }
  },
  link: {
    display  : 'block',
    marginTop: theme.spacing(1)
  },
  markdownElement: {
    '& pre, & pre[class*="language-"]': {
      margin : theme.spacing(1, 0),
      padding: theme.spacing(1, 0)
    },
    '& pre, & pre[class*="language-"], & code': {
      // backgroundColor: 'transparent',
    },
    maxWidth: `calc(100vw - ${(theme.spacing(5) + 1) * 2}px)`
  },
  rightStep: {
    borderTopWidth              : 0,
    [theme.breakpoints.up('md')]: {
      borderLeftWidth: 0,
      borderTopWidth : 12
    }
  },
  step: {
    backgroundColor             : theme.palette.background.level2,
    border                      : `12px solid ${theme.palette.grey[50]}`,
    borderLeftWidth             : 0,
    borderRightWidth            : 0,
    padding                     : theme.spacing(3, 2),
    [theme.breakpoints.up('sm')]: {
      padding: theme.spacing(5, 4)
    },
    [theme.breakpoints.up('md')]: {
      borderLeftWidth : 12,
      borderRightWidth: 12
    }
  },
  stepBody: {
    minHeight: 290
  },
  stepIcon: {
    color      : theme.palette.primary.main,
    fontSize   : 30,
    marginRight: theme.spacing(2)
  },
  stepTitle: {
    alignItems  : 'center',
    display     : 'flex',
    marginBottom: theme.spacing(3)
  }
}), { name: 'Steps' })

export default function Steps() {
  const classes = useStyles()

  return (
    <Grid container>
      <Grid
        className={clsx(classes.step, classes.leftStep)} item md={6}
        xs={12}>
        <div className={classes.stepTitle}>
          <FileDownloadIcon className={classes.stepIcon} />
          <Typography component='h3' variant='h6'>
            {t('installation')}
          </Typography>
        </div>
        <div className={classes.stepBody}>
          <Typography component='div' gutterBottom variant='subtitle1'>
            {t('installDescr')}
          </Typography>
          <MarkdownElement
            className={classes.markdownElement}
            text={`
  \`\`\`sh
  $ npm install @krowdy-ui/core
  \`\`\`
                `} />
          <Link
            color='inherit'
            gutterBottom
            // href="https://github.com/grovertb/krowdy-ui/tree/master/examples/cdn"
            href='https://github.com/grovertb/krowdy-ui'
            target='_blank'
            variant='subtitle1'>
            {t('cdn')}
          </Link>
          <Typography component='div' gutterBottom variant='subtitle1'>
            {t('loadFont')}
          </Typography>
          <MarkdownElement
            className={classes.markdownElement}
            text={`
  \`\`\`html
  <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
  \`\`\`
                `} />
        </div>
        {/* <Divider className={classes.divider} /> */}
        {/* <Button component={InstallationLink}>{t('installButton')}</Button> */}
      </Grid>
      <Grid
        className={classes.step} item md={6}
        xs={12}>
        <div className={classes.stepTitle}>
          <BuildIcon className={classes.stepIcon} />
          <Typography component='h3' variant='h6'>
            {t('usage')}
          </Typography>
        </div>
        <div className={classes.stepBody}>
          <Typography component='div' gutterBottom variant='subtitle1'>
            {t('usageDescr')}
          </Typography>
          <MarkdownElement
            className={classes.markdownElement}
            text={`
  \`\`\`jsx
  import React from 'react';
  import { ThemeProvider } from '@krowdy-ui/styles';
  import { createTheme, krowdyTheme, Button } from '@krowdy-ui/core';

  const App = () => (
    <ThemeProvider theme={createTheme(krowdyTheme)}>
      <Button variant="contained" color="krowdy">
        Hello World
      </Button>
    </ThemeProvider>
  );
  \`\`\`
                `} />
        </div>
        {/* <Divider className={classes.divider} />
        <Button component={UsageLink}>{t('usageButton')}</Button> */}
      </Grid>
      {/* <Grid item xs={12} md={4} className={clsx(classes.step, classes.rightStep)}>
        <div className={classes.stepTitle}>
          <WhatshotIcon className={classes.stepIcon} />
          <Typography variant="h6" component="h3">
            {t('themes')}
          </Typography>
        </div>
        <div className={classes.stepBody}>
          <Typography variant="subtitle1" component="div" gutterBottom>
            {t('themesDescr')}
          </Typography>
          <Link
            href="https://themes.material-ui.com/"
            data-ga-event-category="premium-themes"
            data-ga-event-action="click"
            data-ga-event-label="home-image"
            className={classes.link}
          >
            <NoSsr>
              <img
                className={classes.img}
                alt="themes"
                src={`/static/images/themes-${theme.palette.type}.jpg`}
                loading="eager"
                width={500}
                height={307}
              />
            </NoSsr>
          </Link>
        </div>
        <Divider className={classes.divider} />
        <Button component={PremiumThemesLink}>{t('themesButton')}</Button>
      </Grid> */}
    </Grid>
  )
}
