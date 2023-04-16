const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  let result = {};

  domains.forEach((el) => {
    let domainArr = el.split(".").reverse();
    console.log(domainArr);
    let value = "";
    console.log(value);

    for (let i = 0; i < domainArr.length; i++) {
      value = value + "." + domainArr[i];
      result.hasOwnProperty(value) ? (result[value] += 1) : (result[value] = 1);
      console.log(result);
    }
  });
  return result;
}

module.exports = {
  getDNSStats,
};
