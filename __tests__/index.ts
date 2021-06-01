import pgr, { getRange } from '../dist';

describe('getRange', () => {
  it('returns expected ranges', () => {
    expect(getRange(10, 1, (page) => page)).toEqual([
      1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
    ]);
    expect(getRange(5, 2, (page) => ({ page }))).toEqual([
      { page: 2 },
      { page: 3 },
      { page: 4 },
      { page: 5 },
      { page: 6 },
    ]);
  });
});

describe('pgr', () => {
  it("returns expected pagination ranges when 'totalPages' is less than or equal to 'length'", () => {
    expect(pgr(6, 1, 10)).toEqual([1, 2, 3, 4, 5, 6]);
    expect(pgr(6, 3, 6)).toEqual([1, 2, 3, 4, 5, 6]);
  });

  it("returns expected pagination ranges when 'length' is an odd number", () => {
    expect(pgr(9, 1, 7)).toEqual([1, 2, 3, 4, 5, 6, 7]);
    expect(pgr(9, 2, 7)).toEqual([1, 2, 3, 4, 5, 6, 7]);
    expect(pgr(9, 3, 7)).toEqual([1, 2, 3, 4, 5, 6, 7]);
    expect(pgr(9, 4, 7)).toEqual([1, 2, 3, 4, 5, 6, 7]);
    expect(pgr(9, 5, 7)).toEqual([2, 3, 4, 5, 6, 7, 8]);
    expect(pgr(9, 6, 7)).toEqual([3, 4, 5, 6, 7, 8, 9]);
    expect(pgr(9, 7, 7)).toEqual([3, 4, 5, 6, 7, 8, 9]);
    expect(pgr(9, 8, 7)).toEqual([3, 4, 5, 6, 7, 8, 9]);
    expect(pgr(9, 9, 7)).toEqual([3, 4, 5, 6, 7, 8, 9]);
  });

  it("returns expected pagination ranges when 'length' is an even number", () => {
    expect(pgr(10, 1, 6)).toEqual([1, 2, 3, 4, 5, 6]);
    expect(pgr(10, 2, 6)).toEqual([1, 2, 3, 4, 5, 6]);
    expect(pgr(10, 3, 6)).toEqual([1, 2, 3, 4, 5, 6]);
    expect(pgr(10, 4, 6)).toEqual([2, 3, 4, 5, 6, 7]);
    expect(pgr(10, 5, 6)).toEqual([3, 4, 5, 6, 7, 8]);
    expect(pgr(10, 6, 6)).toEqual([4, 5, 6, 7, 8, 9]);
    expect(pgr(10, 7, 6)).toEqual([5, 6, 7, 8, 9, 10]);
    expect(pgr(10, 8, 6)).toEqual([5, 6, 7, 8, 9, 10]);
    expect(pgr(10, 9, 6)).toEqual([5, 6, 7, 8, 9, 10]);
    expect(pgr(10, 10, 6)).toEqual([5, 6, 7, 8, 9, 10]);
  });

  it('returns expected pagination range when callback is passed', () => {
    expect(pgr(6, 1, 10, (page) => `Page ${page}`)).toEqual([
      'Page 1',
      'Page 2',
      'Page 3',
      'Page 4',
      'Page 5',
      'Page 6',
    ]);
  });
});
