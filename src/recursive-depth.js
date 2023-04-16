const { NotImplementedError } = require("../extensions/index.js");

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 *
 * @example
 *
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */

class DepthCalculator {
  // calculateDepth(arr, resCount = 1) {
  //   let count = resCount;
  //   if (arr.some((element) => Array.isArray(element))) {
  //     count += 1;
  //     arr.forEach((element) => {
  //       if (Array.isArray(element)) {
  //         console.log(count);
  //         return this.calculateDepth(element, count);
  //       }
  //     });
  //   }
  //   return count;
  // }
  calculateDepth(arr, prevCount = 1) {
    if (Array.isArray(arr) && arr.some((element) => Array.isArray(element))) {
      let currCount = prevCount;
      arr.forEach((element) => {
        let newCount = this.calculateDepth(element, prevCount + 1);
        if (newCount > currCount) {
          currCount = newCount;
        }
      });
      return currCount;
    } else {
      return prevCount;
    }
  }
}

module.exports = {
  DepthCalculator,
};
