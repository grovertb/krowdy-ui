import React from 'react'
import MarkdownDocs from 'components/MarkDowns/MarkdownDocs'

const req = require.context('containers/views/switchbutton', false, /\.(md|js|tsx)$/)
const reqSource = require.context(
  '!raw-loader!containers/views/switchbutton',
  false,
  /\.(js|tsx)$/,
)
const reqPrefix = 'containers/views/switchbutton'

export default () => (
  <MarkdownDocs
    disableAd
    req={req}
    reqPrefix={reqPrefix}
    reqSource={reqSource} />
)
