import React from 'react'
import MarkdownDocs from 'components/MarkDowns/MarkdownDocs'

const req = require.context('containers/views/modalkrowder', false, /\.(md|js|tsx)$/)
const reqSource = require.context(
  '!raw-loader!containers/views/modalkrowder',
  false,
  /\.(js|tsx)$/,
)
const reqPrefix = 'containers/views/modalkrowder'

function Page() {
  return <MarkdownDocs disableAd req={req} reqSource={reqSource} reqPrefix={reqPrefix} />
}

export default Page