import React from 'react'
import MarkdownDocs from 'components/MarkDowns/MarkdownDocs'

const req = require.context('containers/views/referentinput', false, /\.(md|js|tsx)$/)
const reqSource = require.context(
  '!raw-loader!containers/views/referentinput',
  false,
  /\.(js|tsx)$/,
)
const reqPrefix = 'containers/views/referentinput'

export default () => (
  <MarkdownDocs
    disableAd
    req={req}
    reqPrefix={reqPrefix}
    reqSource={reqSource} />
)
