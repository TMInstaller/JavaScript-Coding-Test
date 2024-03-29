// QuickSort is a divide-and-conquer algorithm that choose
// a "pivot" element from the array and partitions the other elements
// into two sub-arrays, according to whether they are less than or
// greater than the pivot. The sub-arrays are then sorted recursively.
function quickSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  const pivot = arr[Math.floor(arr.length / 2)];
  const left = [];
  const right = [];
  const equal = [];

  for (el of arr) {
    if (el < pivot) {
      left.push(el);
    } else if (el > pivot) {
      right.push(el);
    } else {
      equal.push(el);
    }
  }

  return [...quickSort(left), ...equal, ...quickSort(right)];
}

console.log(quickSort([3, 6, 8, 10, 1, 2, 1, 3, 2, 2, 5, 6, 4, 6, 7, 43]));
