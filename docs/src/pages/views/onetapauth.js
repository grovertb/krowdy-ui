import React from 'react'
import MarkdownDocs from 'components/MarkDowns/MarkdownDocs'

const req = require.context('containers/views/onetapauth', false, /\.(md|js|tsx)$/)
const reqSource = require.context(
  '!raw-loader!containers/views/onetapauth',
  false,
  /\.(js|tsx)$/,
)
const reqPrefix = 'containers/views/onetapauth'

export default () => (
  <MarkdownDocs
    disableAd
    req={req}
    reqPrefix={reqPrefix}
    reqSource={reqSource} />
)
