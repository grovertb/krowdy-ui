import React from 'react'
import MarkdownDocs from 'components/MarkDowns/MarkdownDocs'

const req = require.context('containers/components/box', false, /\.(md|js|tsx)$/)

const reqSource = require.context(
  '!raw-loader!containers/components/box',
  false,
  /\.(js|tsx)$/,
)

const reqPrefix = 'containers/components/box'

export default function Box() {
  return <MarkdownDocs req={req} reqPrefix={reqPrefix} reqSource={reqSource} />
}
