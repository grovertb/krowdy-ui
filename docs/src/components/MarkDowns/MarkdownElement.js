import React from 'react'
import marked from 'marked'
import { makeStyles } from '@krowdy-ui/styles'
import clsx from 'clsx'
import prism from './prism'
import { textToHash } from './utils'

marked.Lexer.prototype.lex = function lex(src) {
  src = src
    .replace(/\r\n|\r/g, '\n')
    .replace(/\t/g, '    ')
    .replace(/\u2424/g, '\n')

  return this.token(src, true)
}

const renderer = new marked.Renderer()

const externs = [
  'https://material.io/',
  'https://getbootstrap.com/',
  'https://www.amazon.com/',
  'https://materialdesignicons.com/',
  'https://www.w3.org/',
  'https://devexpress.github.io/'
]

renderer.heading = (text, level) => {
  // Small title. No need for an anchor.
  // It's reducing the risk of duplicated id and it's fewer elements in the DOM.
  if(level >= 4)
    return `<h${level}>${text}</h${level}>`

  // eslint-disable-next-line no-underscore-dangle
  const escapedText = textToHash(text, global.__MARKED_UNIQUE__)

  return [
    `<h${level}>`,
    `<a class="anchor-link" id="${escapedText}"></a>${text}`,
    typeof window !== 'undefined' ?
      `<a class="anchor-link-style" aria-label="anchor" href="#${escapedText}">` +
        '<svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"/></svg>' +
        '</a>' :
      null,
    `</h${level}>`
  ].join('')
}

renderer.link = (href, title, text) => {
  let more = ''

  if(externs.some(domain => href.indexOf(domain) !== -1))
    more = ' target="_blank" rel="noopener nofollow"'

  // const userLanguage = global.__MARKED_USER_LANGUAGE__;
  let finalHref = href

  // Grover ->
  // if (userLanguage !== 'en' && finalHref.indexOf('/') === 0 && finalHref !== '/size-snapshot') {
  //   finalHref = `/${userLanguage}${finalHref}`;
  // }

  return `<a href="${finalHref}"${more}>${text}</a>`
}

const markedOptions = {
  breaks: false,
  gfm   : true,
  highlight(code, language) {
    let prismLanguage
    switch (language) {
      case 'ts':
        prismLanguage = prism.languages.tsx
        break

      case 'js':
      case 'sh':
        prismLanguage = prism.languages.jsx
        break

      case 'diff':
        prismLanguage = { ...prism.languages.diff }
        // original `/^[-<].*$/m` matches lines starting with `<` which matches
        // <SomeComponent />
        // we will only use `-` as the deleted marker
        prismLanguage.deleted = /^[-].*$/m
        break

      default:
        prismLanguage = prism.languages[language]
        break
    }

    if(!prismLanguage)
      if(language) {
        throw new Error(`unsupported language: "${language}", "${code}"`)
      } else {
        prismLanguage = prism.languages.jsx
      }

    return prism.highlight(code, prismLanguage)
  },
  pedantic   : false,
  renderer,
  sanitize   : false,
  smartLists : true,
  smartypants: false,
  tables     : true
}

const useStyles = makeStyles(theme => ({
  root: {
    '& .anchor-link': {
      marginTop: -96, // Offset for the anchor.
      position : 'absolute'
    },
    '& .description': {
      ...theme.typography.h5,
      margin: '0 0 40px'
    },
    '& .token.operator': {
      background: 'transparent'
    },
    '& a, & a code': {
      // Style taken from the Link component
      '&:hover': {
        textDecoration: 'underline'
      },
      color         : theme.palette.primary.main,
      textDecoration: 'none'
    },
    '& blockquote': {
      '& p': {
        marginTop: '16px'
      },
      backgroundColor: 'rgba(255,229,100,0.2)',
      borderLeft     : '5px solid #ffe564',
      margin         : '24px 0',
      padding        : '4px 24px'
    },
    '& code': {
      WebkitFontSmoothing: 'subpixel-antialiased',
      backgroundColor    :
        theme.palette.type === 'dark' ? 'rgba(255,229,100,0.2)' : 'rgba(255,229,100,0.1)',
      borderRadius: 2,
      color       : theme.palette.text.primary,
      display     : 'inline-block',
      fontFamily  : 'Consolas, "Liberation Mono", Menlo, Courier, monospace',
      fontSize    : 14,
      padding     : '2px 6px'
    },
    '& code[class*="language-"]': {
      backgroundColor: '#333',
      color          : '#fff'
    },
    '& h1': {
      ...theme.typography.h3,
      fontSize: 40,
      margin  : '16px 0'
    },
    '& h1, & h2, & h3, & h4': {
      '& .anchor-link-style': {
        // To prevent the link to get the focus.
        display: 'none'
      },
      '& code': {
        fontSize  : 'inherit',
        lineHeight: 'inherit',
        // Remove scroll on small screens.
        wordBreak : 'break-all'
      },
      '&:hover .anchor-link-style': {
        '& svg': {
          fill  : 'currentColor',
          height: '0.7em',
          width : '0.7em'
        },
        '&:hover': {
          color: theme.palette.text.primary
        },
        color  : theme.palette.text.secondary,
        display: 'inline-block',
        padding: '0 8px'
      }
    },
    '& h2': {
      ...theme.typography.h4,
      fontSize: 30,
      margin  : '40px 0 16px'
    },
    '& h3': {
      ...theme.typography.h5,
      margin: '40px 0 16px'
    },
    '& h4': {
      ...theme.typography.h6,
      margin: '32px 0 16px'
    },
    '& h5': {
      ...theme.typography.subtitle2,
      margin: '32px 0 16px'
    },
    '& hr': {
      backgroundColor: theme.palette.divider,
      border         : 'none',
      flexShrink     : 0,
      height         : 1,
      margin         : theme.spacing(6, 0)
    },
    '& img': {
      maxWidth: '100%'
    },
    '& p code, & ul code, & pre code': {
      fontSize: 14
    },
    '& p, & ul, & ol': {
      lineHeight  : 1.6,
      marginBottom: '16px',
      marginTop   : 0
    },
    '& pre': {
      WebkitOverflowScrolling: 'touch',
      backgroundColor        : '#333',
      borderRadius           : theme.shape.borderRadius,
      direction              : 'ltr',
      margin                 : '24px 0',
      overflow               : 'auto',
      padding                : '12px 18px' // iOS momentum scrolling.
    },
    '& table': {
      '& .prop-default': {
        borderBottom: `1px dotted ${theme.palette.text.hint}`,
        fontFamily  : 'Consolas, "Liberation Mono", Menlo, monospace',
        fontSize    : 13
      },
      '& .prop-name': {
        fontFamily: 'Consolas, "Liberation Mono", Menlo, monospace',
        fontSize  : 13
      },
      '& .prop-type': {
        color     : theme.palette.type === 'light' ? '#932981' : '#ffb6ec',
        fontFamily: 'Consolas, "Liberation Mono", Menlo, monospace',
        fontSize  : 13
      }, // iOS momentum scrolling.
      '& .required': {
        color: theme.palette.type === 'light' ? '#006500' : '#a5ffa5'
      },
      WebkitOverflowScrolling: 'touch',
      borderCollapse         : 'collapse',
      borderSpacing          : 0,
      marginBottom           : '16px',
      overflow               : 'hidden',
      overflowX              : 'auto',
      width                  : '100%'
    },
    '& td': {
      ...theme.typography.body2,
      borderBottom: `1px solid ${theme.palette.divider}`,
      color       : theme.palette.text.primary,
      padding     : 16
    },
    '& td code': {
      fontSize  : 13,
      lineHeight: 1.6
    },
    '& th': {
      borderBottom: `1px solid ${theme.palette.divider}`,
      color       : theme.palette.text.primary,
      fontSize    : 14,
      fontWeight  : theme.typography.fontWeightMedium,
      lineHeight  : theme.typography.pxToRem(24),
      padding     : 16,
      whiteSpace  : 'pre'
    },
    '& ul': {
      paddingLeft: 30
    },
    color     : theme.palette.text.primary,
    fontFamily: theme.typography.fontFamily,
    fontSize  : 16
  }
}), { name: 'MarkdownElement' })

export default function MarkdownElement(props) {
  const { text, className, ...other } = props
  const classes = useStyles()

  return (
    <div
      className={clsx(classes.root, 'markdown-body', className)}
      dangerouslySetInnerHTML={{ __html: marked(text, markedOptions) }}
      {...other} />
  )
}
