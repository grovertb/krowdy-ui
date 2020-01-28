import React from 'react'
import MarkdownDocs from 'components/MarkDowns/MarkdownDocs'

const req = require.context('containers/views/modalkrowder', false, /\.(md|js|tsx)$/)
const reqSource = require.context(
  '!raw-loader!containers/views/modalkrowder',
  false,
  /\.(js|tsx)$/,
)
const reqPrefix = 'containers/views/modalkrowder'

export default () => (
  <MarkdownDocs
    disableAd
    req={req}
    reqPrefix={reqPrefix}
    reqSource={reqSource} />
)
