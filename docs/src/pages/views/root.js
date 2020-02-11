import React from 'react'
import MarkdownDocs from 'components/MarkDowns/MarkdownDocs'

const req = require.context('containers/views/root', false, /\.(md|js|tsx)$/)
const reqSource = require.context(
  '!raw-loader!containers/views/root',
  false,
  /\.(js|tsx)$/,
)
const reqPrefix = 'containers/views/root'

export default () => (
  <MarkdownDocs
    disableAd
    req={req}
    reqPrefix={reqPrefix}
    reqSource={reqSource} />
)
