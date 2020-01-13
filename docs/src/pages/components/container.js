import React from 'react'
import MarkdownDocs from 'components/MarkDowns/MarkdownDocs'

const req = require.context('containers/components/container', false, /\.(md|js|tsx)$/)

const reqSource = require.context(
  '!raw-loader!containers/components/container',
  false,
  /\.(js|tsx)$/,
)

const reqPrefix = 'containers/components/container'

export default function Container() {
  return <MarkdownDocs req={req} reqSource={reqSource} reqPrefix={reqPrefix} />
}
