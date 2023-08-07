function _swap(position1, position2, array) {
  const aux = array[position1];
  array[position1] = array[position2];
  array[position2] = aux;
}

function _partition(array, low, high) {
  const pivot = array[high];
  let i = low -1;
  for (let j = low; j < high; j++) {
    if (array[j] <= pivot) {
      i++;
      _swap(j, i, array);
    }
  }
  _swap(i + 1, high, array);
  return i + 1;
}

function quickSort(array, low = 0, high = array.length - 1) {
  if (array.length <= 1) return array;
  if (low < high) {
    const pivot = _partition(array, low, high);
    quickSort(array, low, pivot - 1);
    quickSort(array, pivot + 1, high);
  }
  return array;
}

module.exports = quickSort;
