import React from 'react'
import MarkdownDocs from 'components/MarkDowns/MarkdownDocs'

const req = require.context('containers/views/superfilters', false, /\.(md|js|tsx)$/)
const reqSource = require.context(
  '!raw-loader!containers/views/superfilters',
  false,
  /\.(js|tsx)$/,
)
const reqPrefix = 'containers/views/superfilters'

export default () => (
  <MarkdownDocs
    disableAd
    req={req}
    reqPrefix={reqPrefix}
    reqSource={reqSource} />
)
