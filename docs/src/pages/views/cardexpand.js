import React from 'react'
import MarkdownDocs from 'components/MarkDowns/MarkdownDocs'

const req = require.context('containers/views/cardexpand', false, /\.(md|js|tsx)$/)
const reqSource = require.context(
  '!raw-loader!containers/views/cardexpand',
  false,
  /\.(js|tsx)$/,
)
const reqPrefix = 'containers/views/cardexpand'

function Page() {
  return <MarkdownDocs
    disableAd req={req} reqPrefix={reqPrefix}
    reqSource={reqSource} />
}

export default Page
