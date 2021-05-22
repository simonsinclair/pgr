type Pgr = (
  pageCount: number,
  currentPage: number,
  displayCount: number,
) => number[];

export const getPageRange = (count: number, startPage: number): number[] => {
  return Array.from({ length: count }, (_, increment) => startPage + increment);
};

const pgr: Pgr = (pageCount, currentPage, displayCount) => {
  let pages;

  /**
   * - if, at beginning
   * - if, at end
   * - if, in middle
   */
  if (currentPage < Math.floor(displayCount / 2) + 1) {
    pages = getPageRange(displayCount, 1);
  } else if (currentPage >= pageCount - Math.floor(displayCount / 2)) {
    pages = getPageRange(displayCount, pageCount - displayCount + 1);
  } else {
    const offset = displayCount % 2 ? 0 : 1;
    pages = getPageRange(
      displayCount,
      currentPage - Math.floor(displayCount / 2) + offset,
    );
  }

  return pages;
};

export default pgr;
