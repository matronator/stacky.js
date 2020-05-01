# Stacky.js

Create beautiful scrolling driven navigation lists with stacking headers that remain visible at all times.

Vanilla JS alternative to [Slinky.js](https://github.com/iclanzan/slinky) with no dependencies.

You can see demo here: https://matronator.github.io/stacky.js/

## Getting Started

### Instalation

#### NPM

Instal with `npm install stacky.js` and import into your project `import Stacky from "stacky.js"`

#### Browser

Download the files from the [dist folder](https://github.com/matronator/stacky.js/tree/master/dist) and include in your HTML file `<script src="path/to/stacky.min.js"></script>`

### Example

A minimal HTML structure for Stacky to work with can look something like this:

```html
<main>
  <nav>
    <section>
      <header>First header</header>
      <p>Some content</p>
    </section>
    <section>
      <header>Second header</header>
      <ul>
        <li>First item</li>
        <li>Second item</li>
      </ul>
    </section>
    <!-- More sections here -->
  </nav>
</main>
```

Then you just initialize Stacky like this:

```javascript
const stacky = new Stacky()
stacky.init()
```

Stacky.js initializes on `<header>` tags by default, but you can change it to any CSS selector you want.

For example if you want initialize on headings with a specific class, like `<h2 class="stack-me">Heading</h2>` you just have to specify the selector like this:

```javascript
const stacky = new Stacky('h2.stack-me')
stacky.init()
```

## Credits

Original jQuery plugin: [Slinky.js](https://github.com/iclanzan/slinky)
