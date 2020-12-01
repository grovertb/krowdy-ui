import React from 'react'
import MarkdownDocs from 'components/MarkDowns/MarkdownDocs'

const req = require.context('containers/views/selectinfo', false, /\.(md|js|tsx)$/)
const reqSource = require.context(
  '!raw-loader!containers/views/selectinfo',
  false,
  /\.(js|tsx)$/,
)
const reqPrefix = 'containers/views/selectinfo'

export default () => (
  <MarkdownDocs
    disableAd
    req={req}
    reqPrefix={reqPrefix}
    reqSource={reqSource} />
)
