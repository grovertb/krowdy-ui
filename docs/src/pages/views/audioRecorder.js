import React from 'react'
import MarkdownDocs from 'components/MarkDowns/MarkdownDocs'

const req = require.context('containers/views/audioRecorder', false, /\.(md|js|tsx)$/)
const reqSource = require.context(
  '!raw-loader!containers/views/audioRecorder',
  false,
  /\.(js|tsx)$/,
)
const reqPrefix = 'containers/views/audioRecorder'

export default () => (
  <MarkdownDocs
    disableAd
    req={req}
    reqPrefix={reqPrefix}
    reqSource={reqSource} />
)
