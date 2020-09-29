import React from 'react'
import MarkdownDocs from 'components/MarkDowns/MarkdownDocs'

const req = require.context('containers/views/profile', false, /\.(md|js|tsx)$/)
const reqSource = require.context(
  '!raw-loader!containers/views/profile',
  false,
  /\.(js|tsx)$/,
)
const reqPrefix = 'containers/views/profile'

export default () => (
  <MarkdownDocs
    disableAd
    req={req}
    reqPrefix={reqPrefix}
    reqSource={reqSource} />
)
