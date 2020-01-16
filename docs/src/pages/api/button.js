import React from 'react'
import MarkdownDocs from 'components/MarkDowns/MarkdownDocs'
import markdown from './button.md'

export default function Page() {
  return <MarkdownDocs markdown={markdown} />
}
