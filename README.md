# Tinybar

Tiny progress bar (~320 bytes gzipped).

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

### Change bar color

```css
/* Wrapper div element */
.tinybar {
  background: #fff !important;
}

/* Progress bar */
.tinybar div {
  background: #48bb78 !important;
}
```
