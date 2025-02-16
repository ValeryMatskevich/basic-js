const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(arr) {
  let columns = arr[0].length;
  let rows = arr.length;
  let sum = 0;
  for (let i = 0; i < columns; i++) {
    for (let j = 0; j < rows; j++) {
      if (arr[j][i] !== 0) {
        sum += arr[j][i];
      } else {
        break;
      }
    }
  }
  return sum;
}

module.exports = {
  getMatrixElementsSum,
};
