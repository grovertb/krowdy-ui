import React from 'react'
import MarkdownDocs from 'components/MarkDowns/MarkdownDocs'

const req = require.context('containers/components/tabs', false, /\.(md|js|tsx)$/)

const reqSource = require.context(
  '!raw-loader!containers/components/tabs',
  false,
  /\.(js|tsx)$/,
)

const reqPrefix = 'containers/components/tabs'

export default function Tabs() {
  return <MarkdownDocs req={req} reqPrefix={reqPrefix} reqSource={reqSource} />
}
