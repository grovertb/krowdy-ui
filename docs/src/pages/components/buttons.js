import React from 'react'
import MarkdownDocs from 'components/MarkDowns/MarkdownDocs'

const req = require.context('containers/components/buttons', false, /\.(md|js|tsx)$/)

const reqSource = require.context(
  '!raw-loader!containers/components/buttons',
  false,
  /\.(js|tsx)$/,
)

const reqPrefix = 'containers/components/buttons'

export default function Buttons() {
  return <MarkdownDocs req={req} reqPrefix={reqPrefix} reqSource={reqSource} />
}
