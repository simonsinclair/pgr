type Pgr = (
  totalPages: number,
  currentPage: number,
  length: number,
) => number[];

export const getRange = (count: number, startIndex: number): number[] => {
  return Array.from({ length: count }, (_, index) => startIndex + index);
};

const pgr: Pgr = (totalPages, currentPage, length) => {
  const centerPage = Math.floor(length / 2);
  let pages;

  if (currentPage < centerPage + 1) {
    pages = getRange(length, 1);
  } else if (currentPage >= totalPages - centerPage) {
    pages = getRange(length, totalPages - length + 1);
  } else {
    const offset = length % 2 ? 0 : 1;
    pages = getRange(length, currentPage - centerPage + offset);
  }

  return pages;
};

export default pgr;
