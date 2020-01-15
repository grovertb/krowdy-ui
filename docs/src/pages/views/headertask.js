import React from 'react'
import MarkdownDocs from 'components/MarkDowns/MarkdownDocs'

const req = require.context('containers/views/headertask', false, /\.(md|js|tsx)$/)
const reqSource = require.context(
  '!raw-loader!containers/views/headertask',
  false,
  /\.(js|tsx)$/,
)
const reqPrefix = 'containers/views/headertask'

function Page() {
  return <MarkdownDocs disableAd req={req} reqSource={reqSource} reqPrefix={reqPrefix} />
}

export default Page