import React from 'react'
import MarkdownDocs from 'components/MarkDowns/MarkdownDocs'

const req = require.context('containers/views/topappbar', false, /\.(md|js|tsx)$/)
const reqSource = require.context(
  '!raw-loader!containers/views/topappbar',
  false,
  /\.(js|tsx)$/,
)
const reqPrefix = 'containers/views/topappbar'

export default () => (
  <MarkdownDocs
    disableAd
    req={req}
    reqPrefix={reqPrefix}
    reqSource={reqSource} />
)
