import React from 'react'
import MarkdownDocs from 'components/MarkDowns/MarkdownDocs'

const req = require.context('containers/views/filterstree', false, /\.(md|js|tsx)$/)
const reqSource = require.context(
  '!raw-loader!containers/views/filterstree',
  false,
  /\.(js|tsx)$/,
)
const reqPrefix = 'containers/views/filterstree'

export default () => (
  <MarkdownDocs
    disableAd
    req={req}
    reqPrefix={reqPrefix}
    reqSource={reqSource} />
)
