import React from 'react'
import PageContext from './PageContext'
import { getContents, getHeaders } from './utils'

export default function useMarkdownDocsContents(options) {
  const { markdownLocation: markdownLocationProp, markdown } = options
  const contents = getContents(markdown)
  const headers = getHeaders(markdown)
  const { activePage } = React.useContext(PageContext)
  let markdownLocation = markdownLocationProp || activePage.pathname

  if (!markdownLocationProp) {
    const token = markdownLocation.split('/')
    token.push(token[token.length - 1])
    markdownLocation = token.join('/')

    if (headers.filename) {
      markdownLocation = headers.filename
    } else {
      markdownLocation = `/docs/src/pages${markdownLocation}.md`
    }
  }

  if (headers.components.length > 0) {
    const section = markdownLocation.split('/')[4]
    const pats = headers.components
    .map(
      component =>
        `- [&lt;${component} /&gt;](${
          section === 'lab' ? '/lab/api' : '/api'
        }/${component.toLowerCase()})`,
    )
    .join('\n')

    contents.push(`
## API

${pats}
  `)
  }

  return { contents, markdownLocation }
}
