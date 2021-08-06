#### Notice: If you like this project, please consider [donating](https://github.com/matronator#support). The battery on my macbook died and I need to get it replaced to be able to work, but a battery replacement for a 7 year old macbook is kinda expensive and money's little tight right now. Any help would be much appretiated! Thank you :)

# Stacky.js

Create beautiful scrolling driven navigation lists with stacking headers that remain visible at all times.

Vanilla JS alternative to [Slinky.js](https://github.com/iclanzan/slinky) with no dependencies.

You can see demo here: https://matronator.github.io/stacky.js/

## Getting Started

### Instalation

#### NPM

Instal with

```
npm install stacky.js
```

and import into your project

```javascript
import Stacky from "stacky.js"
```

#### Browser

Download files from the [dist folder](https://github.com/matronator/stacky.js/tree/master/dist) and include in your HTML file

```html
<script src="path/to/stacky.min.js"></script>
```

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

Stacky.js looks for `<header>` tags by default, but you can change it to any CSS selector you want.

For example if you want to use Stacky on headings with some custom class like this one:

```html
<h2 class="stack-me">Heading</h2>
```

You just have to specify the selector when declaring Stacky like so:

```javascript
const stacky = new Stacky('h2.stack-me')
stacky.init()
```

## Credits

Original jQuery plugin: [Slinky.js](https://github.com/iclanzan/slinky)
