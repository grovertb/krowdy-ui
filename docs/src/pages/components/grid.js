import React from 'react'
import MarkdownDocs from 'components/MarkDowns/MarkdownDocs'

const req = require.context('containers/components/grid', false, /\.(md|js|tsx)$/)

const reqSource = require.context(
  '!raw-loader!containers/components/grid',
  false,
  /\.(js|tsx)$/,
)

const reqPrefix = 'containers/components/grid'

export default function Grid() {
  return <MarkdownDocs req={req} reqSource={reqSource} reqPrefix={reqPrefix} />
}
