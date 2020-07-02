import React from 'react'
import MarkdownDocs from 'components/MarkDowns/MarkdownDocs'

const req = require.context('containers/views/tableInfinity', false, /\.(md|js|tsx)$/)
const reqSource = require.context(
  '!raw-loader!containers/views/tableInfinity',
  false,
  /\.(js|tsx)$/,
)
const reqPrefix = 'containers/views/tableInfinity'

export default () => (
  <MarkdownDocs
    disableAd
    req={req}
    reqPrefix={reqPrefix}
    reqSource={reqSource} />
)
