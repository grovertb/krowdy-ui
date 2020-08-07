import React from 'react'
import MarkdownDocs from 'components/MarkDowns/MarkdownDocs'

const req = require.context('containers/views/graphicbar', false, /\.(md|js|tsx)$/)
const reqSource = require.context(
  '!raw-loader!containers/views/graphicbar',
  false,
  /\.(js|tsx)$/,
)
const reqPrefix = 'containers/views/graphicbar'

export default () => (
  <MarkdownDocs
    disableAd
    req={req}
    reqPrefix={reqPrefix}
    reqSource={reqSource} />
)
