import React from 'react'
import MarkdownDocs from 'components/MarkDowns/MarkdownDocs'

const req = require.context('containers/views/radioLabelGroup', false, /\.(md|js|tsx)$/)
const reqSource = require.context(
  '!raw-loader!containers/views/radioLabelGroup',
  false,
  /\.(js|tsx)$/,
)
const reqPrefix = 'containers/views/radioLabelGroup'

export default () => (
  <MarkdownDocs
    disableAd
    req={req}
    reqPrefix={reqPrefix}
    reqSource={reqSource} />
)
