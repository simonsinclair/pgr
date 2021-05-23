type Pgr = (
  totalPages: number,
  currentPage: number,
  displayLength: number,
) => number[];

export const getPageRange = (count: number, startPage: number): number[] => {
  return Array.from({ length: count }, (_, increment) => startPage + increment);
};

const pgr: Pgr = (totalPages, currentPage, displayLength) => {
  let pages;

  /**
   * - if, at beginning
   * - if, at end
   * - if, in middle
   */
  if (currentPage < Math.floor(displayLength / 2) + 1) {
    pages = getPageRange(displayLength, 1);
  } else if (currentPage >= totalPages - Math.floor(displayLength / 2)) {
    pages = getPageRange(displayLength, totalPages - displayLength + 1);
  } else {
    const offset = displayLength % 2 ? 0 : 1;
    pages = getPageRange(
      displayLength,
      currentPage - Math.floor(displayLength / 2) + offset,
    );
  }

  return pages;
};

export default pgr;
