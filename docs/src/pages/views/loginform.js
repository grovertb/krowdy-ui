import React from 'react'
import MarkdownDocs from 'components/MarkDowns/MarkdownDocs'

const req = require.context('containers/views/loginform', false, /\.(md|js|tsx)$/)
const reqSource = require.context(
  '!raw-loader!containers/views/loginform',
  false,
  /\.(js|tsx)$/,
)
const reqPrefix = 'containers/views/loginform'

export default () => (
  <MarkdownDocs
    disableAd
    req={req}
    reqPrefix={reqPrefix}
    reqSource={reqSource} />
)
