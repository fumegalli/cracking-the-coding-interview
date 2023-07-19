const binarySearch = require('./binary-search');

describe('Binary Search Tests', () => {
  it('should find the target element in a sorted array', () => {
    const array = [1, 3, 5, 7, 9, 11, 13, 15];
    const target = 7;

    const index = binarySearch(array, target);

    expect(index).toBe(3);
  });

  it('should return the correct index when the target is at the beginning', () => {
    const arr = [2, 4, 6, 8, 10];
    const target = 2;

    const index = binarySearch(arr, target);

    expect(index).toBe(0);
  });

  it('should return the correct index when the target is at the end', () => {
    const arr = [2, 4, 6, 8, 10];
    const target = 10;

    const index = binarySearch(arr, target);

    expect(index).toBe(4);
  });

  it('should return -1 when the target is not in the array', () => {
    const arr = [2, 4, 6, 8, 10];
    const target = 3;

    const index = binarySearch(arr, target);

    expect(index).toBe(-1);
  });

  it('should return -1 when the array is empty', () => {
    const arr = [];
    const target = 5;

    const index = binarySearch(arr, target);

    expect(index).toBe(-1);
  });

  it('should return -1 when the target is smaller than all elements in the array', () => {
    const arr = [10, 20, 30, 40, 50];
    const target = 5;

    const index = binarySearch(arr, target);

    expect(index).toBe(-1);
  });

  it('should return -1 when the target is larger than all elements in the array', () => {
    const arr = [10, 20, 30, 40, 50];
    const target = 60;

    const index = binarySearch(arr, target);

    expect(index).toBe(-1);
  });

  it('should return -1 when the target is NaN', () => {
    const arr = [1, 2, 3, 4, 5];
    const target = NaN;

    const index = binarySearch(arr, target);

    expect(index).toBe(-1);
  });
});
