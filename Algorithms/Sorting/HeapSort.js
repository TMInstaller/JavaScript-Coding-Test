// Heap Sort is a comparison-based sorting algorithm
// that builds a heap from the input elements and then
// repeatedly extracts the maximum element from the heap and
// places it at the end of the sorted output array
function heapSort(arr) {
  function heapify(arr, n, i) {
    let largest = i;
    let l = 2 * i + 1;
    let r = 2 * i + 2;

    if (l < n && arr[l] > arr[largest]) largest = l;

    if (r < n && arr[r] > arr[largest]) largest = r;

    if (largest !== i) {
      [arr[i], arr[largest]] = [arr[largest], arr[i]];
      heapify(arr, n, largest);
    }
  }

  let n = arr.length;

  for (i = Math.floor(n / 2) - 1; i >= 0; i--) {
    heapify(arr, n, i);
  }

  for (i = n - 1; i > 0; i--) {
    [arr[0], arr[i]] = [arr[i], arr[0]];
    heapify(arr, i, 0);
  }

  return arr;
}

console.log([3, 6, 8, 10, 1, 2, 1]);
