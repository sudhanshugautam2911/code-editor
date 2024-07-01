import { useState } from "react";
import "./App.css";
import SyntaxHighligter from "./HighlightCode";

function App() {
  const [language, setLanguage] = useState("cpp");

  const handleLanguageChange = (e) => {
    setLanguage(e.target.value);
  };

  return (
    <div className="App">
      <h1>Code Editor with Syntax Highlighting</h1>
      <div className="controls">
      <label htmlFor="language">Select a language:</label>
        <select id="language" onChange={handleLanguageChange} value={language}> 
          <option value="cpp">C++</option>
          <option value="tsx">Typescript</option>
          <option value="jsx">JavaScript</option>
          <option value="python">Python</option>
          <option value="markup">Markup</option>
        </select>
      </div>
      
      <SyntaxHighligter language={language} />
    </div>
  );
}

export default App;
