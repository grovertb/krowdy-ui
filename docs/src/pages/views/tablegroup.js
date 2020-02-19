import React from 'react'
import MarkdownDocs from 'components/MarkDowns/MarkdownDocs'

const req = require.context('containers/views/tablegroup', false, /\.(md|js|tsx)$/)
const reqSource = require.context(
  '!raw-loader!containers/views/tablegroup',
  false,
  /\.(js|tsx)$/,
)
const reqPrefix = 'containers/views/tablegroup'

export default () => (
  <MarkdownDocs
    disableAd
    req={req}
    reqPrefix={reqPrefix}
    reqSource={reqSource} />
)
