import React from "react";

interface IWord {
  text: string;
  onChange: (value: string) => void;
}

const Word = ({ text, onChange }: IWord) => {
  return (
    <input
      value={text}
      className="gap-fill__word"
      role="textbox"
      onChange={(e) => onChange(e.target.value)}
    />
  );
};

export default Word;
