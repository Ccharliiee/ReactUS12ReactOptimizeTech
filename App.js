import React, { useState, useCallback, useMemo } from "react";

import Button from "./components/UI/Button/Button";
import DemoP from "./components/Demo/DemoP";
import "./App.css";

function App() {
  const [listTitle, setListTitle] = useState("A List");

  const changeTitleHandler = useCallback(() => {
    setListTitle("New Title");
  }, []);

  const listItems = useMemo(() => [8, 5, 1, 4, 9], []);

  return (
    <div className="app">
      <h1>Hi there!</h1>
      <DemoP title={listTitle} items={listItems} />
      <Button onClick={changeTitleHandler}>change list Title</Button>
    </div>
  );
}

export default App;
