# React &lt;Skiplinks /&gt;

> Easily and consistently add skip navigation links to your React app

Markup-based, simple to use.

[![NPM](https://img.shields.io/npm/v/react-skiplinks.svg)](https://www.npmjs.com/package/react-skiplinks) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save react-skiplinks
```

## Usage

Add `data-skip-link` attribute with the text you'd like to show for the skip link, and an ID to all the elements you'd like to generate skip links to.

```tsx
import React, { Component } from 'react'

import SkipLinks from 'react-skiplinks'
import 'react-skiplinks/dist/index.css'

class Example extends Component {
  render() {
    return (
      <>
        <SkipLinks />
        <section data-skip-link="Go to Introduction" id="introduction"></section>
        <section data-skip-link="Go to Usage" id="usage"></section>
        <section data-skip-link="Go to How Does It Work?" id="how-does-it-work"></section>
        <section data-skip-link="Go to More Details" id="more-details"></section>
        <section data-skip-link="Go to Footer" id="footer"></section>
      </>
    )
  }
}
```

And it will generate these skip links:
```html
<nav class="skipLinks">
  <ul>
    <li><a href="#introduction">Go to Introduction</a></li>
    <li><a href="#usage">Go to Usage</a></li>
    <li><a href="#how-does-it-work">Go to How Does It Work?</a></li>
    <li><a href="#more-details">Go to More Details</a></li>
    <li><a href="#footer">Go to Footer</a></li>
  </ul>
</nav>
```

See it in action [here](http://www.yanandcoffee.com/react-skiplinks/).

## License

MIT © [yanandcoffee](https://github.com/yanandcoffee)
