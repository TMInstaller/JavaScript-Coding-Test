// Binary search is an efficient algorithm for finding
// an item from a sorted list of item.
// It works by repeatedly dividing in half the portion
// of the array being searched, until the target value is found

function binarySearch(arr, x) {
  let low = 0;
  let high = arr.length - 1;

  while (low <= high) {
    let mid = Math.floor((high + low) / 2);

    if (arr[mid] < x) {
      low = mid + 1;
    } else if (arr[mid] > x) {
      high = mid - 1;
    } else {
      return mid;
    }
  }

  return -1;
}

console.log(binarySearch([1, 2, 3, 4, 5, 6, 7], 4));
