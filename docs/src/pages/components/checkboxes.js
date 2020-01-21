import React from 'react'
import MarkdownDocs from 'components/MarkDowns/MarkdownDocs'

const req = require.context('containers/components/checkboxes', false, /\.(md|js|tsx)$/)

const reqSource = require.context(
  '!raw-loader!containers/components/checkboxes',
  false,
  /\.(js|tsx)$/,
)

const reqPrefix = 'containers/components/checkboxes'

export default function Checkboxes() {
  return <MarkdownDocs req={req} reqPrefix={reqPrefix} reqSource={reqSource} />
}
