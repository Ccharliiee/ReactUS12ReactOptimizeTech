import React, { useState, useCallback } from "react";

import Button from "./components/UI/Button/Button";
import DemoP from "./components/Demo/DemoP";
import "./App.css";

function App() {
  const [showParagraph, setShowParagraph] = useState(false);
  const [allowShowParagraph, setallowShowParagraph] = useState(false);

  console.log("APP RUNNING");

  const allowtoggleParagraphHandler = () => {
    setallowShowParagraph(true);
  };
  const toggleParagraphHandler = useCallback(() => {
    if (allowShowParagraph) {
      setShowParagraph((prevShowParagraph) => !prevShowParagraph);
    }
  }, [allowShowParagraph]);

  return (
    <div className="app">
      <h1>Hi there!</h1>
      <DemoP show={showParagraph} />
      <Button onClick={allowtoggleParagraphHandler}>
        Allow Toggle Paragraph!
      </Button>
      <Button onClick={toggleParagraphHandler}>Toggle Paragraph!</Button>
    </div>
  );
}

export default App;
