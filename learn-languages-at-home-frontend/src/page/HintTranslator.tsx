import React, { useState } from "react";
import Input from "../components/Input";
import Dropdown from "../components/Dropdown";
import { languages } from "../constants/values";
import axios from "axios";
import GapFill from "../components/GapFill";

const HintTranslator = () => {
  const [text, setText] = useState("");
  const [selectedLanguage, setSelectedLanguage] = useState(languages[0]);
  const [translation, setTranslation] = useState("");

  const getTranslation = () => {
    axios
      .post("http://localhost:9600/translate", {
        params: { language: selectedLanguage, text },
      })
      .then((res) => {
        const translation = res.data.translations[0];
        setTranslation(translation.text);
      })
      .catch((err) => console.error(err));
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
