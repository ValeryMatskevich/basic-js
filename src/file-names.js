const { NotImplementedError } = require("../extensions/index.js");

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  let namesObj = {};
  for (let i = 0; i < names.length; i++) {
    let curr = names[i];
    if (!Object.keys(namesObj).includes(curr)) {
      namesObj[curr] = 1;
    } else if (Object.keys(namesObj).includes(curr)) {
      let newFile = curr + `(${namesObj[curr]})`;
      namesObj[newFile] = 1;
      namesObj[curr] += 1;
    }
  }
  return Object.keys(namesObj);
}

module.exports = {
  renameFiles,
};
