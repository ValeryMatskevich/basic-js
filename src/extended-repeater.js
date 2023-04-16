const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  if (arguments.length === 1) return String(str);
  options.repeatTimes =
    options.repeatTimes === undefined ? 1 : options.repeatTimes;
  options.separator = options.separator === undefined ? "+" : options.separator;
  options.addition =
    options.addition === undefined
      ? ""
      : typeof options.addition === "string"
      ? options.addition
      : String(options.addition);
  options.additionRepeatTimes =
    options.additionRepeatTimes === undefined ? 1 : options.additionRepeatTimes;
  options.additionSeparator =
    options.additionSeparator === undefined ? "|" : options.additionSeparator;

  let additionArray = [];
  let strArray = [];

  for (let i = 0; i < options.additionRepeatTimes; i++) {
    additionArray.push(options.addition);
  }

  let combinedAddition = additionArray.join(`${options.additionSeparator}`);
  str += combinedAddition;

  for (let i = 0; i < options.repeatTimes; i++) {
    strArray.push(str);
  }
  let result = strArray.join(`${options.separator}`);

  return result;
}

module.exports = {
  repeater,
};
