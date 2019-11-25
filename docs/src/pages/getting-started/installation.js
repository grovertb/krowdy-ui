import React from 'react';
import MarkdownDocs from 'components/MarkDowns/MarkdownDocs';

const req = require.context('containers/getting-started/installation', false, /\.(md|js|tsx)$/);
const reqSource = require.context(
  '!raw-loader!containers/getting-started/installation',
  false,
  /\.(js|tsx)$/,
);
const reqPrefix = 'containers/getting-started/installation';

function Page() {
  return <MarkdownDocs disableAd req={req} reqSource={reqSource} reqPrefix={reqPrefix} />;
}

export default Page;
