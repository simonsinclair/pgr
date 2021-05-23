# pgr

> A tiny pagination range creator.

[![CI](https://github.com/simonsinclair/pgr/actions/workflows/ci.yml/badge.svg)](https://github.com/simonsinclair/pgr/actions/workflows/ci.yml)

## Install

```sh
npm install @simonsinclair/pgr
```

## Usage

For example, create pagination for a list of articles.

```js
const { default: pgr } = require('@simonsinclair/pgr');

const DISPLAY_LENGTH = 7;

const articles = [
  { title: 'Article 1' },
  { title: 'Article 2' },
  // ...
];

const currentPage = 5;

const pagination = pgr(articles.length, currentPage, DISPLAY_LENGTH);

console.log(pagination);
```

```js
[2, 3, 4, 5, 6, 7, 8];
```

## API

### pgr(totalPages, currentPage, length)

Returns an array of pages the specified length. `pgr` will attempt to center the array around the current page.

#### totalPages

Type: `number`.

The total number of pages.

#### currentPage

Type: `number`.

The current page.

#### length

Type: `number`.

The length of the pagination array.
