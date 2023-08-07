const quickSort = require('./quick-sort');

describe('Quick Sort Tests', () => {
  it('should sort an empty array', () => {
    expect(quickSort([])).toEqual([]);
  });

  it('should sort an array with one element', () => {
    expect(quickSort([42])).toEqual([42]);
  });

  it('should sort an array with multiple elements', () => {
    const unsortedArray = [38, 27, 43, 3, 9, 82, 10];

    const sortedArray = quickSort(unsortedArray);

    expect(sortedArray).toEqual([3, 9, 10, 27, 38, 43, 82]);
  });

  it('should sort an array with duplicate elements', () => {
    const unsortedArray = [38, 27, 43, 3, 9, 82, 10, 27];

    const sortedArray = quickSort(unsortedArray);

    expect(sortedArray).toEqual([3, 9, 10, 27, 27, 38, 43, 82]);
  });

  it('should sort a large array', () => {
    const unsortedArray = Array.from({ length: 1000 }, () => Math.floor(Math.random() * 1000));

    const sortedArray = quickSort(unsortedArray);
    
    expect(sortedArray).toEqual(unsortedArray.slice().sort((a, b) => a - b));
  });
});
