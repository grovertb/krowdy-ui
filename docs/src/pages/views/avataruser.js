import React from 'react'
import MarkdownDocs from 'components/MarkDowns/MarkdownDocs'

const req = require.context('containers/views/avataruser', false, /\.(md|js|tsx)$/)
const reqSource = require.context(
  '!raw-loader!containers/views/avataruser',
  false,
  /\.(js|tsx)$/,
)
const reqPrefix = 'containers/views/avataruser'

export default () => (
  <MarkdownDocs
    disableAd
    req={req}
    reqPrefix={reqPrefix}
    reqSource={reqSource} />
)
