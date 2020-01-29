import React from 'react'
import MarkdownDocs from 'components/MarkDowns/MarkdownDocs'

const req = require.context('containers/views/cardexception', false, /\.(md|js|tsx)$/)
const reqSource = require.context(
  '!raw-loader!containers/views/cardexception',
  false,
  /\.(js|tsx)$/,
)
const reqPrefix = 'containers/views/cardexception'

export default () => (
  <MarkdownDocs
    disableAd
    req={req}
    reqPrefix={reqPrefix}
    reqSource={reqSource} />
)
