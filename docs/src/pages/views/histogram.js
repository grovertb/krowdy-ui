import React from 'react'
import MarkdownDocs from 'components/MarkDowns/MarkdownDocs'

const req = require.context('containers/views/histogram', false, /\.(md|js|tsx)$/)
const reqSource = require.context(
  '!raw-loader!containers/views/histogram',
  false,
  /\.(js|tsx)$/,
)
const reqPrefix = 'containers/views/histogram'

export default () => (
  <MarkdownDocs
    disableAd
    req={req}
    reqPrefix={reqPrefix}
    reqSource={reqSource} />
)
