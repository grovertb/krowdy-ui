import React from 'react'
import MarkdownDocs from 'components/MarkDowns/MarkdownDocs'

const req = require.context('containers/views/profileCandidate', false, /\.(md|js|tsx)$/)
const reqSource = require.context(
  '!raw-loader!containers/views/profileCandidate',
  false,
  /\.(js|tsx)$/,
)
const reqPrefix = 'containers/views/profileCandidate'

export default () => (
  <MarkdownDocs
    disableAd
    req={req}
    reqPrefix={reqPrefix}
    reqSource={reqSource} />
)
