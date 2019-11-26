<p align="center">
  <a href="https://ui.krowdy.com/" rel="noopener" target="_blank"><img width="150" src="https://s3.amazonaws.com/cdn.krowdy.com/media/images/krowdy-home.svg" alt="Krowdy-UI logo"></a></p>
</p>

<h1 align="center">Krowdy-UI</h1>

<div align="center">

[React](https://reactjs.org/) components that implement [Google's Material Design](https://material.io/design/introduction/).

[![npm package](https://img.shields.io/npm/v/@krowdy-ui/core/latest.svg?color=%231890ff&label=%40krowdy-ui%2Fcore@latest)](https://www.npmjs.com/package/@krowdy-ui/core)
[![npm package](https://img.shields.io/npm/v/@krowdy-ui/core/next.svg?label=%40krowdy-ui%2Fcore@next)](https://www.npmjs.com/package/@krowdy-ui/core/v/next)
[![npm downloads](https://img.shields.io/npm/dm/@krowdy-ui/core.svg)](https://www.npmjs.com/package/@krowdy-ui/core)
[![CII Best Practices](https://bestpractices.coreinfrastructure.org/projects/3444/badge)](https://bestpractices.coreinfrastructure.org/projects/3444)
![Code style](https://img.shields.io/badge/code_style-eslint-4b32c3.svg)
[![Average time to resolve an issue](http://isitmaintained.com/badge/resolution/grovertb/krowdy-ui.svg)](https://isitmaintained.com/project/grovertb/krowdy-ui "Average time to resolve an issue")

</div>

##### This project based on [Material-UI](https://material-ui.com)

## Installation

Krowyd-UI is available as an [npm package](https://www.npmjs.com/package/@krowdy-ui/core).

**[Web site](https://ui.krowdy.com/)**
```sh
// with npm
npm install @krowdy-ui/core

// with yarn
yarn add @krowdy-ui/core
```

Please note that `@next` will only point to pre-releases; to get the latest stable release use `@latest` instead.

## Usage

Here is a quick example to get you started, **it's all you need**:

```jsx
import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from '@krowdy-ui/styles';
import { Button, createMuiTheme, krowdyTheme } from '@krowdy-ui/core';


function App() {
  return (
    <ThemeProvider theme={createMuiTheme(krowdyTheme)}>
      <Button variant="contained" color="krowdy">
        Hello World
      </Button>
    </ThemeProvider>
  );
}

ReactDOM.render(<App />, document.querySelector('#app'));
```

Yes, it's really all you need to get started as you can see in this live and interactive demo:

[![Edit Button](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/usage-h8tv4)

## Questions

For *how-to* questions and other non-issues,
please use [StackOverflow](https://stackoverflow.com/questions/tagged/krowdy-ui) instead of Github issues.
There is a StackOverflow tag called "krowdy-ui" that you can use to tag your questions.

## Examples

Are you looking for an example project to get started?
[We host some](https://ui.krowdy.com/getting-started/example-projects).

## Documentation

Check out our [documentation website](https://ui.krowdy.com).

## Changelog

Recently Updated?
Please read the [changelog](https://github.com/grovertb/krowdy-ui/releases).

## Contributing

Read our [contributing guide](/CONTRIBUTING.md) to learn about our development process, how to propose bugfixes and improvements, and how to build and test your changes to Krowdy-UI.

## License

This project is licensed under the terms of the
[MIT license](/LICENSE).
