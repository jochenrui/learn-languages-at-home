/**
 * Function to randomely replace characters in a string with the specified fill character
 * @param string : the string to be transformed
 * @param difficulty : difficulty to decide how many characters should be replaced
 * @param fillCharacter : replacement character
 * @returns transformed string with replaced characters
 */
export const replaceRandomCharacters = (
  string: string,
  fillCharacter: string = "_"
): string => {
  let countOfReplacedChars = ~~(string.length / 3);

  const transformedString = [...string]; // Convert String to Array

  while (countOfReplacedChars !== 0) {
    const index = ~~(Math.random() * string.length);
    if (Array.isArray(transformedString[index])) continue; // Skip if is array (not a character)
    transformedString[index] = [fillCharacter]; // Insert an Array with the rep char
    --countOfReplacedChars;
  }
  return transformedString.flat().join("");
};
