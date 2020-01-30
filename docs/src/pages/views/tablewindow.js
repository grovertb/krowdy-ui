import React from 'react'
import MarkdownDocs from 'components/MarkDowns/MarkdownDocs'

const req = require.context('containers/views/tablewindow', false, /\.(md|js|tsx)$/)
const reqSource = require.context(
  '!raw-loader!containers/views/tablewindow',
  false,
  /\.(js|tsx)$/,
)
const reqPrefix = 'containers/views/tablewindow'

export default () => (
  <MarkdownDocs
    disableAd
    req={req}
    reqPrefix={reqPrefix}
    reqSource={reqSource} />
)
