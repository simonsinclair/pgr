# pgr

> A tiny pagination range creator for your pagination UI.

![npm bundle size](https://img.shields.io/bundlephobia/minzip/@simonsinclair/pgr)

## Install

```sh
npm i @simonsinclair/pgr
```

## Usage

```js
const { default: pgr } = require('@simonsinclair/pgr');

const ARTICLES_PER_PAGE = 20;
const PAGINATION_LENGTH = 7;

const articles = [
  { title: 'Article 1' },
  { title: 'Article 2' },
  // ...
];

const totalPages = Math.ceil(articles.length / ARTICLES_PER_PAGE);
const currentPage = 5;

const pagination = pgr(totalPages, currentPage, PAGINATION_LENGTH);

console.log(pagination);
```

```js
[2, 3, 4, 5, 6, 7, 8];
```

## Tips

### Using the callback parameter

For example, pass a JSX Element as a callback.

```jsx
<ol>
  {pgr(totalPages, currentPage, PAGINATION_LENGTH, (pageNum) => (
    <li key={pageNum}>
      <button>{pageNum}</button>
    </li>
  ))}
</ol>
```

## API

### pgr(totalPages, currentPage, length, callback?)

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

#### callback

Type: `Function`.

Default: `(page) => page`.

A function that is called on each page in the range.

## Supported browsers

IE11, and all modern browsers.
