# Tinybar

Tiny progress bar (~340 bytes gzipped).

## Installation

```sh
# Yarn
yarn add tinybar

# NPM
npm install tinybar --save

# UMD
<script src="https://unpkg.com/tinybar/dist/index.umd.js"></script>
```

## Usage

```js
import Tinybar from 'tinybar'

const tinybar = new Tinybar()

tinybar.go(30)
tinybar.go(100)
```

## Add Custom CSS
Tinybar comes with some default inline styling that works out-of-the-box. You can take control of the styling by passing an `id` when instantiating Tinybar.

```js
const tinybar = new Tinybar('my-progress-bar')
```

Now, just add your own CSS:

```css
/* Wrapper div element */
#my-progress-bar {
  background: #e2e8f0;
  height: 2px;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  transition: height .3s ease-in;
  width: 100%;
  z-index: 9999;
}

/* Progress bar */
#my-progress-bar div {
  background: #90cdf4;
  height: 100%;
  transition: width .2s ease-out;
  width: 0;
}
```
