import React, { useEffect, useState } from "react";
import Word from "./Word";

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
  const [transformedText, setTransformedText] = useState<string[]>([]);
  const [isCorrect, setIsCorrect] = useState<boolean>(false);

  useEffect(() => {
    const splitStrings = translation.split(" ");
    const transformedStrings = splitStrings.map((part) =>
      replacer(part, difficulty)
    );
    setTransformedText(transformedStrings);
    setIsCorrect(false);
  }, [translation]);

  useEffect(() => {
    if (transformedText?.join(" ") === translation) {
      setIsCorrect(true);
    }
  }, [transformedText]);

  const overwriteTransformedText = (index: number) => {
    return function (text: string) {
      const transformedTextCopy = [...transformedText];
      transformedTextCopy[index] = text;
      setTransformedText(transformedTextCopy);
    };
  };

  const renderWords = transformedText?.map((word, index) => {
    return <Word text={word} onChange={overwriteTransformedText(index)} />;
  });

  return (
    <>
      <div className={isCorrect ? "gap-fill--valid" : "gap-fill"}>
        {renderWords}
      </div>
      <div className="button-group">
        <button onClick={() => setTransformedText(translation.split(" "))}>
          Reveal
        </button>
      </div>
    </>
  );
};

export default GapFill;
