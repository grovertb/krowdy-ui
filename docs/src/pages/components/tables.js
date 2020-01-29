
import React from 'react'
import MarkdownDocs from 'components/MarkDowns/MarkdownDocs'

const req = require.context('containers/components/tables', false, /\.(md|js|tsx)$/)
const reqSource = require.context(

  '!raw-loader!containers/components/tables',
  false,
  /\.(js|tsx)$/,
)

const reqPrefix = 'containers/components/tables'

export default () => <MarkdownDocs req={req} reqPrefix={reqPrefix} reqSource={reqSource} />
