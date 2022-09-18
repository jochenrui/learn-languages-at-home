import { useEffect, useState } from "react";

interface IGapFill {
  translation: string;
  difficulty: number;
}

const replacer = (
  string: string,
  difficulty: number,
  fillCharacter: string = "_"
) => {
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

const GapFill = ({ translation, difficulty }: IGapFill) => {
  const [transformedText, setTransformedText] = useState<string>();
  const [isCorrect, setIsCorrect] = useState<boolean>(false);

  useEffect(() => {
    const splitStrings = translation.split(" ");
    const transformedStrings = splitStrings.map((part) =>
      replacer(part, difficulty)
    );
    setTransformedText(transformedStrings.join(" "));
    setIsCorrect(false);
  }, [translation]);

  useEffect(() => {
    if (transformedText === translation) {
      setIsCorrect(true);
    }
  }, [transformedText]);

  const overwriteTransformedText = (text: string) => {
    setTransformedText(text);
  };

  return (
    <>
      <input
        className={isCorrect ? "input__field-correct" : "input__field"}
        value={transformedText ? transformedText : translation}
        onChange={(e) => overwriteTransformedText(e.target.value)}
      />
      <div className="button-group">
        <button onClick={() => setTransformedText(translation)}>Reveal</button>
      </div>
    </>
  );
};

export default GapFill;
