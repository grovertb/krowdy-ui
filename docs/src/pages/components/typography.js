import React from 'react'
import MarkdownDocs from 'components/MarkDowns/MarkdownDocs';

const req = require.context('containers/components/typography', false, /\.(md|js|tsx)$/);

const reqSource = require.context(
  '!raw-loader!containers/components/typography',
  false,
  /\.(js|tsx)$/,
);

const reqPrefix = 'containers/components/typography';

export default function Typography() {
  return <MarkdownDocs req={req} reqSource={reqSource} reqPrefix={reqPrefix} />;
}
