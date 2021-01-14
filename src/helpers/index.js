/**
 * @method getLetterMatchCount
 * @param {string} guessedWord
 * @param {string} secreWord
 * @returns {number} - Number of letters matched between guessedWord and secretWord
 */

export function getLetterMatchCount(guessedWord, secretWord) {
  const secretLetterSet = new Set(secretWord.split(""));
  const guessedLetterSet = new Set(guessedWord.split(""));

  return [...secretLetterSet].filter((letter) => guessedLetterSet.has(letter))
    .length;
}
