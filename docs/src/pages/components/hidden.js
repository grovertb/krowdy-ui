import React from 'react'
import MarkdownDocs from 'components/MarkDowns/MarkdownDocs'

const req = require.context('containers/components/hidden', false, /\.(md|js|tsx)$/)

const reqSource = require.context(
  '!raw-loader!containers/components/hidden',
  false,
  /\.(js|tsx)$/,
)

const reqPrefix = 'containers/components/hidden'

export default function Hidden() {
  return <MarkdownDocs req={req} reqPrefix={reqPrefix} reqSource={reqSource} />
}
