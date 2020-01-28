import React from 'react'
import MarkdownDocs from 'components/MarkDowns/MarkdownDocs'

const req = require.context('containers/views/carduser', false, /\.(md|js|tsx)$/)
const reqSource = require.context(
  '!raw-loader!containers/views/carduser',
  false,
  /\.(js|tsx)$/,
)
const reqPrefix = 'containers/views/carduser'

export default () => (
  <MarkdownDocs
    disableAd
    req={req}
    reqPrefix={reqPrefix}
    reqSource={reqSource} />
)
