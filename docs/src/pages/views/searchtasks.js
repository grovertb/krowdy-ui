import React from 'react'
import MarkdownDocs from 'components/MarkDowns/MarkdownDocs'

const req = require.context('containers/views/searchtasks', false, /\.(md|js|tsx)$/)
const reqSource = require.context(
  '!raw-loader!containers/views/searchtasks',
  false,
  /\.(js|tsx)$/,
)
const reqPrefix = 'containers/views/searchtasks'

function Page() {
  return <MarkdownDocs
    disableAd req={req} reqPrefix={reqPrefix}
    reqSource={reqSource} />
}

export default Page
