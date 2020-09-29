import React from 'react'
import MarkdownDocs from 'components/MarkDowns/MarkdownDocs'

const req = require.context('containers/components/dots', false, /\.(md|js|tsx)$/)

const reqSource = require.context(
  '!raw-loader!containers/components/dots',
  false,
  /\.(js|tsx)$/,
)

const reqPrefix = 'containers/components/dots'

export default function Container() {
  return <MarkdownDocs req={req} reqPrefix={reqPrefix} reqSource={reqSource} />
}
