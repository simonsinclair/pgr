type Callback = (page: number) => unknown;

type GetRange = (
  length: number,
  startIndex: number,
  callback: Callback,
) => unknown[];

type Pgr = (
  totalPages: number,
  currentPage: number,
  length: number,
  callback?: Callback,
) => unknown[];

export const getRange: GetRange = (length, startIndex, callback) => {
  return Array.from({ length }, (_, index) => callback(startIndex + index));
};

const pgr: Pgr = (
  totalPages,
  currentPage,
  rawLength,
  callback = (page) => page,
) => {
  const length = Math.min(totalPages, rawLength);
  const centerPage = Math.floor(length / 2);

  let pages;
  if (currentPage < centerPage + 1) {
    pages = getRange(length, 1, callback);
  } else if (currentPage >= totalPages - centerPage) {
    pages = getRange(length, totalPages - length + 1, callback);
  } else {
    const offset = length % 2 ? 0 : 1;
    pages = getRange(length, currentPage - centerPage + offset, callback);
  }
  return pages;
};

export default pgr;
