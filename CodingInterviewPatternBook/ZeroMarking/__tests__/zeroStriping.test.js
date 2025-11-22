const { zeroStriping } = require('../zeroMarking');

describe('zeroStriping', () => {
  test('example matrix: sets row and column to zero for a single zero', () => {
    const input = [
      [1,1,1],
      [1,0,1],
      [1,1,1]
    ];
    const expected = [
      [1,0,1],
      [0,0,0],
      [1,0,1]
    ];
    const result = zeroStriping(input);
    expect(result).toEqual(expected);
  });

  test('multiple zeros set correct rows and columns to zero', () => {
    const input = [
      [5,4,0,2],
      [1,0,3,4],
      [7,8,9,1],
      [0,6,5,3]
    ];
    const expected = [
      [0,0,0,0],
      [0,0,0,0],
      [0,0,0,1],
      [0,0,0,0]
    ];
    expect(zeroStriping(input)).toEqual(expected);
  });

  test('zero in first row and first column are handled', () => {
    const input = [
      [0,2,3],
      [4,5,6],
      [7,8,9]
    ];
    const expected = [
      [0,0,0],
      [0,5,6],
      [0,8,9]
    ];
    expect(zeroStriping(input)).toEqual(expected);
  });

  test('no zeros leaves matrix unchanged', () => {
    const input = [
      [1,2,3],
      [4,5,6],
      [7,8,9]
    ];
    const copy = JSON.parse(JSON.stringify(input));
    expect(zeroStriping(input)).toEqual(copy);
  });

  test('single element zero matrix becomes zero', () => {
    const input = [[0]];
    expect(zeroStriping(input)).toEqual([[0]]);
  });
});