import React from 'react'
import MarkdownDocs from 'components/MarkDowns/MarkdownDocs'

const req = require.context('containers/views/referent', false, /\.(md|js|tsx)$/)
const reqSource = require.context(
  '!raw-loader!containers/views/referent',
  false,
  /\.(js|tsx)$/,
)
const reqPrefix = 'containers/views/referent'

export default () => (
  <MarkdownDocs
    disableAd
    req={req}
    reqPrefix={reqPrefix}
    reqSource={reqSource} />
)
