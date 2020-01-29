import React from 'react'
import MarkdownDocs from 'components/MarkDowns/MarkdownDocs'

const req = require.context('containers/views/search', false, /\.(md|js|tsx)$/)
const reqSource = require.context(
  '!raw-loader!containers/views/search',
  false,
  /\.(js|tsx)$/,
)
const reqPrefix = 'containers/views/search'

export default () => (
  <MarkdownDocs
    disableAd
    req={req}
    reqPrefix={reqPrefix}
    reqSource={reqSource} />
)
