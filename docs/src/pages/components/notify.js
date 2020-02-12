import React from 'react'
import MarkdownDocs from 'components/MarkDowns/MarkdownDocs'

const req = require.context('containers/components/notify', false, /\.(md|js|tsx)$/)

const reqSource = require.context(
  '!raw-loader!containers/components/notify',
  false,
  /\.(js|tsx)$/,
)

const reqPrefix = 'containers/components/notify'

export default function Notify() {
  return <MarkdownDocs req={req} reqPrefix={reqPrefix} reqSource={reqSource} />
}
