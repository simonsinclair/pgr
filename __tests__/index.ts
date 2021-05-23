import pgr, { getRange } from '../dist';

describe('getRange', () => {
  it('returns a range', () => {
    expect(getRange(10, 1)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
    expect(getRange(5, 2)).toEqual([2, 3, 4, 5, 6]);
  });
});

describe('pgr', () => {
  it('returns a pagination range for an odd number of pages', () => {
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

  it('returns a pagination range for an even number of pages', () => {
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
});
