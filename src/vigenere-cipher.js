const { NotImplementedError } = require("../extensions/index.js");

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */
class VigenereCipheringMachine {
  constructor(direction = true) {
    this.direction = direction;
  }

  encrypt(string, key) {
    if (string === undefined || key === undefined)
      throw new Error("Incorrect arguments!");

    string = string.toUpperCase();
    key = key.toUpperCase();
    let KeyRepetitions = Math.ceil(string.length / key.length);
    key = key.repeat(KeyRepetitions);

    const codeA = "A".charCodeAt(0);
    const alphabetCount = 26;
    let encodeString = [];

    for (let i = 0; i < string.length; i++) {
      if (string[i] === " ") {
        encodeString.push(string[i]);
      } else {
        let letterIndex = string.charCodeAt(i) - codeA;
        let offset = key.charCodeAt(i) - codeA;
        encodeString.push(
          String.fromCharCode(codeA + ((letterIndex + offset) % alphabetCount))
        );
      }
    }

    return this.direction
      ? encodeString
      : encodeString.split("").reverse().join("");
  }
  decrypt(string, key) {
    if (string === undefined || key === undefined)
      throw new Error("Incorrect arguments!");
    string = string.toUpperCase();
    key = key.toUpperCase();

    let KeyRepetitions = Math.ceil(string.length / key.length);
    key = key.repeat(KeyRepetitions);

    const codeA = "A".charCodeAt(0);
    const alphabetCount = 26;
    let decryptString = [];

    for (let i = 0; i < string.length; i++) {
      if (string[i] === " ") {
        decryptString.push(string[i]);
      } else {
        let letterIndex = string.charCodeAt(i) - codeA;
        let offset = key.charCodeAt(i) - codeA;

        decryptString.push(
          String.fromCharCode(
            codeA + ((letterIndex - offset + alphabetCount) % alphabetCount)
          )
        );
      }
    }

    return this.direction
      ? decryptString
      : decryptString.split("").reverse().join("");
  }
}

module.exports = {
  VigenereCipheringMachine,
};
