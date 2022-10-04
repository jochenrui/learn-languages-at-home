import React, { useEffect, useState } from "react";
import Word from "./Word";
import { replaceRandomCharacters } from "../utils/textTransformation";

interface IGapFill {
  translation: string;
  difficulty: number;
}

const GapFill = ({ translation, difficulty }: IGapFill) => {
  const [transformedText, setTransformedText] = useState<string[]>([]);
  const [isCorrect, setIsCorrect] = useState<boolean>(false);

  useEffect(() => {
    const splitStrings = translation.split(" ");
    const transformedStrings = splitStrings.map((part) =>
      replaceRandomCharacters(part, difficulty)
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
    return (
      <Word key={word} text={word} onChange={overwriteTransformedText(index)} />
    );
  });

  return (
    <>
      <div role="list" className={isCorrect ? "gap-fill--valid" : "gap-fill"}>
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
