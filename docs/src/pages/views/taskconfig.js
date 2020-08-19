import React from 'react'
import MarkdownDocs from 'components/MarkDowns/MarkdownDocs'

const req = require.context('containers/views/taskconfig', false, /\.(md|js|tsx)$/)
const reqSource = require.context(
  '!raw-loader!containers/views/taskconfig',
  false,
  /\.(js|tsx)$/,
)
const reqPrefix = 'containers/views/taskconfig'

export default () => (
  <MarkdownDocs
    disableAd
    req={req}
    reqPrefix={reqPrefix}
    reqSource={reqSource} />
)
