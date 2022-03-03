import styles from "./App.module.css";
import React, { useState } from 'react';
import { Editor } from "./components/Editor";
import { Preview } from "./components/Preview";

function App() {
  const [word, setWord] = useState();

  function testHandle(word){
    console.log(word.target.value);
    setWord(word.target.value);
  }

  return (
    <div className={styles.App}>
      <Editor word={word}/>
      <Preview word={word}/>
    </div>
  );
}

export default App;
