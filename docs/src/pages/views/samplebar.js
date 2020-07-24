import React from 'react'
import MarkdownDocs from 'components/MarkDowns/MarkdownDocs'

const req = require.context('containers/views/samplebar', false, /\.(md|js|tsx)$/)
const reqSource = require.context(
  '!raw-loader!containers/views/samplebar',
  false,
  /\.(js|tsx)$/,
)
const reqPrefix = 'containers/views/samplebar'

export default () => (
  <MarkdownDocs
    disableAd
    req={req}
    reqPrefix={reqPrefix}
    reqSource={reqSource} />
)
