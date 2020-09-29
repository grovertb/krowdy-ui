import React from 'react'
import MarkdownDocs from 'components/MarkDowns/MarkdownDocs'

const req = require.context('containers/views/userpoint', false, /\.(md|js|tsx)$/)
const reqSource = require.context(
  '!raw-loader!containers/views/userpoint',
  false,
  /\.(js|tsx)$/,
)
const reqPrefix = 'containers/views/userpoint'

export default () => (
  <MarkdownDocs
    disableAd
    req={req}
    reqPrefix={reqPrefix}
    reqSource={reqSource} />
)
