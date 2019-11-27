import React from 'react'
import clsx from 'clsx'
import copy from 'clipboard-copy';
import { makeStyles } from '@krowdy-ui/styles';
import { Tooltip, IconButton, Collapse, MenuItem, Menu, useMediaQuery } from '@krowdy-ui/core'
import { fade } from '@krowdy-ui/core/styles';

import {
  Code as CodeIcon,
  GitHub as GitHubIcon,
  MoreVert as MoreVertIcon,
  Edit as EditIcon
} from '@krowdy-ui/icons'

import DemoSandboxed from './DemoSandboxed';
import MarkdownElement from './MarkdownElement'
import getJsxPreview, { CODE_VARIANTS, t, compress, addHiddenInput } from './utils';
import DemoLanguages from './DemoLanguages';
import getDemoConfig from './getDemoConfig';

function getDemoData(codeVariant, demo, githubLocation) {
  if (codeVariant === CODE_VARIANTS.TS && demo.rawTS) {
    return {
      codeVariant: CODE_VARIANTS.TS,
      githubLocation: githubLocation.replace(/\.js$/, '.tsx'),
      raw: demo.rawTS,
      Component: demo.tsx,
      sourceLanguage: 'tsx',
    };
  }
  
  return {
    codeVariant: CODE_VARIANTS.JS,
    githubLocation,
    raw: demo.raw,
    Component: demo.js,
    sourceLanguage: 'jsx',
  };
}

function getDemoName(location) {
  return location.replace(/(.+?)(\w+)\.\w+$$/, '$2');
}

const useStyles = makeStyles(theme => ({
  root: {
    marginBottom: 40,
    marginLeft: -theme.spacing(2),
    marginRight: -theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      padding: theme.spacing(0, 1),
      marginLeft: 0,
      marginRight: 0,
    },
  },
  demo: {
    position: 'relative',
    outline: 0,
    margin: 'auto',
    display: 'flex',
    justifyContent: 'center',
    borderLeftWidth: 0,
    borderRightWidth: 0,
    border: `1px solid ${fade(theme.palette.action.active, 0.12)}`,
    padding: theme.spacing(3),
    [theme.breakpoints.up('sm')]: {
      borderRadius: theme.shape.borderRadius,
      borderLeftWidth: 1,
      borderRightWidth: 1,
    },
  },
  demoBg: {
    border: 'none',
    backgroundColor: theme.palette.background.level2,
  },
  demoHiddenHeader: {
    paddingTop: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      paddingTop: theme.spacing(3),
    },
  },
  header: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'flex',
      flip: false,
      top: 0,
      right: theme.spacing(1),
      height: theme.spacing(6),
    },
    justifyContent: 'space-between',
  },
  headerButtons: {
    margin: '2px 0',
  },
  code: {
    display: 'none',
    padding: 0,
    marginBottom: theme.spacing(1),
    marginRight: 0,
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
    '& pre': {
      overflow: 'auto',
      lineHeight: 1.5,
      margin: '0px !important',
      maxHeight: 1000,
    },
  },
  tooltip: {
    zIndex: theme.zIndex.appBar - 1,
  },
  anchorLink: {
    marginTop: -64, // height of toolbar
    position: 'absolute',
  },
}), { name: 'Demo'});

export default function Demo(props) {
  const { demo, demoOptions, githubLocation } = props;

  const [codeVariant, setCodeVariant] = React.useState('JS')
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [codeOpen, setCodeOpen] = React.useState(demoOptions.defaultCodeOpen || false);
  const [demoHovered, setDemoHovered] = React.useState(false);
  const [sourceHintSeen, setSourceHintSeen] = React.useState(false);
  
  const classes = useStyles()

  const match = useMediaQuery(theme => theme.breakpoints.up('sm'));
  const demoData = getDemoData(codeVariant, demo, githubLocation);
  const demoName = getDemoName(demoData.githubLocation);
  const jsx = getJsxPreview(demoData.raw || '', demoOptions.defaultCodeOpen);

  const DemoComponent = demoData.Component;
  const gaCategory = demoOptions.demo;
  const showPreview = !demoOptions.hideHeader && jsx !== demoData.raw && jsx.split(/\n/).length <= 20;
  const showSourceHint = demoHovered && !sourceHintSeen;

  let showCodeLabel;
  if (codeOpen) {
    showCodeLabel = showPreview ? t('hideFullSource') : t('hideSource');
  } else {
    showCodeLabel = showPreview ? t('showFullSource') : t('showSource');
  }

  const _handleDemoHover = event => {
    setDemoHovered(event.type === 'mouseenter');
  }

  const _handleCloseMore = () => {
    setAnchorEl(null);
  }

  const _handleClickCopy = async () => {
    try {
      await copy(demoData.raw);
    } finally {
      _handleCloseMore();
    }
  }

  const _handleClickMore = event => {
    setAnchorEl(event.currentTarget);
  }

  const _handleClickCodeOpen = () => {
    // document.cookie = `sourceHintSeen=true;path=/;max-age=31536000`;
    setCodeOpen(open => !open);
    setSourceHintSeen(true);
  }

  const _handleCodeLanguageClick = (event, clickedCodeVariant) => {
    if (codeVariant !== clickedCodeVariant) setCodeVariant(clickedCodeVariant)
  }

  const _handleClickCodeSandbox = () => {
    const demoConfig = getDemoConfig(demoData);
    const parameters = compress({
      files: {
        'package.json': {
          content: {
            title: demoConfig.title,
            description: demoConfig.description,
            dependencies: demoConfig.dependencies,
            devDependencies: {
              'react-scripts': 'latest',
              ...demoConfig.devDependencies,
            },
            main: demoConfig.main,
            scripts: demoConfig.scripts,
          },
        },
        ...Object.keys(demoConfig.files).reduce((files, name) => {
          files[name] = { content: demoConfig.files[name] };
          return files;
        }, {}),
      },
    });

    const form = document.createElement('form');
    form.method = 'POST';
    form.target = '_blank';
    form.action = 'https://codeSandbox.io/api/v1/sandboxes/define';
    addHiddenInput(form, 'parameters', parameters);
    document.body.appendChild(form);
    form.submit();
    document.body.removeChild(form);
  }

  const _handleClickStackBlitz = () => {
    const demoConfig = getDemoConfig(demoData);
    const form = document.createElement('form');
    form.method = 'POST';
    form.target = '_blank';
    form.action = 'https://stackblitz.com/run';
    addHiddenInput(form, 'project[template]', 'javascript');
    addHiddenInput(form, 'project[title]', demoConfig.title);
    addHiddenInput(form, 'project[description]', demoConfig.description);
    addHiddenInput(form, 'project[dependencies]', JSON.stringify(demoConfig.dependencies));
    addHiddenInput(form, 'project[devDependencies]', JSON.stringify(demoConfig.devDependencies));
    Object.keys(demoConfig.files).forEach(key => {
      const value = demoConfig.files[key];
      addHiddenInput(form, `project[files][${key}]`, value);
    });
    document.body.appendChild(form);
    form.submit();
    document.body.removeChild(form);
    _handleCloseMore();
  }

  const createHandleCodeSourceLink = anchor => async () => {
    try {
      await copy(`${window.location.href.split('#')[0]}#${anchor}`);
    } finally {
      _handleCloseMore();
    }
  }

  return(
    <div className={classes.root}>
      <div
        className={clsx(classes.demo, {
          [classes.demoHiddenHeader]: demoOptions.hideHeader,
          [classes.demoBg]: demoOptions.bg,
        })}
        tabIndex={-1}
        onMouseEnter={_handleDemoHover}
        onMouseLeave={_handleDemoHover}
      >
        <DemoSandboxed
          // style={demoSandboxedStyle}
          component={DemoComponent}
          iframe={demoOptions.iframe}
          name={demoName}
        />
      </div>
      <div className={classes.anchorLink} id={`${demoName}.js`} />
      <div className={classes.anchorLink} id={`${demoName}.tsx`} />

      {demoOptions.hideHeader ? null : (
        <div className={classes.header}>
          <DemoLanguages
            demo={demo}
            codeOpen={codeOpen}
            codeVariant={codeVariant}
            gaEventCategory={gaCategory}
            onLanguageClick={_handleCodeLanguageClick}
          />
          <div className={classes.headerButtons}>
            <Tooltip
              classes={{ popper: classes.tooltip }}
              key={showSourceHint}
              open={showSourceHint && match ? true : undefined}
              PopperProps={{ disablePortal: true }}
              title={showCodeLabel}
              placement="top"
            >
              <React.Fragment>
                <IconButton
                  aria-label={showCodeLabel}
                  data-ga-event-category={gaCategory}
                  data-ga-event-action="expand"
                  onClick={_handleClickCodeOpen}
                  color={demoHovered ? 'primary' : 'default'}
                >
                  <CodeIcon fontSize="small" />
                </IconButton>
              </React.Fragment>
            </Tooltip>
            <Tooltip
              classes={{ popper: classes.tooltip }}
              title={t('viewGitHub')}
              placement="top"
            >
              <React.Fragment>
                <IconButton
                  aria-label={t('viewGitHub')}
                  data-ga-event-category={gaCategory}
                  data-ga-event-action="github"
                  href={demoData.githubLocation}
                  target="_blank"
                  rel="noopener nofollow"
                >
                  <GitHubIcon fontSize="small" />
                </IconButton>
              </React.Fragment>
            </Tooltip>
            {
              demoOptions.hideEditButton ?
                null : 
                (
                  <Tooltip
                    classes={{ popper: classes.tooltip }}
                    title={t('codesandbox')}
                    placement="top"
                  >
                    <React.Fragment>
                    <IconButton
                        aria-label={t('codesandbox')}
                        data-ga-event-category={gaCategory}
                        data-ga-event-action="codesandbox"
                        onClick={_handleClickCodeSandbox}
                      >
                        <EditIcon fontSize="small" />
                      </IconButton>
                    </React.Fragment>
                  </Tooltip>
                )
            }
            <IconButton
              onClick={_handleClickMore}
              aria-owns={anchorEl ? 'demo-menu-more' : undefined}
              aria-haspopup="true"
              aria-label={t('seeMore')}
            >
              <MoreVertIcon fontSize="small" />
            </IconButton>
            <Menu
              id="demo-menu-more"
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={_handleCloseMore}
              getContentAnchorEl={null}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
            >
              <MenuItem
                data-ga-event-category={gaCategory}
                data-ga-event-action="copy"
                onClick={_handleClickCopy}
              >
                {t('copySource')}
              </MenuItem>
              {demoOptions.hideEditButton ? null : (
                <MenuItem
                  data-ga-event-category={gaCategory}
                  data-ga-event-action="stackblitz"
                  onClick={_handleClickStackBlitz}
                >
                  {t('stackblitz')}
                </MenuItem>
              )}
              <MenuItem
                data-ga-event-category={gaCategory}
                data-ga-event-action="copy-js-source-link"
                onClick={createHandleCodeSourceLink(`${demoName}.js`)}
              >
                {t('copySourceLinkJS')}
              </MenuItem>
              <MenuItem
                data-ga-event-category={gaCategory}
                data-ga-event-action="copy-ts-source-link"
                onClick={createHandleCodeSourceLink(`${demoName}.tsx`)}
              >
                {t('copySourceLinkTS')}
              </MenuItem>
            </Menu>
          </div>
        </div>
      )}

      <Collapse 
        in={codeOpen || showPreview} 
        unmountOnExit>
        <MarkdownElement
          className={classes.code}
          text={
            `\`\`\`${demoData.sourceLanguage}\n${codeOpen ? demoData.raw : jsx}\n\`\`\``
          }
        />
      </Collapse>
    </div>
  )
}