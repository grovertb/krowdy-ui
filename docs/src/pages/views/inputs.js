import React from 'react'
import MarkdownDocs from 'components/MarkDowns/MarkdownDocs'

const req = require.context('containers/views/inputs', false, /\.(md|js|tsx)$/)
const reqSource = require.context(
  '!raw-loader!containers/views/inputs',
  false,
  /\.(js|tsx)$/,
)
const reqPrefix = 'containers/views/inputs'

function Page() {
  return <MarkdownDocs
    disableAd req={req} reqPrefix={reqPrefix}
    reqSource={reqSource} />
}

export default Page
