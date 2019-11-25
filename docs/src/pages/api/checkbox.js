
import React from 'react';
import MarkdownDocs from 'components/MarkDowns/MarkdownDocs';
import markdown from './checkbox.md';

export default function Page() {
  return <MarkdownDocs markdown={markdown} />;
}