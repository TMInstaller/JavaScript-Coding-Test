/**
 * @param {number[][]} mat
 * @return {number}
 */
function checkRow(mat, i) {
  let index = -1;
  for (let j = 0; j < mat[0].length; j += 1) {
    if (mat[i][j] === 1) {
      if (index >= 0) {
        return -1;
      } else {
        index = j;
      }
    }
  }
  return index;
}

function checkColumn(mat, i, index) {
  for (let j = 0; j < mat.length; j += 1) {
    if (mat[j][index] === 1 && j !== i) {
      return false;
    }
  }
  return true;
}

var numSpecial = function (mat) {
  let specials = 0;

  for (let i = 0; i < mat.length; i += 1) {
    let index = checkRow(mat, i);
    if (index >= 0 && checkColumn(mat, i, index)) {
      specials += 1;
    }
  }

  return specials;
};
