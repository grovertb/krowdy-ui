import React from 'react'
import useMarkdownDocsContents from './hooks';
import { demoRegexp, SOURCE_CODE_ROOT_URL } from './utils';
import Demo from './Demo';
import MarkdownElement from './MarkdownElement';

export default function MarkdownDocs(props) {
  const {
    req,
    reqPrefix,
    reqSource,
    markdown: markdownProp,
    markdownLocation: markdownLocationProp,
  } = props;

  let demos
  let markdown = markdownProp;

  if (req) {
    demos = {};
    let markdowns;
    req.keys().forEach(filename => {
      if (filename.indexOf('.md') !== -1) {
        markdowns = req(filename).default;
      } else if (filename.indexOf('.tsx') !== -1) {
        const demoName = `${reqPrefix}/${filename.replace(/\.\//g, '').replace(/\.tsx/g, '.js')}`;

        demos[demoName] = {
          ...demos[demoName],
          tsx: req(filename).default,
          rawTS: reqSource(filename).default,
        };
      } else {
        const demoName = `${reqPrefix}/${filename.replace(/\.\//g, '')}`;

        demos[demoName] = {
          ...demos[demoName],
          js: req(filename).default,
          raw: reqSource(filename).default,
        };
      }
    });
    markdown = markdowns;
  }

  const { contents/*, markdownLocation */ } = useMarkdownDocsContents({
    markdown,
    markdownLocationProp,
  });

  const demosMarkdown = contents.map((content, index) => {
    if (demos && demoRegexp.test(content)) {
      let demoOptions;
      try {
        demoOptions = JSON.parse(`{${content}}`);
      } catch (err) {
        console.error('JSON.parse fails with: ', `{${content}}`);
        console.error(err);
        return null;
      }

      const name = demoOptions.demo;
      
      if(demos[name]) {
        return (
          <Demo
            key={content}
            demo={demos[name]}
            demoOptions={demoOptions}
            githubLocation={`${SOURCE_CODE_ROOT_URL}/${name}`}
          />
        )
      } else {
        return null
      }
    } else {
      return (
        <MarkdownElement
          key={index}
          text={content}
        />
      )
    }
  })

  return (
    <div>
      {
        demosMarkdown
      }
    </div>
  )
}