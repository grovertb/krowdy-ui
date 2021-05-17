import React from 'react'
import MarkdownDocs from 'components/MarkDowns/MarkdownDocs'

const req = require.context('containers/views/backgroundAlert', false, /\.(md|js|tsx)$/)
const reqSource = require.context(
  '!raw-loader!containers/views/backgroundAlert',
  false,
  /\.(js|tsx)$/,
)
const reqPrefix = 'containers/views/backgroundAlert'

export default () => (
  <MarkdownDocs
    disableAd
    req={req}
    reqPrefix={reqPrefix}
    reqSource={reqSource} />
)
