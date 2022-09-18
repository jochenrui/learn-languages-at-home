import React, { useState } from "react";
import Input from "../components/Input";
import Dropdown from "../components/Dropdown";
import { languages } from "../constants/values";
import GapFill from "../components/GapFill";
import { translateText } from "../api/translationServerAPI";
import { PORT } from "../constants/environment";

const HintTranslator = () => {
  const [text, setText] = useState("");
  const [selectedLanguage, setSelectedLanguage] = useState(languages[0]);
  const [translation, setTranslation] = useState("");

  const getTranslation = () => {
    translateText(selectedLanguage, text).then((translations) => {
      setTranslation(translations[0].text);
    });
  };

  const handleReset = () => {
    setText("");
    setTranslation("");
  };

  return (
    <div>
      <h1>Learning Languages with DeepL</h1>
      <div className="card card--inverted">
        <Input
          placeholder={
            text.length !== 0 ? "" : "Type something to translate..."
          }
          value={text}
          onChange={(e) => {
            setText(e.target.value);
          }}
        />
        <div className="button-group">
          <button onClick={getTranslation}>Send</button>
          <button onClick={handleReset} type="reset">
            Reset
          </button>
          <Dropdown
            options={languages}
            onSelect={(e) => setSelectedLanguage(e.target.value)}
          />
        </div>
        {translation.length > 0 && (
          <>
            <h3>Translation:</h3>
            <GapFill translation={translation} difficulty={2} />
          </>
        )}
      </div>
    </div>
  );
};

export default HintTranslator;
