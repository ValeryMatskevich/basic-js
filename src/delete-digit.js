const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let nString = n.toString();
  let arrayOfNumbers = [];
  for (let i = 0; i < nString.length; i++) {
    let numberByNumbers = nString.split("");
    numberByNumbers.splice(i, 1);
    arrayOfNumbers.push(+numberByNumbers.join(""));
  }
  return Math.max(...arrayOfNumbers);
}

module.exports = {
  deleteDigit,
};
