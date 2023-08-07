const mergeSort = require('./merge-sort');

describe('Merge Sort Tests', () => {
  it('should sort an array of numbers in ascending order', () => {
    const input = [3, 1, 4, 1];
    const expectedOutput = [1, 1, 3, 4];

    const sortedArray = mergeSort(input);

    expect(sortedArray).toEqual(expectedOutput);
  });

  it('should not change the input array if it is already sorted', () => {
    const input = [1, 2, 3, 4, 5];

    const sortedArray = mergeSort(input);

    expect(sortedArray).toEqual(input);
  });

  it('should return an empty array if the input array is empty', () => {
    const input = [];

    const sortedArray = mergeSort(input);

    expect(sortedArray).toEqual([]);
  });

  it('should return the input array as is if it has only one element', () => {
    const input = [42];

    const sortedArray = mergeSort(input);

    expect(sortedArray).toEqual([42]);
  });

  it('should sort an array of negative numbers in ascending order', () => {
    const input = [-5, -2, -10, -1, -8];
    const expectedOutput = [-10, -8, -5, -2, -1];

    const sortedArray = mergeSort(input);

    expect(sortedArray).toEqual(expectedOutput);
  });

  it('should sort an array with duplicate elements in ascending order', () => {
    const input = [4, 2, 5, 1, 3, 4, 2, 5, 3, 1];
    const expectedOutput = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5];

    const sortedArray = mergeSort(input);

    expect(sortedArray).toEqual(expectedOutput);
  });

  it('should sort a large array of numbers in ascending order', () => {
    const input = Array.from({ length: 10000 }, () => Math.floor(Math.random() * 10000));
    const expectedOutput = [...input].sort((a, b) => a - b);

    const sortedArray = mergeSort(input);

    expect(sortedArray).toEqual(expectedOutput);
  });
});