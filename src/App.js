import styles from "./App.module.css";
import React, { useState } from "react";
import { Editor } from "./components/Editor";
import { Preview } from "./components/Preview";

function App() {
  const [text, setText] = useState("");

  function editorHandler(event) {
    // console.log(event.target.value);
    setText(event.target.value);
  }

  return (
    <div className={styles.App}>
      <Editor text={text} editorHandler={editorHandler} />
      <Preview text={text} />
    </div>
  );
}

export default App;
