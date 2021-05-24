import React from 'react'
import MarkdownDocs from 'components/MarkDowns/MarkdownDocs'

const req = require.context('containers/components/hideonscroll', false, /\.(md|js|tsx)$/)

const reqSource = require.context(
  '!raw-loader!containers/components/hideonscroll',
  false,
  /\.(js|tsx)$/,
)

const reqPrefix = 'containers/components/hideonscroll'

export default function Container() {
  return <MarkdownDocs req={req} reqPrefix={reqPrefix} reqSource={reqSource} />
}
