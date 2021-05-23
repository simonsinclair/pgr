# pgr

> A tiny (839B) pagination library.

## Install

```sh
npm install @simonsinclair/pgr
```

## Usage

For example, create pagination for a list of articles.

```js
import pgr from 'pgr';

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

### pgr(totalPages, currentPage, displayLength)

Returns an array of pages the specified length. `pgr` will attempt to keep the current page centered in the array.

#### totalPages

Type: `number`.

The total number of pages in the collection.

#### currentPage

Type: `number`.

The current page.

#### displayLength

Type: `number`.

The number of pages to display.
