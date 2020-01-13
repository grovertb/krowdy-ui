const fs = require('fs')
const path = require('path')
const os = require('os')

const markdownRegex = /\.md$/
const componentRegex = /^([A-Z][a-z]+)+\.js/

function findPagesMarkdown(
  directory = path.resolve(__dirname, '../src/containers'),
  pagesMarkdown = [],
) {
  const items = fs.readdirSync(directory)

  items.forEach(item => {
    const itemPath = path.resolve(directory, item)

    if (fs.statSync(itemPath).isDirectory()) {
      findPagesMarkdown(itemPath, pagesMarkdown)
      return
    }

    if (!markdownRegex.test(item)) {
      return
    }

    let pathname = itemPath
      .replace(new RegExp(`\\${path.sep}`, 'g'), '/')
      .replace(/^.*\/pages/, '')
      .replace('.md', '')

    // Remove the last pathname segment.
    pathname = pathname
      .split('/')
      .slice(0, 3)
      .join('/')

    pagesMarkdown.push({
      // Relative location in the path (URL) system.
      filename: itemPath,
      // Relative location in the file system.
      pathname,
    })
  })

  return pagesMarkdown
}

// Returns the component source in a flat array.
function findComponents(directory, components = []) {
  const items = fs.readdirSync(directory)

  items.forEach(item => {
    const itemPath = path.resolve(directory, item)

    if (fs.statSync(itemPath).isDirectory()) {
      findComponents(itemPath, components)
      return
    }

    if (!componentRegex.test(item)) {
      return
    }

    components.push({
      filename: itemPath,
    })
  })

  return components
}

function getLineFeed(source) {
  const match = source.match(/\r?\n/)
  return match === null ? os.EOL : match[0]
}

function kebabCase(cadena) {
  return cadena.toLowerCase().replace(/ /,'-')
} 

module.exports = {
  findComponents,
  findPagesMarkdown,
  getLineFeed,
  kebabCase
}