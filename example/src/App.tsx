import React from 'react'

import { SkipLinks } from 'react-skiplinks'
import 'react-skiplinks/dist/index.css'
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { okaidia } from "react-syntax-highlighter/dist/esm/styles/prism";

const App = () => {
  return (
    <>
      <div className="parent">
        <header data-skip-link="Go to Introduction" id="introduction">
          <h1>React {`<SkipLinks />`}</h1>
          <h2>
            <em>
              Easily and consistently add skip navigation links to your React app
            </em>
          </h2>
        </header>
        <SkipLinks />
        <section data-skip-link="Go to Usage" id="usage">
          <h2>Usage</h2>
          <p>
            Add <code>data-skip-link</code> attribute with the text you'd like to show for the skip link, and an ID to all the
            elements you'd like to generate skip links to.
          </p>
          <p>For example:</p>
          <SyntaxHighlighter language="html" style={okaidia}>
            {`<section data-skip-link="Go to Introduction" id="introduction"></section>
<section data-skip-link="Go to Usage" id="usage"></section>
<section data-skip-link="Go to How Does It Work?" id="how-does-it-work"></section>
<section data-skip-link="Go to More Details" id="more-details"></section>
<section data-skip-link="Go to Footer" id="footer"></section>`}
          </SyntaxHighlighter>
          <p>It will generate:</p>
          <SyntaxHighlighter language="html" style={okaidia}>
            {`<nav class="skipLinks">
  <ul>
    <li><a href="#introduction">Go to Introduction</a></li>
    <li><a href="#usage">Go to Usage</a></li>
    <li><a href="#how-does-it-work">Go to How Does It Work?</a></li>
    <li><a href="#more-details">Go to More Details</a></li>
    <li><a href="#footer">Go to Footer</a></li>
  </ul>
</nav>`}
          </SyntaxHighlighter>
          <p>
            In your app, add the <code>{`<SkipLinks />`}</code> component where you'd like
            them to be (usually one of the first items, or at bottom):
          </p>
          <SyntaxHighlighter language="html" style={okaidia}>
            {`<SkipLinks />
{content}`}
          </SyntaxHighlighter>
          <p>Try it out! On this page, it was placed right after the header.</p>
          <p>By default, the component itself has no imposed styles, but it will accept a <code>className</code> prop if you wish to style the component.</p>
        </section>
        <section data-skip-link="Go to How Does It Work?" id="how-does-it-work">
          <h2>How does it work?</h2>
          <p>
            Internal to the component, it uses{" "}
            <code>document.querySelectorAll()</code> in its{" "}
            <code>{`useSkipLinks`}</code> hook to query for all the elements
            that use the <code>data-skip-link</code> attribute (except within the <code>{`<pre>`}</code> and <code>{`<code>`}</code> tags) and constructs an
            array compatible with the <code>{`<SkipLinks />`}</code> component.
          </p>
          <h3>useSkipLinks hook</h3>
          <SyntaxHighlighter language="jsx" style={okaidia}>
            {`import { useState, useEffect } from "react";
  
export default function useSkipLinks() {
  const [skipLinks, setSkipLinks] = useState([]);

  useEffect(() => {
    const skipLinkElements = document.querySelectorAll(
      "[data-skip-link]:not(pre):not(code)"
    );
    const links = Array.from(skipLinkElements, skipLink => ({
      title: skipLink.dataset.skipLink,
      id: skipLink.id
    }));

    setSkipLinks(links);
  }, []);

  return { skipLinks };
}`}
          </SyntaxHighlighter>
          <h3>{`<SkipLinks />`} component</h3>
          <SyntaxHighlighter language="jsx" style={okaidia}>
            {`import React from "react";
import classNames from "classnames";
import styles from "./SkipLinks.module.css";
import useSkipLinks from "./useSkipLinks";

export default function SkipLinks({ className }) {
  const { skipLinks } = useSkipLinks();
  
  return (
    <nav className={classNames(styles.skipLinks, className)}>
      <ul>
        {skipLinks.map(link => (
          <li key={link.title}>
            <a href=#{link.id}>Go to {link.title}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}`}
          </SyntaxHighlighter>
          <p>
            The <code>{`<SkipLinks />`}</code> component itself is pretty straightforward.
          </p>
        </section>
        <section data-skip-link="Go to More Details" id="more-details">
          <h2>More Details</h2>
          <p>
            This was originally written in plain vanilla React, then converted to Typescript. The reason `data-skip-link` allows freeform text is to support localization. You can read more about my thought process of this implementation in my blog post,{" "}
            <a href="https://www.yanandcoffee.com/2020/07/05/skip-links/">{`Creating a <SkipLinks/> Component`}</a>.
          </p>
        </section>
        <footer data-skip-link="Go to Footer" id="footer">
          Created by{" "}
          <a href="https://www.linkedin.com/in/yanandcoffee">Yan Li</a>
        </footer>
      </div>
    </>
  )
}

export default App
