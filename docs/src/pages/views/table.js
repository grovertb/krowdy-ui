import React from 'react'
import MarkdownDocs from 'components/MarkDowns/MarkdownDocs'

const req = require.context('containers/views/table', false, /\.(md|js|tsx)$/)
const reqSource = require.context(
  '!raw-loader!containers/views/table',
  false,
  /\.(js|tsx)$/,
)
const reqPrefix = 'containers/views/table'

export default () => (
  <MarkdownDocs
    disableAd
    req={req}
    reqPrefix={reqPrefix}
    reqSource={reqSource} />
)
