import React from 'react'
import MarkdownDocs from 'components/MarkDowns/MarkdownDocs'

const req = require.context('containers/components/cards', false, /\.(md|js|tsx)$/)

const reqSource = require.context(
  '!raw-loader!containers/components/cards',
  false,
  /\.(js|tsx)$/,
)

const reqPrefix = 'containers/components/cards'

export default function Cards() {
  return <MarkdownDocs req={req} reqPrefix={reqPrefix} reqSource={reqSource} />
}
