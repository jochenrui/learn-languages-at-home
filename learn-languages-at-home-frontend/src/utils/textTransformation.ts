/**
 * Function to randomely replace characters in a string with the specified fill character
 * @param string : the string to be transformed
 * @param difficulty : difficulty to decide how many characters should be replaced
 * @param fillCharacter : replacement character
 * @returns transformed string with replaced characters
 */
export const replaceRandomCharacters = (
  string: string,
  difficulty: number,
  fillCharacter: string = "_"
): string => {
  if (!string) return; // Do nothing if no string passed
  const arr = [...string]; // Convert String to Array
  const len = arr.length;
  difficulty = Math.min(Math.abs(difficulty), len); // Fix to Positive and not > len
  while (difficulty) {
    const r = ~~(Math.random() * len);
    if (Array.isArray(arr[r])) continue; // Skip if is array (not a character)
    arr[r] = [fillCharacter]; // Insert an Array with the rep char
    --difficulty;
  }
  return arr.flat().join("");
};
