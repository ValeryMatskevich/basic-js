const { NotImplementedError } = require("../extensions/index.js");

/**
 * Extract season from given date and expose the enemy scout!
 *
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 *
 * @example
 *
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 *
 */
function getSeason(date) {
  console.log(date);
  if (date === undefined) return "Unable to determine the time of year!";
  try {
    date.getTime();
  } catch {
    throw new Error("Invalid date!");
  }
  const month = date.getMonth();
  const season =
    month === 11
      ? "winter"
      : month < 2
      ? "winter"
      : month < 5
      ? "spring"
      : month < 8
      ? "summer"
      : "autumn";

  return season;
}

module.exports = {
  getSeason,
};
