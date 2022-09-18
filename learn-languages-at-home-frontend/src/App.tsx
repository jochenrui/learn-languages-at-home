import { useState } from "react";
import "./App.css";
import HintTranslator from "./page/HintTranslator";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <HintTranslator />
    </div>
  );
}

export default App;
