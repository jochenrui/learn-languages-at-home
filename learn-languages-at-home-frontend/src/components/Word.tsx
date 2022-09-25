interface IWord {
  text: string;
  onChange: (value: string) => void;
}

const Word = ({ text, onChange }: IWord) => {
  return (
    <span
      className="gap-fill__word"
      role="textbox"
      contentEditable={true}
      onChange={(e) => onChange(e.target.value)}
    >
      {text}
    </span>
  );
};

export default Word;
