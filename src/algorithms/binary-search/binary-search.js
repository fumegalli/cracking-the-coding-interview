function binarySearch(array, target) {
  if (array.length === 0 || isNaN(target)) return -1;
  let minIndex = 0;
  let maxIndex = array.length - 1;
  while (minIndex <= maxIndex) {
    const midIndex = Math.floor((minIndex + maxIndex) / 2);
    const midValue = array[midIndex];
    if (midValue === target) {
      return midIndex;
    } else if (midValue < target) {
      minIndex = midIndex + 1;
    } else {
      maxIndex = midIndex - 1;
    }
  }
  return -1;
}

module.exports = binarySearch;